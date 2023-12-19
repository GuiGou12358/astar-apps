export default {
  confirm: 'Confirmer',
  cancel: 'Annuler',
  change: 'Changer',
  connect: 'Connecter',
  connected: 'Connecté',
  disconnect: 'Déconnecter',
  copy: 'Copier',
  from: 'De',
  to: 'Vers',
  add: 'Ajouter',
  and: 'et',
  approve: 'Approuvé',
  estimated: 'Estimé',
  forget: 'Oublier',
  remove: 'Enlever',
  close: 'Fermer',
  manage: 'Gérer',
  subscan: 'Subscan',
  blockscout: 'Blockscout',
  usd: 'USD',
  'polkadot-js': 'Polkadot.js',
  'polkadot-js-app': 'App Polkadot.js',
  metamask: 'MetaMask',
  clover: 'Clover',
  mathwallet: 'Math Wallet',
  wallet3: 'Wallet 3',
  alert: 'Avertissement',
  max: 'Max',
  clear: 'Effacer',
  join: 'Rejoindre',
  native: 'Native',
  evm: 'EVM',
  wasm: 'WASM',
  new: 'Nouveau',
  next: 'Next',
  addressFormat: 'Adresse du portefeuille {network}',
  addressPlaceholder: 'Adresse de destination {network}',
  evmAddressPlaceholder: 'Adresse EVM de destination',
  ticker: 'Téléscripteur',
  isComingSoon: '{value} sera bientôt disponible',
  amountToken: '{amount} {token}',
  select: 'Sélectionner',
  help: 'Aide',
  share: 'Partager',
  multisig: 'Multi-signature',
  sort: {
    sortBy: 'Trier par',
    amountHightToLow: 'Montant décroissant',
    amountLowToHigh: 'Montant croissant',
    alphabeticalAtoZ: 'Alphabétique: De A à Z',
    alphabeticalZtoA: 'Alphabétique: de Z à A',
  },
  warning: {
    warning: 'Attention',
    insufficientBalance: 'Solde de {token} insuffisant',
    insufficientFee: 'Attention! La transaction pourrait échouer en raison de frais insuffisants',
    inputtedInvalidDestAddress: 'Adresse de destination invalide',
    inputtedNotUnifiedDestAddress: "L'adresse de destination n'a pas été unifiée",
    blankDestAddress: "L'adresse de destination est vide",
    inputtedInvalidAddress: 'Adresse saisie invalide',
    selectedInvalidNetworkInWallet: "Le réseau sélectionné dans votre portefeuille n'est pas valide",
    insufficientBridgeAmount: 'Le montant minimum du transfert est de {amount} {token}',
    insufficientOriginChainBalance: 'Le solde minimum sur le réseau {chain} est de {amount} {token}',
    insufficientOriginChainNativeBalance: 'Le solde en jeton natif est insuffisant sur {chain}',
    insufficientExistentialDeposit:
      'Le solde sur le réseau {network} est inférieur au montant du dépôt existentiel',
    withdrawalNotSupport: 'Le portail ne prend pas en charge le retrait vers {chain} pour le moment',
    ledgerNotOpened: "Ledger n'a pas ouvert l'App Astar. Ouvrez là et rafraichissez la page.",
  },
  toast: {
    transactionFailed: "La transaction a échoué avec l'erreur: {message}",
    completedHash: 'Terminé au hash du bloc #{hash}',
    completedTxHash: 'Terminé au hash de la transaction #{hash}',
    unableCalculateMsgPayload: 'Impossible de calculer le bloc de message',
    amountMustNotBeZero: 'La quantité de jeton à transmettre ne doit pas être zéro',
    copyAddressSuccessfully: "Copie de l'adresse réussie !",
    clearedLocalStorage: 'Effacer votre cache local! Le portail sera rechargé dans quelques secondes',
    checkYourTransactions: 'Vérifiez vos transactions',
    approveOnPolkasafe: 'Approuvez sur PolkaSafe',
    success: 'Succès',
    note: 'Note',
    error: 'Erreur',
    copied: 'Copié',
    info: 'Info',
    enablePolkasafe:
      "Signez dans l'extension de portefeuille pour activer la fonctionnalité PolkaSafe; la fenêtre modale peut prendre un certain temps avant d'apparaitre",
  },
  common: {
    updateMetadata: 'Mettre à jour les métadonnées',
    metadataAlreadyInstalled: 'Métadonnées déjà installées',
    lightMode: 'Mode clair',
    darkMode: 'Mode sombre',
    dApps: 'dApps',
    dappStaking: 'dApp Staking',
    staking: 'Mise en staking',
    contract: 'Contrat',
    ecosystem: 'Ecosystème',
    closeSidebar: 'Fermer la barre latérale',
    twitter: 'Twitter',
    telegram: 'Telegram',
    discord: 'Discord',
    github: 'GitHub',
    linkedIn: 'LinkedIn',
    reddit: 'Reddit',
    facebook: 'Facebook',
    instagram: 'Instagram',
    youtube: 'YouTube',
    docs: 'Documentation',
    loading: 'Chargement...',
    speed: {
      speed: 'Vitesse de la transaction',
      speedTip: 'Vitesse de transaction (pourboire)',
      average: 'Moyenne',
      fast: 'Rapide',
      superFast: 'Super Rapide',
      tipHelp: 'Un pourboire est important pour accélérer les transactions',
    },
    status: {
      working: 'En fonctionnement',
      fixing: 'En maintenance',
      restricted: 'Limité',
    },
  },
  sidenavi: {
    community: 'Communauté',
    myAssets: 'Mes actifs',
    data: 'Données',
    discord: 'Discord',
    twitter: 'Twitter',
    telegram: 'Telegram',
    reddit: 'Reddit',
    youtube: 'Youtube',
    forum: 'Forum',
    github: 'Github',
    docs: 'Documentation',
    settings: 'Réglages',
    language: 'Langues',
    theme: 'Thème',
    close: 'Fermer',
    comingsoon: "Quelque chose d'ink!royable arrive bientôt",
  },
  drawer: {
    endpoint: "Point d'accès",
    viaEndpoint: 'via {value}',
    lightClientWarning: 'La connection avec un client léger est en en béta. A utiliser à vos risques et périls.',
    shibuyaTakes20mins: 'Cela pourrait prendre plus de 20 minutes pour se connecter à Shibuya via un client léger',
    takeLongerTimeToConnect: 'Cela pourrait prendre plus de temps pour charger les données de la chaîne',
    takeLongerTimeToSend: 'Cela pourrait prendre plus de temps ou échouer pour envoyer des transactions',
    zkNetworkTip: "Connectez le portefeuille EVM d'abord ",
  },
  wallet: {
    connectWallet: 'Connecter le portefeuille',
    select: 'Veuillez sélectionner un portefeuille pour vous connecter à ce portail',
    nativeAccount: 'Comptes natifs',
    evmAccount: 'Comptes EVM',
    multisigAccount: 'Comptes multi-signatures',
    accountUnification: "Unification d'un compte",
    math: {
      supportsNetwork: 'Math Wallet ne prend en charge que le réseau Shiden',
      switchNetwork:
        "Basculez vers le réseau 'Shiden' dans l'extension Math Wallet et rafraîchissez la page",
    },
    showBalance: 'Afficher le solde des {token}',
    isLedgerAccount: "Ceci est un compte Ledger, connecté et en cours d'exécution sur l'app Astar",
    multisig: {
      initPolkasafe: 'Initialisation du SDK PolkaSafe pour une demande de signature; Ceci peut prendre un moment ',
      noAccounts: "Aucun compte multi-signature n'a été trouvé",
      goToPokasafe: 'Allez sur PolkaSafe pour en créer un',
      proxy: 'Proxy',
    },
    unifiedAccount: {
      create: 'Créer un compte unifié',
      readCarefully: 'Lisez attentivement',
      yourAccount: 'Votre compte',
      astarNative: 'Astar Native',
      astarEvm: 'Astar EVM',
      introduce: "Introduction d'une nouvelle technologie, les comptes unifiés",
      general: 'Géneral',
      onceUnified: 'Une fois que les comptes sont unifiés, ils ne sont plus séparés',
      evmWallet: 'Portefeuille EVM (uniquement Metamask)',
      brandNewAccount: 'Un tout nouveau compte est recommandé.',
      unstakedFirst:
        "Si le compte EVM contient des jetons ASTR déposés en staking, ceux-ci doivent d'abord être retirés, ils ne seront pas transférés automatiquement.",
      xcTokens:
        "Si vous disposez de jetons xc personnalisés ou si des jetons xc ne sont pas répertoriés sur le portail Astar EVM, vous devez d'abord les transférer vers un autre compte. Nous ne pourrons pas trouver ces jetons et nous ne pourrons donc pas les déplacer vers le nouveau compte.",
      automaticallyTransferred:
        "Tous les autres jetons xc déjà répertoriés ainsi que les jetons ERC20 seront automatiquement transférés vers le nouveau compte unifié.",
      override:
        "Si vous disposez déjà d'un identifiant de compte créé sur l'application Polkadot.js, ces informations d'unification de compte seront remplacées.",
      agreeToProceed:
        "J'ai tout lu et j'aimerais procéder à la création d'un compte unifié.",
      agreeToDeposit: "La création d'un compte unifié coûte {cost}",
      agreeToSubmit: "Je comprends qu'une fois les comptes unifiés, ils ne peuvent pas être séparés.",
      requirement:
        "Pour créer un compte unifié, les extensions de portefeuilles Substrate et EVM est requise et il est actuellement impossible de le faire à partir des applications mobiles.",
      haveAstarNative: "😎 J'AI un compte natif Astar",
      connectAstarNative:
        "Le compte unifié appartient à un compte natif Astar. Veuillez vous connecter avec l'adresse souhaitée et créer un compte.",
      selectWallet: 'Sélectionnez un portefeuille',
      notHaveAstarNative: "🥲 Je N'AI PAS de compte natif Astar",
      withoutUnifying:
        "Vous pouvez bénéficier de tous les avantages lorsque vous vous connectez au compte EVM sans vous unifier. Donc rien à craindre si vous ne possédez pas de compte Natif Astar. Cependant, il peut y avoir une fonctionnalité dont le compte unifié peut bénéficier et vous pouvez toujours créer un compte à tout moment.",
      howToCreate: 'Comment créer un compte Natif Astar',
      findSubstrateWallets:
        'Vous pouvez également trouver des portefeuilles Substrate qui pourraient être plus conviviaux.',
      checkNativeWallets: 'Consultez nos portefeuilles natifs.',
      haveStakingBalance:
        "Vous avez des jetons mis en staking. Ces jetons ne seront pas transférés sur le compte unifié. Veuillez d'abord retirer votre mise.",
      unifiedAccountName: 'Nom du compte unifié',
      accountIcon: 'Icône de compte',
      balanceTransferred: 'Votre solde sur le compte EVM va être transféré.',
      readyToUnify:
        'Les jetons xc sont maintenant envoyés et vous êtes prêts à unifier les deux comptes! Veuillez vérifier ci-dessous avant de confirmer.',
      congrats: 'Félicitations!!\nVotre compte est unifié!\n\nPlus besoin de dépôt EVM!',
      onlyShibuya: 'Cette fonctionnalité est uniquement disponible sur le testnet Shibuya.',
      userTutorials: 'Documentation et tutoriels',
      sendingXc20: "L'envoi des jetons XC20 a commencé, veuillez patienter...",
      editUnifiedAccount: 'Modifiez le compte unifié',
      selectAvatar: 'Sélectionnez un Avatar',
      save: 'Sauvegarder',
      noNfts:
        "Vous n’avez pas créé de NFT pour le moment. Lorsque vous en créerez un, vous pourrez mettre à jour votre compte unifié avec un NFT. Pour le moment, l'icône par défaut sera utilisée.",
    },
  },
  installWallet: {
    getWallet: "Vous n'avez pas encore de {value}?",
    installWallet:
      "Vous devrez installer {value} pour continuer. Une fois que vous l'aurez installé, continuez et actualisez cette page",
    install: 'Installer',
    learn: 'Apprendre',
  },
  topMetric: {
    build2earn: 'Build2Earn',
    wayOfStaking: 'Une manière innovante de faire travailler ses jetons',
    tvlInDapps: 'TVL sur les dApps',
    currentEra: 'Ère actuelle',
    eraInfo: '(Ère: {era})',
    stakersRewards: 'Récompenses pour les participants',
    currentBlock: 'Bloc actuel',
    totalDapps: 'dApps totales',
    apr: 'APR',
    apy: 'APY',
  },
  myDapps: {
    index: 'Index',
    dapps: 'dApps',
    stakedAmount: 'Montant déposé',
    unbondingAmount: 'Montant en cours de libération',
    remainingEra: 'Ère restante',
    withdraw: 'Retirer',
    rebond: 'Re-déposer',
    totalEarned: 'Total gagné',
    manage: 'Gérer',
    add: 'Ajouter',
    unbond: 'Délier',
    rebondGuide:
      'Une fois que vos fonds seront réinvestis, vous aurez besoin de 10 ères pour les débloquer à nouveau.',
    rebondTitle: 'Le montant que vous souhaitez réinvestir',
    withdrawGuide: 'Vos fonds sont disponibles pour être retirés.',
    withdrawTitle: 'Prêt à être retiré',
    unregisteredAlert:
      "Ce projet n'est plus enregistré. Vous devez y retirer vos fonds et ils vous seront retournés.",
    claimAndUnbond: 'Réclamer et délier',
  },
  myReward: {
    totalStaked: 'Total mis en staking',
    availableToClaim: 'En attente de réclamation',
    estimatedRewards: 'Récompenses estimées',
    era: 'Ère',
    claim: 'Réclamer',
    restake: 'Re-mettre en staking ses récompenses',
    turnOff: 'Désactiver',
    totalEarned: 'Total gagné (toutes ères confondues)',
    availableToClaimTip:
      "Le montant des récompenses non réclamées est une estimation et il peut y avoir une légère différence entre ce qui est affiché et ce que vous recevez réellement.",
    availableToClaimTip2:
      "Le nombre d'ères affiché ici est par dApp. Vous devrez peut-être réclamer plusieurs fois si vous avez trop d'ères non réclamées.",
    restakeTip:
      'En activant, vos récompenses seront automatiquement re-investies lorsque vous les récupérer.',
    claimable: {
      limitation:
        "Il existe une limite au nombre d'ères pouvant être réclamées en une seule transaction.",
      nativeWallets: 'Portefeuilles natifs: ≒56 ères',
      ledgerX: 'Ledger Nano X: 6 ères',
      ledgerSPlus: 'Ledger Nano S Plus: 6 ères',
      ledgerS: 'Ledger Nano S: 2 ères',
    },
    dappsOwners: "Propriétaires de DApps! Nous pouvons désormais vous aider à promouvoir votre campagne. Vérifiez s'il vous plaît",
    dappsOwnersLink: 'les détails.',
  },
  dappStaking: {
    myStaking: 'Ma mise en staking',
    myRewards: 'Mes récompenses',
    unbonding: 'Libération',
    myDapps: 'Mes dApps',
    dappRegistered: 'Félicitations!! Votre contrat a été approuvé. Veuillez soumettre les détails',
    welcomeBanner:
      "Félicitations 🎉 Veuillez renseigner les informations de votre dApp pour donner aux utilisateurs une meilleure vue d'ensemble de votre application. Les données mises à jour apparaîtront sous peu sur la page de la dApp.",
    desktopOnlyBanner: "L'enregistrement de dApp n'est possible qu'avec un ordinateur de bureau",
    registerNow: "S'inscrire maintenant",
    transferableBalance: 'Solde transférable',
    totalStake: 'Total mis en staking:',
    yourStake: 'Votre mise en staking: ',
    add: 'Ajouter',
    unbond: 'Délier',
    unstake: 'Libérer',
    stake: 'Mettre en staking',
    claim: 'Récupérer',
    withdraw: 'Retirer',
    unbondingEra: 'La libération prend {unbondingPeriod} ères avant que vous puissiez retirer vos jetons.',
    willUnstakeAll:
      "Cela débloquera tout votre solde mis en staking car le montant minimum est de {minStakingAmount} {symbol}",
    turnOn: 'Activer',
    turnOff: 'Désactiver',
    on: 'ON',
    off: 'OFF',
    stakeNow: 'Mettre en staking maintenant',
    edit: 'Modifier',
    developerIncentive: 'Incitatif pour les développeurs',
    tokenEra: '{token}/ère',
    dappStakingEvm: 'dApp Staking est disponible sur EVM',
    onChainData: 'Données sur la chaîne',
    stakingTvl: 'TVL mise en staking',
    transactions: 'Transactions',
    uaw: 'Portefeuilles uniques actifs',
    cantClaimWihtoutError:
      "Vous ne pouvez pas réclamer avec la remise en staking automatique car cela fait un certain temps que vous n'avez pas réclamé vos récompenses. Veuillez désactiver la fonction de remise en staking automatique pour pouvoir les réclamer. Une fois que vous avez récupéré vos récompenses, vous pouvez réactiver la remise en staking automatique. L'équipe dédiée à l'interface utilisateur travaille à résoudre ce problème.",
    stakePage: {
      backToDappList: 'Retour à la liste des dApps',
      whereFundsFrom: "D'où souhaitez-vous vous faire venir vos fonds ?",
    },
    last30days: '(30 derniers jours)',
    dappPage: {
      back: 'Retour',
      goBackToTopPage: 'Revenir en haut de la page',
      stakeOrSwitchTo: 'Mettre en staking et basculer vers',
      totalStaked: 'Total mis en staking',
      totalStaker: 'Participants total',
      team: 'Équipe',
      projectOverview: "Vue d'ensemble du projet",
      projectSite: 'Site du projet',
      goToApp: "Accéder à l'application",
      goToWebsite: 'Accéder au site Web',
      virtualMachine: 'Machine virtuelle',
      contractAddress: 'Adresse du contrat',
      license: 'Licence',
      community: 'Communauté',
      wallets: 'Portefeuilles',
      stats: 'Statistiques',
    },
    modals: {
      contractAddress: 'Adresse du contrat {address}',
      license: 'Licence',
      startUnbonding: 'Commencer à délier',
      unbondFrom: 'Délier de {name}',
      builder: {
        title: 'Développeur',
        githubAccount: 'Compte GitHub',
        twitterAccount: 'Compte Twitter',
        linkedInAccount: 'Compte LinkedIn',
        image: 'Image du développeur',
        imageRecomendation: "Une image carrée d'au moins 500px est recommandée.",
        error: {
          name: 'Le nom du développeur est nécessaire.',
          nameExists: 'Ce nom est déjà utilisé par un autre développeur',
          invalidUrl: 'URL invalide.',
          accountRequired: 'Au moins un compte est requis.',
          builderImageRequired: "L'image du développeur est nécessaire",
          buildersRequired: 'Au moins deux développeurs sont nécessaires.',
          builderUrlRequired: 'Au moins une URL de compte est requise.',
        },
      },
      builders: 'Information sur les développeurs',
      communityLabel: 'Communauté',
      community: {
        title: 'Communautés',
        discordAccount: 'Compte Discord',
        twitterAccount: 'Compte Twitter',
        redditAccount: 'Compte Reddit',
        facebookAccount: 'Compte Facebook',
        tiktokAccount: 'Compte TikTok',
        youtubeAccount: 'Compte YouTube',
        instagramAccount: 'Compte Instagram',
        githubAccount: 'Compte GitHub',
        communityRequired: 'Au moins un lien de communauté est requis.',
      },
      introduction: {
        title: 'Encore une chose !',
        promotionCard:
          "Lorsque vous êtes enregistrés, une carte de promotion apparaîtra comme ceci, veuillez remplir la description dans la limite des 65 caractères.",
        placeholder: 'Veuillez ajouter votre introduction',
        characters: '{characters} caractères sur 65',
      },
      description: 'Description',
      markdown: 'Markdown',
      preview: 'Aperçu',
      addAccount: 'Ajouter un compte',
      addLogo: 'Ajouter une image de logo',
      addImage: 'Ajouter une image',
      images: 'Images',
      imagesRequired: 'Au moins 4 images sont requises.',
      descriptionRequired: 'Dire au monde quelque chose sur votre application.',
      contractTypeTitle: 'Votre projet est-il sur',
      tagsTitle: 'Tags',
      categoryTitle: 'Choisir la catégorie principale',
      submit: 'Envoyer',
      dappNameRequired: 'Le nom de la dApp est requis',
      projectUrlRequired: "L'URL du projet est requise.",
      name: 'Nom',
      projectUrl: 'URL du projet',
      dappImageRequired: 'Le logo du projet est requis.',
      projectLogo: 'Logo du projet',
    },
    toast: {
      successfullyClaimed: 'Réclamé avec succès {amount}',
      requiredClaimFirst: "Veuillez réclamer vos récompenses avant d'envoyer une transaction",
      requiredClaimFirstCompounding:
        '{message} - Désactiver la composition, réclamer vos récompenses, puis réactiver la composition',
      successfullyWithdrawn: 'Solde retiré avec succès',
      successfullySetRewardDest: 'Vous avez défini la destination des récompenses avec succès',
      successfullyStaked: 'Vous avez voté avec succès sur {contractAddress}',
      successfullyUnbond: "Vous avez commencé avec succès le process de retrait sur {contractAddress}",
      successfullyNominationTransfer:
        'You avez transférer avec succès votre mise de {fromContractId} vers {targetContractId}',
    },
    error: {
      onlySupportsSubstrate: 'Le dApp staking ne prend en charge que les portefeuilles Substrate',
      notSupportZkEvm: "dApp staking n'est pas supporté sur le réseau zkEVM",
      notEnoughMinAmount:
        'Le montant de jeton à mettre en staking doit être supérieur à {amount} {symbol}',
      allFundsWillBeTransferred:
        'Tous les fonds seront transférés car le montant minimum est de {minStakingAmount} {symbol}',
      invalidBalance: 'Solde transférable insuffisant pour finaliser la transaction',
      warningLeaveMinAmount:
        'Le compte doit contenir un montant supérieur à {amount}{symbol} transférable lorsque vous misez.',
    },
  },
  assets: {
    astarNativeAccount: 'Compte Astar Natif',
    astarEvmAccount: 'Compte Astar EVM',
    assets: 'Actifs',
    xcmAssetsShort: 'Actifs XCM',
    xcmAssets: 'Actifs XCM (Cross Chain Message)',
    xvmAssets: 'Actifs XVM (Cross Virtual Machine) ERC20',
    xvmAssetsShort: 'Actifs XVM ERC-20',
    nativeAccount: 'Compte natif',
    evmAccount: 'Compte EVM',
    switchToEvm: 'Basculer vers EVM',
    totalBalance: 'Solde total',
    transfer: 'Transférer',
    send: 'Envoi',
    syncing: 'Synchronisation...',
    faucet: 'Faucet',
    bridge: 'Bridge',
    manage: 'Gérer',
    xcm: 'XCM',
    wrap: 'Emballer',
    explorer: 'Explorateur',
    withdraw: 'Retirer',
    view: 'Afficher',
    expand: 'Développer',
    collapse: 'Réduire',
    transferableBalance: 'Solde transférable',
    transferable: 'Transférable',
    evmDeposit: 'dépot EVM',
    yourEvmDeposit: 'Votre dépôt EVM',
    yourVestingInfo: 'Vos informations de Vesting',
    yourStaking: 'Votre mise en staking',
    cantTransferToExcahges: 'Vous ne pouvez pas transférer vers des exchanges',
    noHash: "Votre transaction n'aura pas de hash",
    addToWallet: 'Ajouter au portefeuille',
    noResults: 'Aucun résultat trouvé :(',
    letsImportToken: "Aucun jeton n'est répertorié. Importons-les!",
    wrongNetwork: 'Portefeuille connecté au mauvais réseau',
    connectNetwork: 'Se connecter au RPC {network}',
    invalidAddress: "L'adresse est invalide",
    importTokens: 'Importer des jetons',
    importXvmTokens: 'Importer des jetons ERC20 via XVM',
    importErc20Tokens: 'Importer des jetons ERC20',
    hideSmallBalances: 'Cacher les petits soldes',
    unhideSmallBalances: 'Afficher les petits soldes',
    tokenHasBeenAdded: 'Le jeton a déjà été ajouté',
    assetsAreNowFolded: 'Tous les services pour le jeton {token} sont maintenant repliés – ouvrez-les ici!',
    theSignatory: '{account} est le signataire',
    myWallet: 'Mon portefeuille',
    reward: 'Récompense',
    lockedTokens: 'Jetons verrouillés',
    vesting: 'Acquisition',
    reserved: 'Reservé',
    favorite: 'Favoris',
    addToFavorite: 'Ajouter aux favoris',
    removeFromFavorite: 'Retirer des favoris',
    unifyAccounts: 'Unifier les comptes',
    yourEstimatedRewards: 'Réclamez vos récompenses estimées',
    toast: {
      completedMessage: 'Vous avez envoyé {transferAmt} {symbol} à {toAddress}',
      completedBridgeMessage: 'Vous avez envoyé {transferAmt} {symbol} de {fromChain} à {toChain}',
    },
    transferPage: {
      backToAssets: 'Retourner aux actifs',
      crossChainTransfer: 'Transfert inter-chaîne',
      xcm: '(XCM)',
      faq: 'FAQ',
      recentHistory: 'Historique récent',
      hotTopic: 'Sujets d’actualité',
      inputAddressManually: 'Entrer une adresse manuellement',
      goBack: 'Revenir en arrière',
      selectChain: 'Sélectionner une chaîne',
      selectToken: 'Sélectionner un jeton',
      noTxRecords: "Le compte n'a pas encore de transactions enregistrées",
      mintTransferAmount: 'Le montant minimum du transfert est de {amount} {symbol}',
      howToUsePortal: 'COMMENT UTILISER LE PORTAIL',
      xcmIsDisabled: 'XCM avec {network} est temporairement désactivé',
      xcmEvmIsDisabled: 'XCM vers {network} avec les portefeuilles EVM est temporairement désactivé',
    },
    modals: {
      max: 'Max',
      balance: 'Solde : {amount} {token}',
      available: 'Disponible: {amount} {token}',
      cannotBeSentErc20: 'Les jetons ERC20 ne peuvent pas être envoyés aux adresses {network} natives',
      notSendToExchanges: "Je n'envoie PAS de jetons vers des exchanges",
      notSendToEvmExchanges:
        "Je n'envoie PAS de jetons aux adresses de dépôt EVM sur un Exchange. Je comprends que si je le fais, les fonds seront probablement perdus.",
      understandWarning: 'Je comprends que si je le fais, les fonds seront probablement perdus',
      notDestIsLedgerAccount:
        "L'adresse de destination n'est ni un compte natif Ledger ni une adresse d'Exchange. Je comprends que si je le fais, les fonds seront probablement perdus.",
      notDestIsExchangeAddress: "L'adresse de destination n'est pas l'adresse d'un Exchange",
      youWillReceive: 'Vous allez recevoir',
      faucetNextRequest: 'Temps restant avant la prochaine demande',
      countDown: '{hrs} heures {mins} minutes {secs} secondes',
      whatIsFaucet: " Qu'est-ce que le faucet et comment cela peut-il vous aider?",
      faucetBalance: 'Solde du Faucet : {amount} {symbol}',
      faucetIntro:
        "Il y a de petits frais pour chaque transaction, et ceci sont payés en utilisant des {symbol} jetons. Si vous n'avez pas de {symbol} sur votre compte, vous ne pouvez pas envoyer de jetons. Le faucet envoie suffisamment de {symbol} pour couvrir les frais de transaction.",
      faucetDriedOut: "Si le Faucet est vide. Veuillez le signaler à l'un des membres de notre équipe sur Discord",
      availableToWithdraw: 'Retrait disponible',
      totalDistribution: 'Répartition totale',
      alreadyVested: 'Déjà acquis',
      remainingVests: "En cours d'acquisition",
      unlockPerBlock: "{perToken} {symbol} par bloc jusqu'au bloc {untilBlock}",
      availableToUnlock: 'Disponible au déverrouillage',
      unlock: 'Déverrouiller',
      transfer: 'Transférer',
      evmXcmDeposit: 'EVM (Dépôt)',
      evmXcmWithdrawal: 'EVM (Retrait)',
      depositToNative: 'Dépôt vers Natif',
      depositToEvm: 'Dépôt vers EVM',
      evmWalletAddress: 'Adresse du portefeuille EVM',
      howToImportXvmTokens: 'Découvrez comment importer des jetons ERC20 via XVM',
      riskOfImportTokens:
        "Soyez conscient du risque que n'importe qui puisse créer un jeton, y compris la création de fausses versions de jetons existants.",
      tokenContractAddress: 'Adresse de contrat du jeton',
      erc20ContractAddress: 'Adresse de contrat du jeton ERC20',
      tipDestAddressFormat: 'Où puis-je trouver mon adresse {chain}?',
      titleWithdraw: 'Retirer {token}',
      titleVesting: "Informations sur l'acquisition",
      connectionTroubles: {
        connectionTroubles: 'Problèmes de connexion',
        tipsDescription:
          "Il existe de nombreuses raisons qui peuvent vous empêcher de vous connecter. Essayez les solutions ci-dessous, si le problème persiste, demandez à un membre de la communauté.",
        tryOtherEndpoints: 'Essayez un autre endpoint',
        changeFromHeader: "Changez l'endpoint depuis le bouton réseau sur l'en-tête",
        clearLocalStorage: 'Effacez le cache local',
        clearLocalStorageTip: 'Cela signifie que votre cache du portail sur ce navigateur sera vidé',
        metaUpdate:"Mettez à jour les métadonnées sur l'application Polkadot.js",
        metaUpdateTip:
          "Pour vous assurer que votre extension de portefeuille est à jour, vérifiez l'onglet Métadonnées et mettez les à jour si vous y êtes invité.",
        goToDocs: 'Allez dans Dépannage dans la documentation',
        goToDocsTip: 'Pour tout autre problème, veuillez également consulter la documentation.',
        askCommunity: 'Demandez à notre communauté',
        askCommunityDiscord: 'Demandez à notre communauté sur Discord',
        askCommunityTip: "Quelqu'un est toujours là pour vous.",
      },
      xcmWarning: {
        minBalIsRequired: "Un solde minimum est requis sur la chaîne d'origine",
        fee: 'Les frais sont déduits du montant saisi',
        notInputExchanges: "Ne pas saisir l'adresse d'un portefeuille d'un exchange",
        tooltip:
          "Nous gardons {amount} {symbol} sur le compte de la chaîne d'origine pour éviter de perdre les fonds. Lors du dépôt depuis la chaîne d'origine, seuls les jetons supérieurs au solde minimum sont transférables.",
      },
    },
  },
  dashboard: {
    dashboard: 'Tableau de bord',
    tvl: 'TVL',
    collators: 'Collateurs',
    tokenSupply: 'Nombre de jetons',
    circulating: {
      circulatingSupply: 'Jetons en circulation',
      supply: 'sur {totalSupply}: ',
      circulating: 'en circulation',
    },
    block: {
      block: 'Bloc',
      blockHeight: 'Niveau de bloc',
      blockTime: "Temps d'un bloc",
      avgBlockTime: "temps moyen d'un bloc (secs)",
      oneEra: '1 ère :',
      sevenEras: '7 ères :',
      thirtyEras: '30 ères :',
      secs: ' secs',
      era: 'Ère',
      progress: '{value}%',
      eta: 'ETA: {value}',
    },
    network: {
      networkStatuses: 'Status du réseau',
      updatedAgo: 'Mis à jour il y a {time}',
      xcmDepositWithdrawalAssets: "Dépots/Retraits d'Actifs XCM",
    },
  },
  chart: {
    tvl: {
      title: 'Valeur totale verrouillée',
      tooltip: 'TVL',
    },
    dappStaking: {
      title: 'Valeur totale verrouillée en dApp Staking',
      tooltip: 'TVL en dApp Staking',
    },
    ecosystem: {
      title: "Valeur totale verrouillée dans l'écosystème EVM",
      tooltip: 'TVL dans l’écosystème EVM',
    },
    ttlTransactions: {
      title: 'Nombre total de transactions',
      tooltip: 'Nombre total de transactions',
    },
    tokenPrice: {
      title: 'Prix du jeton',
      tooltip: 'Prix du jeton',
    },
    uniqueActiveUsers: {
      title: 'Utilisateurs actifs uniques',
      tooltip: 'Utilisateurs actifs uniques',
    },
    numberOfCalls: {
      title: 'Nombre de transactions',
      tooltip: "Nombre de transactions appelées à l'adresse du smart contract de la dApp",
    },
    treasury: 'Trésorerie',
    other: 'Autre',
    locked: 'Verrouillés',
    others: 'Autres',
  },
  links: {
    gridlockWallet: 'Portefeuille Gridlock',
    goDecentralized: 'Devenez décentralisé!',
    portalIpfs: 'Le portail est maintenant sur IPFS!',
    astarHome: 'Accueil Astar',
    astarDocs: 'Documents Astar',
  },
  disclaimer: {
    disclaimer: 'Avertissement',
    introduce1: `En accédant et en utilisant les dApps de l'écosystème Astar, vous confirmez que vous êtes autorisé à le
    faire et vous acceptez `,
    introduce2: `de la Fondation Astar. Vous comprenez et acceptez que votre utilisation des dApps est à vos propres risques, et elles sont fournies sur une base "en
    l'état" et "telles quelles" sans aucune garantie expresse ou implicite de quelque nature que ce soit.`,
    terms: 'Conditions de service',
    privacy: 'Politique de confidentialité',
    chapter1: '1. Responsabilité:',
    para1: `Vous comprenez et acceptez que la Fondation Astar ne puisse être tenue responsable de tout
    dommage direct, indirect, incident, spécial, consécutif ou exemplaire résultant de
    votre utilisation des dApps de l'écosystème Astar. Cela inclut, sans s'y limiter, les dommages pour
    perte de profits, de bonne volonté, d'usage, de données ou d'autres pertes intangibles.`,
    chapter2: '2. Assomption des risques de réseau:',
    para2: `Vous comprenez et acceptez que la Fondation Astar ne garantit pas la sécurité des
    dApps de l'écosystème Astar ni la sécurité de vos informations personnelles, y compris votre portefeuille
    adresse, historique des transactions, et clés privées. Vous acceptez de prendre des mesures appropriées pour
    protéger vos informations personnelles et prévenir l'accès non autorisé à votre portefeuille.`,
    chapter3: '3. Pas de garantie de sécurité:',
    closeWord: `Vous confirmez également que vous n'êtes pas une "Personne interdite" et que ni vous ni aucune
    personne ou entité qui contrôle, est contrôlée par, ou est sous contrôle commun avec vous n'est une
    Personne interdite. Enfin, en cliquant sur "Accepter", vous acceptez les termes et conditions
    énoncés ci-dessus. Si vous n'êtes pas d'accord, veuillez cliquer sur "Refuser."`,
    agree: 'Accepter',
    decline: 'Refuser',
  },
  bridge: {
    bridge: 'Bridge',
    history: 'Historique récent',
    actionRequired: 'Action requise',
    claim: 'Réclamer',
    noHistory: 'Aucun historique trouvé',
    completed: 'Terminé',
    inProgress: 'En cours',
    approvalMaxAmount: 'Approuver le montant maximum (option)',
    ethereumBridge: {
      title: 'Bridge Ethereum',
      text: 'Bridger les actifs entre {l1} et {l2}',
      text2:
        "Disponible sur le testnet! - Pour en faire l'expérience, connectez votre portefeuille à Astar zKatana (zkEVM testnet) et obtenez des ETH sur le testnet",
      lean: '(En apprendre plus)',
    },
    astarBridge: {
      title: 'Bridge Astar',
      text: 'Bridger le jeton ASTR et les actifs vers {l2} depuis {substrateNetwork} EVM',
      text2: 'Actuellement en développement',
    },
    celetBridge: {
      title: 'Bridge Celer',
      text: 'Bridger les actifs de {cbridgeNetworkName} Polkadot EVM via le Bridge Celer',
    },
    warning32blocks: 'La finalisation peut prendre environ 10 à 20 minutes, voire plus.',
    warning2steps:
      "Bridger vers le L1 (Ethereum) implique 2 étapes et oblige les utilisateurs à faire une réclamation sur le réseau L1 (disponible dans l'historique récent)",
    tokenInfo: {
      invalidTokenAddress: 'Adresse de jeton invalide',
      tokenAddress: 'Adresse de jeton {network}',
      tokenName: 'Nom du jeton',
      tokenSymbol: 'Symbole du jeton',
      fromChainBal: 'Solde la chaine de départ',
      destChainBal: 'Solde la chaine de destination',
      tokenHasBeenAdded: 'Le jeton a déjà été ajouté',
      tokenNotSupported: "Ce jeton n'est pas pris en charge sur zkEVM",
      interactCarefully: 'Interagissez prudemment avec des jetons nouveaux ou suspects',
    },
  },
};
