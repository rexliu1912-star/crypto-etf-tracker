/* ==========================================
   SEC Crypto ETF Application Tracker - App Logic
   ========================================== */

// --- Multi-language Support ---
const translations = {
    zh: {
        mainTitle: "加密货币 ETF 追踪",
        mainSubtitle: "实时监控 SEC 加密货币 ETF 进度",
        liveStatus: "实时更新",
        secLive: "SEC EDGAR 实时",
        localCache: "本地缓存数据",
        lastUpdate: "更新时间:",
        labelTotal: "总申请数",
        labelApproved: "已通过",
        labelPending: "待通过",
        labelDelayed: "已延期",
        btnAll: "全部",
        btnApproved: "已通过",
        btnPending: "待通过",
        btnDelayed: "已延期",
        optAllCrypto: "所有加密货币",
        titleTimeline: "最新待通过申请",
        titleApplications: "所有 ETF 申请",
        footerSource: "数据来源: SEC EDGAR、彭博社、路透社 | 仅供参考，不构成投资建议",
        footerCopyright: "© 2026 SEC 加密货币 ETF 追踪器",
        searchPlaceholder: "搜索加密货币或发行商...",
        cardIssuer: "发行商",
        cardFilingType: "申请类型",
        cardFilingDate: "最新公告",
        cardStatus: "当前状态",
        statusApprovedDate: "上线时间",
        cardNotes: "备注",
        cardOdds: "概率预估",
        cardHistory: "🔗 官方公告",
        cardTicker: "交易代码",
        cardExpenseRatio: "费率",
        cardExchange: "交易所",
        statusApproved: "已通过",
        statusPending: "待通过",
        statusDelayed: "已延期",
        statusDenied: "已拒绝",
        statusUnknown: "未知状态",
        daysLeft: "天后",
        today: "今天",
        none: "无",
        syncLoading: "正在连接 SEC 数据库...",
        syncProcessing: "正在处理新增申请...",
        syncComplete: "数据同步完成"
    },
    en: {
        mainTitle: "SEC Crypto ETF Tracker",
        mainSubtitle: "Live Tracking of Crypto ETF Applications",
        liveStatus: "LIVE",
        secLive: "SEC EDGAR",
        localCache: "LOCAL CACHE DATA",
        lastUpdate: "Last Updated:",
        labelTotal: "Total ETFs",
        labelApproved: "Approved",
        labelPending: "Pending",
        labelDelayed: "Delayed",
        btnAll: "All",
        btnApproved: "Approved",
        btnPending: "Pending",
        btnDelayed: "Delayed",
        optAllCrypto: "All Cryptos",
        titleTimeline: "Recent Pending Applications",
        titleApplications: "All ETF Applications",
        footerSource: "Source: SEC EDGAR, Bloomberg, Reuters | For reference only",
        footerCopyright: "© 2026 SEC Crypto ETF Tracker",
        searchPlaceholder: "Search crypto or issuer...",
        cardIssuer: "Issuer",
        cardFilingType: "Type",
        cardFilingDate: "Latest Filing",
        cardStatus: "Status",
        statusApprovedDate: "Launch Time",
        cardNotes: "Notes",
        cardOdds: "Approval Odds",
        cardHistory: "🔗 Official Files",
        cardTicker: "Ticker",
        cardExpenseRatio: "Expense Ratio",
        cardExchange: "Exchange",
        statusApproved: "Approved",
        statusPending: "Pending",
        statusDelayed: "Delayed",
        statusUnknown: "Unknown",
        daysLeft: "days left",
        today: "Today",
        none: "N/A",
        syncLoading: "Connecting to SEC database...",
        syncProcessing: "Processing new applications...",
        syncComplete: "Sync Complete",
        // Dynamic content translations
        "已获SEC批准并开始交易": "Approved by SEC and trading started",
        "S-1修订文件已提交，等待SEC审批": "S-1 amendment filed, awaiting SEC approval",
        "注册声明已提交，等待SEC反馈": "Registration statement filed, awaiting SEC feedback",
        "保密注册声明已提交": "Confidential registration statement filed",
        "审批进行中": "Approval in progress",
        "待通过": "Pending Approval",
        "S-1修订文件已提交": "S-1 Amendment Filed",
        "注册声明已提交": "Registration Statement Filed",
        "首批获批的现货比特币ETF之一": "One of the first approved spot Bitcoin ETFs",
        "信托转换为ETF，已获批": "Trust converted to ETF, approved",
        "信托转换为ETF,已获批": "Trust converted to ETF, approved",
        "已获批并开始交易": "Approved and trading started",
        "首批现货以太坊ETF": "One of the first spot Ethereum ETFs",
        "已通过 (交易中)": "Approved (Trading)",
        "无": "None",
        "已获SEC批准": "Approved by SEC",
        "Cathie Wood旗下基金获批": "Cathie Wood's fund approved",
        "2024年7月获批,首批以太坊现货ETF": "Approved July 2024, first spot Ethereum ETF",
        "已转换为现货ETF": "Converted to spot ETF",
        "2025年10月获批,11月开始交易": "Approved Oct 2025, trading started Nov",
        "首批获批的Solana ETF之一": "One of the first approved Solana ETFs",
        "已获批准": "Approved",
        "2026年1月最新提交": "Newly filed in Jan 2026",
        "预计2025年5月决定": "Decision expected in May 2025",
        "信托转换ETF申请中": "Trust-to-ETF conversion pending",
        "等待SEC最终决定": "Awaiting SEC final decision",
        "最终期限延至10月": "Final deadline extended to Oct",
        "待通过": "Under review",
        "期货ETF已获批并开始交易": "Futures ETF approved and trading started",
        "SEC已延期决定,分析师预计90%批准率": "SEC delayed, analysts predict 90% approval",
        "彭博分析师高度看好": "Highly optimistic Bloomberg analysts",
        "已进入公众意见征询期": "Public comment period entered",
        "期货 ETF": "Futures ETF",
        "分析师预计99%批准率": "Analysts predict 99% approval",
        "最终决定日期11月12日": "Final decision date Nov 12",
        "S-1注册文件已提交": "S-1 registration filed",
        "预计2025年10月至2026年1月决定": "Decision expected Oct 2025 to Jan 2026",
        "SEC已延期决定至10月26日": "SEC delayed decision to Oct 26",
        "杠杆 ETF": "Leveraged ETF",
        "杠杆产品,新生效日期10月10日": "Leveraged product, new effective date Oct 10",
        "SEC延期至6月11日": "SEC delayed to June 11",
        "Coinbase担任托管方": "Coinbase as custodian"
    }
};

// Map cryptocurrency names to their standard coin symbols for better logo matching
const cryptoLogoMap = {
    "Bitcoin": "btc",
    "Ethereum": "eth",
    "Solana": "sol",
    "XRP": "xrp",
    "Cardano": "ada",
    "Avalanche": "avax",
    "Dogecoin": "doge",
    "Litecoin": "ltc",
    "Polkadot": "dot",
    "Stellar": "xlm",
    "Chainlink": "link",
    "Bitcoin Cash": "bch",
    "Ethereum Classic": "etc",
    "Horizen": "zen",
    "Bittensor": "tao",
    "Hedera": "hbar",
    "Near Protocol": "near",
    "Aave": "aave",
    "Sui": "sui",
    "Aptos": "apt",
    "Kaspa": "kas",
    "Stacks": "stx",
    "Immutable": "imx",
    "Uniswap": "uni",
    "Tron": "trx",
    "Multi-Crypto": "generic"
};

let currentLang = 'zh';

function t(key) {
    if (!key) return key;
    if (currentLang === 'en' && translations['en'][key]) {
        return translations['en'][key];
    }
    return translations[currentLang][key] || key;
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateUILanguage();
    updateStats();
    renderApplications();
    renderTimeline();
    populateCryptoFilter();
    updateDataSourceIndicator();
}

function updateUILanguage() {
    // Update static elements in HTML
    const el = (id) => document.getElementById(id);
    if (el('mainTitle')) el('mainTitle').textContent = t('mainTitle');
    if (el('mainSubtitle')) el('mainSubtitle').textContent = t('mainSubtitle');
    if (el('lastUpdateLabel')) el('lastUpdateLabel').textContent = t('lastUpdate');
    if (el('labelTotal')) el('labelTotal').textContent = t('labelTotal');
    if (el('labelApproved')) el('labelApproved').textContent = t('labelApproved');
    if (el('labelPending')) el('labelPending').textContent = t('labelPending');
    if (el('labelDelayed')) el('labelDelayed').textContent = t('labelDelayed');
    if (el('btnAll')) el('btnAll').textContent = t('btnAll');
    if (el('btnApproved')) el('btnApproved').textContent = t('btnApproved');
    if (el('btnPending')) el('btnPending').textContent = t('btnPending');
    if (el('btnDelayed')) el('btnDelayed').textContent = t('btnDelayed');
    if (el('optAllCrypto')) el('optAllCrypto').textContent = t('optAllCrypto');
    if (el('titleTimeline')) el('titleTimeline').textContent = t('titleTimeline');
    if (el('titleApplications')) el('titleApplications').textContent = t('titleApplications');
    if (el('footerSource')) el('footerSource').textContent = t('footerSource');
    if (el('footerCopyright')) el('footerCopyright').textContent = t('footerCopyright');
    if (el('searchInput')) el('searchInput').placeholder = t('searchPlaceholder');
}

// Comprehensive SEC Crypto ETF Application Data
const etfApplications = [
    // Bitcoin ETFs - Approved
    {
        id: "btc-blackrock",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "BlackRock",
        etfName: "iShares Bitcoin Trust (IBIT)",
        filingType: "Spot ETF",
        filingDate: "2023-06-15",
        decisionDeadline: "2024-01-10",
        status: "approved",
        approvalOdds: 100,
        notes: "首批获批的现货比特币ETF之一"
    },
    {
        id: "btc-fidelity",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "Fidelity",
        etfName: "Wise Origin Bitcoin Fund (FBTC)",
        filingType: "Spot ETF",
        filingDate: "2023-06-29",
        decisionDeadline: "2024-01-10",
        status: "approved",
        approvalOdds: 100,
        notes: "已获SEC批准并开始交易"
    },
    {
        id: "btc-grayscale",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "Grayscale",
        etfName: "Grayscale Bitcoin Trust (GBTC)",
        filingType: "Spot ETF",
        filingDate: "2021-10-19",
        decisionDeadline: "2024-01-10",
        status: "approved",
        approvalOdds: 100,
        notes: "信托转换为ETF,已获批"
    },
    {
        id: "btc-ark",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "ARK Invest / 21Shares",
        etfName: "ARK 21Shares Bitcoin ETF (ARKB)",
        filingType: "Spot ETF",
        filingDate: "2021-06-28",
        decisionDeadline: "2024-01-10",
        status: "approved",
        approvalOdds: 100,
        notes: "Cathie Wood旗下基金获批"
    },
    {
        id: "btc-invesco",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "Invesco / Galaxy",
        etfName: "Invesco Galaxy Bitcoin ETF (BTCO)",
        filingType: "Spot ETF",
        filingDate: "2023-06-29",
        decisionDeadline: "2024-01-10",
        status: "approved",
        approvalOdds: 100,
        notes: "已获SEC批准"
    },
    {
        id: "btc-vaneck",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "VanEck",
        etfName: "VanEck Bitcoin Trust (HODL)",
        filingType: "Spot ETF",
        filingDate: "2021-03-01",
        decisionDeadline: "2024-01-10",
        status: "approved",
        approvalOdds: 100,
        notes: "已获批准并开始交易"
    },
    // Ethereum ETFs - Approved
    {
        id: "eth-blackrock",
        cryptocurrency: "Ethereum",
        symbol: "ETH",
        issuer: "BlackRock",
        etfName: "iShares Ethereum Trust (ETHA)",
        filingType: "Spot ETF",
        filingDate: "2023-11-09",
        decisionDeadline: "2024-07-23",
        status: "approved",
        approvalOdds: 100,
        notes: "2024年7月获批,首批以太坊现货ETF"
    },
    {
        id: "eth-grayscale",
        cryptocurrency: "Ethereum",
        symbol: "ETH",
        issuer: "Grayscale",
        etfName: "Grayscale Ethereum Trust (ETHE)",
        filingType: "Spot ETF",
        filingDate: "2024-01-10",
        decisionDeadline: "2024-07-23",
        status: "approved",
        approvalOdds: 100,
        notes: "已转换为现货ETF"
    },
    {
        id: "eth-fidelity",
        cryptocurrency: "Ethereum",
        symbol: "ETH",
        issuer: "Fidelity",
        etfName: "Fidelity Ethereum Fund (FETH)",
        filingType: "Spot ETF",
        filingDate: "2023-11-17",
        decisionDeadline: "2024-07-23",
        status: "approved",
        approvalOdds: 100,
        notes: "已获SEC批准"
    },
    // Solana ETFs - Approved (Nov 2025)
    {
        id: "sol-vaneck",
        cryptocurrency: "Solana",
        symbol: "SOL",
        issuer: "VanEck",
        etfName: "VanEck Solana Trust",
        filingType: "Spot ETF",
        filingDate: "2024-06-27",
        decisionDeadline: "2025-10-15",
        status: "approved",
        approvalOdds: 100,
        notes: "2025年10月获批,11月开始交易"
    },
    {
        id: "sol-21shares",
        cryptocurrency: "Solana",
        symbol: "SOL",
        issuer: "21Shares",
        etfName: "21Shares Core Solana ETF",
        filingType: "Spot ETF",
        filingDate: "2024-06-28",
        decisionDeadline: "2025-10-15",
        status: "approved",
        approvalOdds: 100,
        notes: "首批获批的Solana ETF之一"
    },
    {
        id: "sol-bitwise",
        cryptocurrency: "Solana",
        symbol: "SOL",
        issuer: "Bitwise",
        etfName: "Bitwise Solana ETF",
        filingType: "Spot ETF",
        filingDate: "2024-06-29",
        decisionDeadline: "2025-10-15",
        status: "approved",
        approvalOdds: 100,
        notes: "已获批准"
    },
    {
        id: "sol-morgan",
        cryptocurrency: "Solana",
        symbol: "SOL",
        issuer: "Morgan Stanley",
        etfName: "Morgan Stanley Solana ETF",
        filingType: "Spot ETF",
        filingDate: "2026-01-05",
        decisionDeadline: "2026-04-05",
        status: "pending",
        approvalOdds: 85,
        notes: "2026年1月最新提交"
    },
    // XRP ETFs - Pending
    {
        id: "xrp-bitwise",
        cryptocurrency: "XRP",
        symbol: "XRP",
        issuer: "Bitwise",
        etfName: "Bitwise XRP ETF",
        filingType: "Spot ETF",
        filingDate: "2024-10-02",
        decisionDeadline: "2025-05-15",
        status: "pending",
        approvalOdds: 75,
        notes: "预计2025年5月决定"
    },
    {
        id: "xrp-grayscale",
        cryptocurrency: "XRP",
        symbol: "XRP",
        issuer: "Grayscale",
        etfName: "Grayscale XRP Trust",
        filingType: "Spot ETF",
        filingDate: "2024-10-15",
        decisionDeadline: "2025-05-20",
        status: "pending",
        approvalOdds: 70,
        notes: "信托转换ETF申请中"
    },
    {
        id: "xrp-21shares",
        cryptocurrency: "XRP",
        symbol: "XRP",
        issuer: "21Shares",
        etfName: "21Shares Core XRP ETF",
        filingType: "Spot ETF",
        filingDate: "2024-11-01",
        decisionDeadline: "2025-05-25",
        status: "pending",
        approvalOdds: 72,
        notes: "审批进行中"
    },
    {
        id: "xrp-canary",
        cryptocurrency: "XRP",
        symbol: "XRP",
        issuer: "Canary Capital",
        etfName: "Canary XRP ETF",
        filingType: "Spot ETF",
        filingDate: "2024-10-08",
        decisionDeadline: "2025-05-18",
        status: "pending",
        approvalOdds: 68,
        notes: "等待SEC最终决定"
    },
    {
        id: "xrp-wisdomtree",
        cryptocurrency: "XRP",
        symbol: "XRP",
        issuer: "WisdomTree",
        etfName: "WisdomTree XRP Fund",
        filingType: "Spot ETF",
        filingDate: "2024-12-01",
        decisionDeadline: "2025-10-15",
        status: "pending",
        approvalOdds: 65,
        notes: "最终期限延至10月"
    },
    {
        id: "xrp-franklin",
        cryptocurrency: "XRP",
        symbol: "XRP",
        issuer: "Franklin Templeton",
        etfName: "Franklin XRP Fund",
        filingType: "Spot ETF",
        filingDate: "2024-12-10",
        decisionDeadline: "2025-10-20",
        status: "pending",
        approvalOdds: 70,
        notes: "待通过"
    },
    {
        id: "xrp-proshares",
        cryptocurrency: "XRP",
        symbol: "XRP",
        issuer: "ProShares",
        etfName: "ProShares Ultra XRP ETF",
        filingType: "期货 ETF",
        filingDate: "2024-08-15",
        decisionDeadline: "2025-03-01",
        status: "approved",
        approvalOdds: 100,
        notes: "期货ETF已获批并开始交易"
    },
    // Litecoin ETFs
    {
        id: "ltc-coinshares",
        cryptocurrency: "Litecoin",
        symbol: "LTC",
        issuer: "CoinShares",
        etfName: "CoinShares Litecoin ETF",
        filingType: "Spot ETF",
        filingDate: "2024-06-15",
        decisionDeadline: "2025-10-01",
        status: "delayed",
        approvalOdds: 90,
        notes: "SEC已延期决定,分析师预计90%批准率"
    },
    {
        id: "ltc-grayscale",
        cryptocurrency: "Litecoin",
        symbol: "LTC",
        issuer: "Grayscale",
        etfName: "Grayscale Litecoin Trust",
        filingType: "Spot ETF",
        filingDate: "2024-07-01",
        decisionDeadline: "2025-10-15",
        status: "pending",
        approvalOdds: 88,
        notes: "彭博分析师高度看好"
    },
    {
        id: "ltc-canary",
        cryptocurrency: "Litecoin",
        symbol: "LTC",
        issuer: "Canary Capital",
        etfName: "Canary Litecoin ETF",
        filingType: "Spot ETF",
        filingDate: "2025-01-10",
        decisionDeadline: "2025-11-01",
        status: "pending",
        approvalOdds: 85,
        notes: "已进入公众意见征询期"
    },
    // Dogecoin ETFs
    {
        id: "doge-rex",
        cryptocurrency: "Dogecoin",
        symbol: "DOGE",
        issuer: "REX Shares / Osprey",
        etfName: "REX-Osprey DOGE ETF",
        filingType: "Spot ETF",
        filingDate: "2025-01-21",
        decisionDeadline: "2025-09-15",
        status: "pending",
        approvalOdds: 99,
        notes: "分析师预计99%批准率"
    },
    {
        id: "doge-bitwise",
        cryptocurrency: "Dogecoin",
        symbol: "DOGE",
        issuer: "Bitwise",
        etfName: "Bitwise Dogecoin Spot ETF",
        filingType: "Spot ETF",
        filingDate: "2025-01-28",
        decisionDeadline: "2025-11-12",
        status: "pending",
        approvalOdds: 95,
        notes: "最终决定日期11月12日"
    },
    {
        id: "doge-grayscale",
        cryptocurrency: "Dogecoin",
        symbol: "DOGE",
        issuer: "Grayscale",
        etfName: "Grayscale Dogecoin Trust",
        filingType: "Spot ETF",
        filingDate: "2025-02-10",
        decisionDeadline: "2025-12-01",
        status: "pending",
        approvalOdds: 92,
        notes: "S-1注册文件已提交"
    },
    {
        id: "doge-21shares",
        cryptocurrency: "Dogecoin",
        symbol: "DOGE",
        issuer: "21Shares",
        etfName: "21Shares Dogecoin ETP",
        filingType: "Spot ETF",
        filingDate: "2025-05-01",
        decisionDeadline: "2026-01-09",
        status: "pending",
        approvalOdds: 88,
        notes: "预计2025年10月至2026年1月决定"
    },
    // Cardano ETFs
    {
        id: "ada-grayscale",
        cryptocurrency: "Cardano",
        symbol: "ADA",
        issuer: "Grayscale",
        etfName: "Grayscale Cardano Trust",
        filingType: "Spot ETF",
        filingDate: "2025-02-15",
        decisionDeadline: "2025-10-26",
        status: "delayed",
        approvalOdds: 65,
        notes: "SEC已延期决定至10月26日"
    },
    {
        id: "ada-tuttle",
        cryptocurrency: "Cardano",
        symbol: "ADA",
        issuer: "Tuttle Capital",
        etfName: "Tuttle Capital 2X Cardano ETF",
        filingType: "杠杆 ETF",
        filingDate: "2025-01-15",
        decisionDeadline: "2025-10-10",
        status: "pending",
        approvalOdds: 55,
        notes: "杠杆产品,新生效日期10月10日"
    },
    // Polkadot ETFs
    {
        id: "dot-grayscale",
        cryptocurrency: "Polkadot",
        symbol: "DOT",
        issuer: "Grayscale",
        etfName: "Grayscale Polkadot Trust",
        filingType: "Spot ETF",
        filingDate: "2025-02-01",
        decisionDeadline: "2025-06-11",
        status: "delayed",
        approvalOdds: 60,
        notes: "SEC延期至6月11日"
    },
    {
        id: "dot-21shares",
        cryptocurrency: "Polkadot",
        symbol: "DOT",
        issuer: "21Shares",
        etfName: "21Shares Polkadot ETF",
        filingType: "Spot ETF",
        filingDate: "2025-02-20",
        decisionDeadline: "2025-06-11",
        status: "delayed",
        approvalOdds: 58,
        notes: "Coinbase担任托管方"
    },
    // Other Altcoin ETFs
    {
        id: "avax-vaneck",
        cryptocurrency: "Avalanche",
        symbol: "AVAX",
        issuer: "VanEck",
        etfName: "VanEck Avalanche ETF",
        filingType: "Spot ETF",
        filingDate: "2025-03-15",
        decisionDeadline: "2026-01-20",
        status: "pending",
        approvalOdds: 55,
        notes: "审批进行中"
    },
    {
        id: "hbar-grayscale",
        cryptocurrency: "Hedera",
        symbol: "HBAR",
        issuer: "Grayscale",
        etfName: "Grayscale Hedera Trust",
        filingType: "Spot ETF",
        filingDate: "2025-04-01",
        decisionDeadline: "2026-02-01",
        status: "pending",
        approvalOdds: 45,
        notes: "新申请,等待初步审批"
    },
    {
        id: "sui-bitwise",
        cryptocurrency: "Sui",
        symbol: "SUI",
        issuer: "Bitwise",
        etfName: "Bitwise Sui Strategy ETF",
        filingType: "Strategy ETF",
        filingDate: "2025-12-15",
        decisionDeadline: "2026-03-16",
        status: "pending",
        approvalOdds: 50,
        notes: "新策略型ETF申请"
    },
    {
        id: "uni-bitwise",
        cryptocurrency: "Uniswap",
        symbol: "UNI",
        issuer: "Bitwise",
        etfName: "Bitwise Uniswap Strategy ETF",
        filingType: "Strategy ETF",
        filingDate: "2025-12-15",
        decisionDeadline: "2026-03-16",
        status: "pending",
        approvalOdds: 48,
        notes: "DeFi代币ETF"
    },
    {
        id: "trx-bitwise",
        cryptocurrency: "Tron",
        symbol: "TRX",
        issuer: "Bitwise",
        etfName: "Bitwise Tron Strategy ETF",
        filingType: "Strategy ETF",
        filingDate: "2025-12-15",
        decisionDeadline: "2026-03-16",
        status: "pending",
        approvalOdds: 42,
        notes: "预计2026年3月左右上市"
    },
    {
        id: "near-bitwise",
        cryptocurrency: "Near Protocol",
        symbol: "NEAR",
        issuer: "Bitwise",
        etfName: "Bitwise Near Strategy ETF",
        filingType: "Strategy ETF",
        filingDate: "2025-12-15",
        decisionDeadline: "2026-03-16",
        status: "pending",
        approvalOdds: 45,
        notes: "AI区块链概念"
    },
    {
        id: "aave-bitwise",
        cryptocurrency: "Aave",
        symbol: "AAVE",
        issuer: "Bitwise",
        etfName: "Bitwise Aave Strategy ETF",
        filingType: "Strategy ETF",
        filingDate: "2025-12-15",
        decisionDeadline: "2026-03-16",
        status: "pending",
        approvalOdds: 46,
        notes: "DeFi借贷协议ETF"
    }
];

// DOM Elements
const updateTimeEl = document.getElementById('updateTime');
const totalCountEl = document.getElementById('totalCount');
const approvedCountEl = document.getElementById('approvedCount');
const pendingCountEl = document.getElementById('pendingCount');
const delayedCountEl = document.getElementById('delayedCount');
const searchInputEl = document.getElementById('searchInput');
const cryptoFilterEl = document.getElementById('cryptoFilter');
const applicationsGridEl = document.getElementById('applicationsGrid');
const timelineEl = document.getElementById('timeline');
const filterBtns = document.querySelectorAll('.filter-btn');

// State
let currentFilter = 'all';
let currentCryptoFilter = 'all';
let searchQuery = '';
let currentDataSource = 'static'; // 'sec-api' or 'static'

// API Configuration
let API_BASE_URL = window.location.origin;
if (window.location.protocol === 'file:' ||
    (window.location.hostname === 'localhost' && window.location.port !== '3000') ||
    (window.location.hostname === '127.0.0.1' && window.location.port !== '3000')) {
    API_BASE_URL = 'http://localhost:3000';
}
const SEC_API_ENDPOINT = `${API_BASE_URL}/api/all-etf-applications`;

// Initialize App
async function init() {
    // Set initial language
    updateUILanguage();

    // Show initial static data first
    updateStats();
    populateCryptoFilter();
    renderTimeline();
    renderApplications();
    updateTime();
    // Inject Sync Progress HTML inside info block for better grouping
    setTimeout(() => {
        const infoBlock = document.querySelector('.header-info-block');
        if (infoBlock && !document.getElementById('syncProgress')) {
            const progressHTML = `
                <div class="sync-progress-container" id="syncProgress" style="display: none;">
                    <div class="sync-icon-small">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="spin"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                    </div>
                    <span class="sync-status-text" id="syncStatusText">${t('syncLoading')}</span>
                    <div class="sync-track">
                        <div class="sync-fill" id="syncFill" style="width: 0%"></div>
                    </div>
                    <span class="sync-count" id="syncCount">0%</span>
                </div>
            `;
            infoBlock.insertAdjacentHTML('beforeend', progressHTML);
        }

        // Start progress polling after injection
        startProgressPolling();
    }, 100);

    // Try to fetch real SEC EDGAR data
    await fetchSECData();

    // Set up auto-refresh
    setInterval(updateTime, 1000);
    setInterval(async () => {
        await fetchSECData();
        updateStats();
        renderApplications();
        renderTimeline();
    }, 300000); // Refresh every 5 minutes

    // Event listeners
    setupEventListeners();
}

/**
 * Setup Event Listeners (FIXED - was missing)
 */
function setupEventListeners() {
    // Search input
    if (searchInputEl) {
        searchInputEl.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderApplications();
        });
    }

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderApplications();
        });
    });

    // Crypto filter dropdown
    if (cryptoFilterEl) {
        cryptoFilterEl.addEventListener('change', (e) => {
            currentCryptoFilter = e.target.value;
            renderApplications();
        });
    }

    // Language Toggle
    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', toggleLanguage);
    }

    // Back to Top
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Reset all filters (Helper)
 */
function resetFilters() {
    searchQuery = '';
    currentFilter = 'all';
    currentCryptoFilter = 'all';

    if (searchInputEl) searchInputEl.value = '';
    if (cryptoFilterEl) cryptoFilterEl.value = 'all';

    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') btn.classList.add('active');
    });

    renderApplications();
}

/**
 * Fetch real-time data from SEC EDGAR API
 */
async function fetchSECData(showLoading = false) {
    // Only show loading on explicit refresh, not on background updates
    if (showLoading) {
        const grid = document.getElementById('applicationsGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="loading">
                    <div class="loading-spinner"></div>
                </div>
            `;
        }
    }

    try {
        console.log('Fetching SEC EDGAR data...');
        const response = await fetch(SEC_API_ENDPOINT);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && result.data && result.data.length > 0) {
            // Merge SEC data with static data
            const secData = result.data;

            secData.forEach(secApp => {
                const existingIndex = etfApplications.findIndex(app => {
                    // Match by CIK if both have it
                    if (secApp.cik && app.cik && secApp.cik === app.cik) return true;

                    // Otherwise match by specific symbol OR a combination of issuer and name
                    const nameMatch = app.etfName.toLowerCase().includes(secApp.etfName.toLowerCase()) ||
                        secApp.etfName.toLowerCase().includes(app.etfName.toLowerCase());
                    const symbolMatch = secApp.symbol && app.id.toLowerCase().includes(secApp.symbol.toLowerCase());
                    const issuerMatch = app.issuer.toLowerCase() === secApp.issuer.toLowerCase();

                    return (issuerMatch && nameMatch) || (issuerMatch && symbolMatch);
                });

                if (existingIndex === -1) {
                    // Add new application from SEC
                    etfApplications.push({
                        ...secApp,
                        id: secApp.cik || `sec-${secApp.symbol}-${Date.now()}`,
                        source: 'SEC EDGAR'
                    });
                } else {
                    // Update filing date from SEC
                    if (secApp.filingDate && secApp.filingDate !== 'N/A') {
                        etfApplications[existingIndex].filingDate = secApp.filingDate;
                        etfApplications[existingIndex].source = 'SEC EDGAR';
                    }
                    if (secApp.status === 'approved') {
                        etfApplications[existingIndex].status = 'approved';
                        etfApplications[existingIndex].approvalOdds = 100;
                    }
                    // Add SEC links if available
                    if (secApp.secLink) {
                        etfApplications[existingIndex].secLink = secApp.secLink;
                    }
                    if (secApp.latestFilingLink) {
                        etfApplications[existingIndex].latestFilingLink = secApp.latestFilingLink;
                    }
                }
            });

            currentDataSource = 'sec-api';
            console.log(`✅ SEC EDGAR data loaded: ${result.count} applications`);

            // Update UI after successful fetch
            updateStats();
            populateCryptoFilter(); // Update dropdown with all crypto types from API
            renderApplications();
            renderTimeline();
            updateDataSourceIndicator();
        } else {
            throw new Error('No data from SEC API');
        }
    } catch (error) {
        console.warn('⚠️ Using static data:', error.message);
        currentDataSource = 'static';
        updateDataSourceIndicator();
    }
}

/**
 * Update data source indicator in UI
 */
function updateDataSourceIndicator() {
    const container = document.getElementById('liveStatusContainer');
    const text = document.getElementById('liveStatusText');

    if (container && text) {
        if (currentDataSource === 'sec-api') {
            container.style.background = 'var(--accent-emerald)';
            text.textContent = t('secLive');
        } else {
            container.style.background = 'var(--accent-orange)';
            text.textContent = t('localCache');
        }
    }
}

// Update time display
function updateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Shanghai'
    };
    if (updateTimeEl) {
        updateTimeEl.textContent = now.toLocaleString('zh-CN', options);
    }
}

// Update statistics
function updateStats() {
    const total = etfApplications.length;
    const approved = etfApplications.filter(app => app.status === 'approved').length;
    const pending = etfApplications.filter(app => app.status === 'pending').length;
    const delayed = etfApplications.filter(app => app.status === 'delayed').length;

    if (totalCountEl) animateValue(totalCountEl, parseInt(totalCountEl.textContent) || 0, total, 500);
    if (approvedCountEl) animateValue(approvedCountEl, parseInt(approvedCountEl.textContent) || 0, approved, 500);
    if (pendingCountEl) animateValue(pendingCountEl, parseInt(pendingCountEl.textContent) || 0, pending, 500);

    // Explicitly update delayed count element (previously denied)
    if (delayedCountEl) animateValue(delayedCountEl, parseInt(delayedCountEl.textContent) || 0, delayed, 500);

    // Update filter counts
    const btnAll = document.getElementById('btnAll');
    const btnApproved = document.getElementById('btnApproved');
    const btnPending = document.getElementById('btnPending');
    const btnDelayed = document.getElementById('btnDelayed');

    if (btnAll) btnAll.textContent = `${t('btnAll')} (${total})`;
    if (btnApproved) btnApproved.textContent = `${t('btnApproved')} (${approved})`;
    if (btnPending) btnPending.textContent = `${t('btnPending')} (${pending})`;
    if (btnDelayed) btnDelayed.textContent = `${t('btnDelayed')} (${delayed})`;
}

// Animate number values
function animateValue(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = Math.round(start + range * easeProgress);
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Populate crypto filter dropdown
function populateCryptoFilter() {
    const cryptos = [...new Set(etfApplications.map(app => app.cryptocurrency))].sort();

    if (!cryptoFilterEl) return;

    const currentVal = cryptoFilterEl.value;
    cryptoFilterEl.innerHTML = `<option value="all" id="optAllCrypto">${t('optAllCrypto')}</option>`;
    cryptos.forEach(crypto => {
        const option = document.createElement('option');
        option.value = crypto;
        option.textContent = crypto;
        cryptoFilterEl.appendChild(option);
    });
    cryptoFilterEl.value = currentVal || 'all';
}

// Render timeline
function renderTimeline() {
    if (!timelineEl) return;

    // Show most recent pending ETF filings
    const upcoming = etfApplications
        .filter(app => app.status === 'pending' && app.filingDate && app.filingDate !== 'N/A')
        .sort((a, b) => new Date(b.filingDate) - new Date(a.filingDate))
        .slice(0, 5);

    if (upcoming.length === 0) {
        timelineEl.innerHTML = `<div class="timeline-empty">${currentLang === 'zh' ? '暂无待通过申请' : 'No pending applications'}</div>`;
        return;
    }

    timelineEl.innerHTML = upcoming.map(app => `
        <div class="timeline-item">
            <div class="timeline-date">${formatDate(app.filingDate)}</div>
            <div class="timeline-crypto">
                <span class="symbol">${app.symbol}</span>
                <span class="name">${app.cryptocurrency}</span>
            </div>
            <div class="timeline-issuer">${app.issuer}</div>
            <div class="timeline-countdown">
                📋 ${currentLang === 'zh' ? '待通过' : 'Pending'}
            </div>
        </div>
    `).join('');
}

// Render applications
function renderApplications() {
    if (!applicationsGridEl) return;

    let filteredApps = etfApplications;

    // Enforce sorting by filing date (newest first)
    filteredApps.sort((a, b) => {
        const dateA = new Date(a.filingDate || '1970-01-01');
        const dateB = new Date(b.filingDate || '1970-01-01');
        return dateB - dateA;
    });

    // Apply status filter
    if (currentFilter !== 'all') {
        filteredApps = filteredApps.filter(app => app.status === currentFilter);
    }

    // Apply crypto filter (also check notes for Multi-Crypto constituents)
    if (currentCryptoFilter !== 'all') {
        filteredApps = filteredApps.filter(app => {
            // Direct match
            if (app.cryptocurrency === currentCryptoFilter) return true;
            // Check if Multi-Crypto contains this token in notes
            if (app.cryptocurrency === 'Multi-Crypto' && app.notes) {
                const filterLower = currentCryptoFilter.toLowerCase();
                const notesLower = app.notes.toLowerCase();
                // Match by full name or common abbreviations
                const tokenMap = {
                    'bitcoin': ['btc', 'bitcoin'],
                    'ethereum': ['eth', 'ethereum'],
                    'solana': ['sol', 'solana'],
                    'cardano': ['ada', 'cardano'],
                    'polkadot': ['dot', 'polkadot'],
                    'chainlink': ['link', 'chainlink'],
                    'litecoin': ['ltc', 'litecoin'],
                    'avalanche': ['avax', 'avalanche'],
                    'xrp': ['xrp'],
                    'dogecoin': ['doge', 'dogecoin'],
                    'stellar': ['xlm', 'stellar'],
                    'uniswap': ['uni', 'uniswap']
                };
                const tokens = tokenMap[filterLower] || [filterLower];
                return tokens.some(token => notesLower.includes(token));
            }
            return false;
        });
    }

    // Apply search filter (also check notes for Multi-Crypto constituents)
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredApps = filteredApps.filter(app =>
            app.cryptocurrency.toLowerCase().includes(query) ||
            app.symbol.toLowerCase().includes(query) ||
            app.issuer.toLowerCase().includes(query) ||
            app.etfName.toLowerCase().includes(query) ||
            (app.notes && app.notes.toLowerCase().includes(query))
        );
    }

    if (filteredApps.length === 0) {
        applicationsGridEl.innerHTML = `
            <div class="no-results">
                <div style="font-size: 2rem; margin-bottom: 10px;">🔍</div>
                <p>${currentLang === 'zh' ? '未找到匹配的 ETF 申请' : 'No matching ETF applications found'}</p>
                <button onclick="resetFilters()" style="margin-top: 15px; padding: 8px 16px; background: var(--text-primary); color: var(--accent-emerald); border: none; cursor: pointer; font-family: var(--font-mono); font-weight: bold;">
                    ${currentLang === 'zh' ? '重置筛选' : 'Reset Filters'}
                </button>
            </div>
        `;
        return;
    }

    applicationsGridEl.innerHTML = filteredApps.map(app => {
        try {
            return createApplicationCard(app);
        } catch (e) {
            console.error('Error rendering card:', app, e);
            return '';
        }
    }).join('');
}

// Create application card
function createApplicationCard(app) {
    if (!app) return '';

    // Safety checks
    const status = app.status || 'unknown';
    const symbol = app.symbol || 'N/A';
    const cryptocurrency = app.cryptocurrency || 'Unknown';
    const decisionDeadline = app.decisionDeadline || 'N/A';

    const statusText = {
        approved: t('statusApproved'),
        pending: t('statusPending'),
        delayed: t('statusDelayed'),
        denied: t('statusDenied'),
        unknown: t('statusUnknown')
    };

    const oddsColor = (app.approvalOdds || 0) >= 80 ? 'var(--accent-emerald)' :
        (app.approvalOdds || 0) >= 50 ? 'var(--accent-orange)' :
            'var(--accent-red)';

    // Check if decision deadline is a descriptive string or date
    let deadlineDisplay = decisionDeadline;
    const isDescriptiveDeadline = decisionDeadline.includes('审批') ||
        decisionDeadline.includes('已过') ||
        decisionDeadline.includes('批准') ||
        decisionDeadline.includes('Review') ||
        decisionDeadline.includes('Decision');

    // 🧠 Simplified Status Logic
    const statusTextValue = statusText[status] || status;
    if (status === 'approved') {
        deadlineDisplay = formatDate(decisionDeadline);
    } else if (status === 'pending' || status === 'delayed') {
        deadlineDisplay = isDescriptiveDeadline ? t(decisionDeadline) : `${statusTextValue} (${formatDate(decisionDeadline)})`;
    } else if (!isDescriptiveDeadline) {
        deadlineDisplay = formatDate(decisionDeadline);
    } else {
        deadlineDisplay = t(decisionDeadline);
    }

    // Generate History Link (Fallback to search if specific link is missing)
    let historyLink = app.secLink;
    if (!historyLink || historyLink === '#') {
        const searchTerm = encodeURIComponent(app.issuer ? app.issuer.split('/')[0].trim() : (app.etfName || 'crypto etf'));
        historyLink = `https://www.sec.gov/cgi-bin/browse-edgar?company=${searchTerm}&owner=exclude&action=getcompany`;
    }
    // Check if approved today
    const today = new Date().toISOString().slice(0, 10); // '2026-01-09'
    const isApprovedToday = status === 'approved' && app.filingDate === today;
    const cardClasses = `application-card fade-in${isApprovedToday ? ' today-approved' : ''}`;
    const todayBadgeHtml = isApprovedToday
        ? `<div class="today-badge">🎉 ${currentLang === 'zh' ? '今日通过' : 'Passed Today'}</div>`
        : '';

    return `
        <div class="${cardClasses}">
            <div class="card-header">
                <div class="crypto-info">
                    <div class="crypto-icon">
                        <img src="https://assets.coincap.io/assets/icons/${(cryptoLogoMap[cryptocurrency] || symbol).toLowerCase()}@2x.png" 
                             alt="${symbol}" 
                             onerror="this.style.display='none'; this.parentElement.textContent='${(cryptoLogoMap[cryptocurrency] || symbol).charAt(0).toUpperCase()}'">
                    </div>
                    <div class="crypto-details">
                        <h3>${cryptocurrency}</h3>
                        <span class="crypto-symbol">${symbol}</span>
                    </div>
                </div>
                ${isApprovedToday
            ? `<span class="status-badge today-passed">🎉 ${currentLang === 'zh' ? '今日通过' : 'Passed Today'}</span>`
            : `<span class="status-badge ${status}">${statusText[status] || status}</span>`}
            </div>
            <div class="card-body">
                <div class="etf-name">${app.etfName || 'Unknown ETF'}</div>
                <div class="issuer-name">${t('cardIssuer')}: ${app.issuer || 'Unknown'}</div>
            </div>
            <div class="card-trading-info">
                <span class="trading-tag"><strong>${t('cardExchange')}:</strong> ${app.exchange || 'NYSE/NASDAQ'}</span>
                <span class="trading-tag"><strong>${t('cardExpenseRatio')}:</strong> ${app.expenseRatio || (status === 'approved' ? '0.25%' : 'TBD')}</span>
            </div>
            <div class="card-meta">
                <div class="meta-item">
                    <span class="meta-label">${t('cardFilingType')}</span>
                    <span class="meta-value">${t(app.filingType || 'N/A')}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">${t('cardFilingDate')}</span>
                    <span class="meta-value">${app.filingDate ? formatDate(app.filingDate) : 'N/A'}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">${status === 'approved' ? t('statusApprovedDate') : t('cardStatus')}</span>
                    <span class="meta-value" style="${deadlineDisplay.includes('Stage') || deadlineDisplay.includes('期') || deadlineDisplay.includes('Review') ? 'color: var(--accent-orange)' : ''}">${deadlineDisplay}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">${t('cardNotes')}</span>
                    <span class="meta-value">${t(app.notes || '无')}</span>
                </div>
            </div>
            
            <div class="card-actions" style="margin-top: 15px; display: flex; gap: 10px;">
                <a href="${historyLink}" target="_blank" class="action-btn" style="flex: 1; text-align: center; padding: 8px; background: rgba(0,255,157,0.1); border-radius: 8px; color: var(--accent-green); text-decoration: none; font-size: 0.9rem; transition: all 0.3s;">
                    ${t('cardHistory')}
                </a>
            </div>

            ${status !== 'approved' ? `
            <div class="approval-odds" style="margin-top: 15px;">
                <span class="meta-label">${t('cardOdds')}</span>
                <div class="odds-bar">
                    <div class="odds-fill" style="width: ${app.approvalOdds || 0}%; background: ${oddsColor}"></div>
                </div>
                <span class="odds-value" style="color: ${oddsColor}">${app.approvalOdds || 0}%</span>
            </div>
            ` : ''}
        </div>
    `;
}

// Format date string
function formatDate(dateString) {
    if (!dateString || dateString === 'N/A' || dateString === 'Unknown' || dateString === '未知') return t('none');

    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;

        return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\//g, '-');
    } catch (e) {
        return dateString;
    }
}

// Poll sync progress
function startProgressPolling() {
    const container = document.getElementById('syncProgress');
    if (!container) return;

    const statusText = document.getElementById('syncStatusText');
    const countText = document.getElementById('syncCount');
    const fill = document.getElementById('syncFill');

    // Poll every second
    setInterval(async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/sync-progress`);
            const status = await response.json();

            if (status.isSyncing) {
                container.style.display = 'flex';
                setTimeout(() => container.classList.add('active'), 10);

                const percent = status.totalToProcess > 0
                    ? Math.round((status.processedCount / status.totalToProcess) * 100)
                    : 0;

                if (fill) fill.style.width = `${percent}%`;
                if (statusText) statusText.textContent = status.currentAction;
                if (countText) countText.textContent = `${percent}%`;

                // Silent update periodically
                if (status.processedCount % 5 === 0 && status.processedCount > 0) {
                    fetchSECData(false);
                }

            } else {
                // Sync finished
                if (container.classList.contains('active')) {
                    if (fill) fill.style.width = '100%';
                    if (statusText) statusText.textContent = t('syncComplete');
                    if (countText) countText.textContent = '100%';

                    // Final fetch
                    fetchSECData(false);

                    // Hide after a shorter delay to feel snappier
                    setTimeout(() => {
                        container.classList.remove('active');
                        setTimeout(() => {
                            container.style.display = 'none';
                        }, 300);
                    }, 1500);
                }
            }
        } catch (e) {
            console.error('Progress poll error:', e);
        }
    }, 1000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
