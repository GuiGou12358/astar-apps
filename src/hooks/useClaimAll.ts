import BN from 'bn.js';
import { $api } from 'boot/api';
import { getInjector } from 'src/hooks/helper/wallet';
import { useStore } from 'src/store';
import { hasExtrinsicFailedEvent } from 'src/store/dapp-staking/actions';
import { computed, ref, watchEffect } from 'vue';
import { TxType } from './custom-signature/message';
import { ExtrinsicPayload } from './helper';
import { getIndividualClaimTxs, PayloadWithWeight } from './helper/claim';
import { useCurrentEra, useCustomSignature } from './index';

const MAX_BATCH_WEIGHT = new BN('50000000000');

export function useClaimAll() {
  const batchTxs = ref<PayloadWithWeight[]>([]);
  const isLoading = ref<boolean>(true);
  const store = useStore();
  const senderAddress = computed(() => store.getters['general/selectedAddress']);
  const substrateAccounts = computed(() => store.getters['general/substrateAccounts']);
  const dapps = computed(() => store.getters['dapps/getAllDapps']);
  const isSendingTx = computed(() => store.getters['general/isLoading']);

  const { era } = useCurrentEra();
  const {
    handleResult,
    handleTransactionError,
    dispatchError,
    handleCustomExtrinsic,
    isCustomSig,
  } = useCustomSignature({ txType: TxType.dappsStaking });

  watchEffect(async () => {
    try {
      isLoading.value = true;
      batchTxs.value = [];
      const api = $api.value;
      const senderAddressRef = senderAddress.value;
      if (!api) {
        throw Error('Failed to connect to API');
      }
      if (!senderAddressRef || !era.value || isSendingTx.value) {
        return;
      }

      const txs: PayloadWithWeight[] = await Promise.all(
        dapps.value.map(async ({ address }: { address: string }) => {
          const transactions = await getIndividualClaimTxs({
            dappAddress: address,
            api,
            senderAddress: senderAddressRef,
            currentEra: era.value,
          });
          return transactions.length ? transactions : null;
        })
      );
      const filteredTxs = txs.filter((it) => it !== null);
      batchTxs.value = filteredTxs.flat();
    } catch (error: any) {
      console.error(error.message);
    } finally {
      isLoading.value = false;
    }
  });

  const claimAll = async (): Promise<void> => {
    const api = $api.value;
    const batchTxsRef = batchTxs.value;

    if (!api) {
      throw Error('Failed to connect to API');
    }
    if (0 >= batchTxsRef.length) {
      throw Error('No dApps can be claimed');
    }

    const txsToExecute: ExtrinsicPayload[] = [];
    let totalWeight: BN = new BN(0);
    for (let i = 0; i < batchTxsRef.length; i++) {
      const tx = batchTxsRef[i];
      if (totalWeight.add(tx.weight).gt(MAX_BATCH_WEIGHT)) {
        break;
      }

      txsToExecute.push(tx.payload as ExtrinsicPayload);
      totalWeight = totalWeight.add(tx.weight);
    }

    console.log(`Batch weight: ${totalWeight.toString()}, transactions no. ${txsToExecute.length}`);
    const transaction = api.tx.utility.batch(txsToExecute);

    const sendSubstrateTransaction = async () => {
      const injector = await getInjector(substrateAccounts.value);
      await transaction
        .signAndSend(
          senderAddress.value,
          {
            signer: injector?.signer,
            // Memo: Removing it can cause subsequent transactions to fail
            nonce: -1,
            tip: 1,
          },
          (result) => {
            handleResult(result);
            hasExtrinsicFailedEvent(result.events, store.dispatch);
          }
        )
        .catch((error: Error) => {
          handleTransactionError(error);
        });
    };

    try {
      if (isCustomSig.value) {
        await handleCustomExtrinsic(transaction);
      } else {
        await sendSubstrateTransaction();
      }
    } catch (error: any) {
      console.error(error.message);
      dispatchError(error.message);
    }
  };

  return {
    claimAll,
    batchTxs,
    isLoading,
  };
}
