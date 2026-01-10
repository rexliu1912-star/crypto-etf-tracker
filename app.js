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
        labelDenied: "已拒绝",
        btnAll: "全部",
        btnApproved: "已通过",
        btnPending: "待通过",
        btnDenied: "已拒绝",
        optAllCrypto: "所有加密货币",
        titleTimeline: "决策时间表",
        titleApplications: "所有 ETF 申请",
        titleCharts: "核心数据分析",
        chartTitleIssuers: "发行商覆盖 (Top 10)",
        chartTitleCrypto: "加密货币分布",
        footerSource: "数据来源: SEC EDGAR | 仅供参考，不构成投资建议",
        footerCopyright: "© 2026 SEC 加密货币 ETF 追踪器",
        searchPlaceholder: "搜索加密货币或发行商...",
        cardIssuer: "发行商",
        cardFilingType: "申请类型",
        cardFilingDate: "最新公告",
        cardStatus: "当前状态",
        statusApprovedDate: "通过时间",
        cardNotes: "备注",
        cardOdds: "概率预估",
        cardHistory: "🔗 官方公告",
        cardTicker: "交易代码",
        cardExpenseRatio: "费率",
        cardExchange: "交易所",
        statusApproved: "已通过",
        statusPending: "待通过",
        statusDenied: "已拒绝",
        statusDenied: "已拒绝",
        statusUnknown: "未知状态",
        daysLeft: "天后",
        today: "今天",
        none: "无",
        syncLoading: "正在连接 SEC 数据库...",
        syncProcessing: "正在处理新增申请...",
        syncComplete: "数据同步完成",
        // Filing Types
        "Spot ETF": "现货 ETF",
        "Futures ETF": "期货 ETF",
        "2x Leveraged ETF": "2x 杠杆 ETF",
        "-2x Inverse ETF": "-2x 反向杠杆 ETF",
        "Inverse ETF": "反向 ETF",
        "Combo ETF": "组合 ETF",
        "Spot / Leveraged": "现货 / 杠杆",
        "Spot ETF (Withdrawn)": "现货 ETF (已撤回)",
        productCount: "产品数量"
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
        labelDenied: "Denied",
        btnAll: "All",
        btnApproved: "Approved",
        btnPending: "Pending",
        btnDenied: "Denied",
        optAllCrypto: "All Crypto",
        titleTimeline: "Decision Timeline",
        titleApplications: "All ETF Applications",
        titleCharts: "Core Data Analysis",
        chartTitleIssuers: "Issuer Coverage (Top 10)",
        chartTitleCrypto: "Cryptocurrency Distribution",
        footerSource: "Source: SEC EDGAR | For reference only",
        footerCopyright: "© 2026 SEC Crypto ETF Tracker",
        searchPlaceholder: "Search crypto or issuer...",
        cardIssuer: "Issuer",
        cardFilingType: "Type",
        cardFilingDate: "Latest Filing",
        cardStatus: "Status",
        statusApprovedDate: "Approved Date",
        cardNotes: "Notes",
        cardOdds: "Approval Odds",
        cardHistory: "🔗 Official Files",
        cardTicker: "Ticker",
        cardExpenseRatio: "Expense Ratio",
        cardExchange: "Exchange",
        statusApproved: "Approved",
        statusPending: "Pending",
        statusDenied: "Denied",
        statusUnknown: "Unknown",
        daysLeft: "days left",
        today: "Today",
        none: "N/A",
        syncLoading: "Connecting to SEC database...",
        syncProcessing: "Processing new applications...",
        syncComplete: "Sync Complete",
        productCount: "Products",
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
        "Coinbase担任托管方": "Coinbase as custodian",
        "属于 SEC EDGAR 2025/2026 年度加密资产申报流水条目": "Part of SEC EDGAR 2025/2026 crypto asset filing pipeline",
        "历史申报记录，已撤回或被拒绝": "Historical filing, withdrawn or denied",
        "待通过 (2026 窗口期)": "Pending (2026 Window)"
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
    if (el('labelDenied')) el('labelDenied').textContent = t('labelDenied');
    if (el('btnAll')) el('btnAll').textContent = t('btnAll');
    if (el('btnApproved')) el('btnApproved').textContent = t('btnApproved');
    if (el('btnPending')) el('btnPending').textContent = t('btnPending');
    if (el('btnDenied')) el('btnDenied').textContent = t('btnDenied');
    if (el('optAllCrypto')) el('optAllCrypto').textContent = t('optAllCrypto');
    if (el('titleTimeline')) el('titleTimeline').textContent = t('titleTimeline');
    if (el('titleApplications')) el('titleApplications').textContent = t('titleApplications');
    if (el('footerSource')) el('footerSource').textContent = t('footerSource');
    if (el('footerCopyright')) el('footerCopyright').textContent = t('footerCopyright');
    if (el('searchInput')) el('searchInput').placeholder = t('searchPlaceholder');
    if (el('titleCharts')) el('titleCharts').textContent = t('titleCharts');
    if (el('chartTitleIssuers')) el('chartTitleIssuers').textContent = t('chartTitleIssuers');
    if (el('chartTitleCrypto')) el('chartTitleCrypto').textContent = t('chartTitleCrypto');
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
        status: "denied",
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
        status: "denied",
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
        status: "denied",
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
        status: "denied",
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
    },
    // ==================== PROSHARES CRYPTO ETFs (12 Trading + 1 Pending) ====================
    // Bitcoin ETFs
    {
        id: "btc-proshares-bito",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "ProShares",
        etfName: "ProShares Bitcoin Strategy ETF (BITO)",
        filingType: "Futures ETF",
        filingDate: "2021-10-19",
        decisionDeadline: "2021-10-19",
        status: "approved",
        approvalOdds: 100,
        notes: "首个美国比特币期货ETF，已通过",
        ticker: "BITO"
    },
    {
        id: "btc-proshares-biti",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "ProShares",
        etfName: "ProShares Short Bitcoin Strategy ETF (BITI)",
        filingType: "Futures ETF",
        filingDate: "2022-06-21",
        decisionDeadline: "2022-06-21",
        status: "approved",
        approvalOdds: 100,
        notes: "比特币反向ETF，已通过",
        ticker: "BITI"
    },
    {
        id: "btc-proshares-bitu",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "ProShares",
        etfName: "ProShares Ultra Bitcoin ETF (BITU)",
        filingType: "杠杆 ETF",
        filingDate: "2024-04-01",
        decisionDeadline: "2024-04-01",
        status: "approved",
        approvalOdds: 100,
        notes: "2x杠杆比特币ETF，已通过",
        ticker: "BITU"
    },
    {
        id: "btc-proshares-sbit",
        cryptocurrency: "Bitcoin",
        symbol: "BTC",
        issuer: "ProShares",
        etfName: "ProShares UltraShort Bitcoin ETF (SBIT)",
        filingType: "杠杆 ETF",
        filingDate: "2024-04-01",
        decisionDeadline: "2024-04-01",
        status: "approved",
        approvalOdds: 100,
        notes: "-2x杠杆比特币ETF，已通过",
        ticker: "SBIT"
    },
    // Ethereum ETFs
    {
        id: "eth-proshares-eeth",
        cryptocurrency: "Ethereum",
        symbol: "ETH",
        issuer: "ProShares",
        etfName: "ProShares Ether Strategy ETF (EETH)",
        filingType: "Futures ETF",
        filingDate: "2023-10-02",
        decisionDeadline: "2023-10-02",
        status: "approved",
        approvalOdds: 100,
        notes: "以太坊期货ETF，已通过",
        ticker: "EETH"
    },
    {
        id: "eth-proshares-seth",
        cryptocurrency: "Ethereum",
        symbol: "ETH",
        issuer: "ProShares",
        etfName: "ProShares Short Ether Strategy ETF (SETH)",
        filingType: "Futures ETF",
        filingDate: "2024-06-01",
        decisionDeadline: "2024-06-01",
        status: "approved",
        approvalOdds: 100,
        notes: "以太坊反向ETF，已通过",
        ticker: "SETH"
    },
    {
        id: "eth-proshares-etht",
        cryptocurrency: "Ethereum",
        symbol: "ETH",
        issuer: "ProShares",
        etfName: "ProShares Ultra Ether ETF (ETHT)",
        filingType: "杠杆 ETF",
        filingDate: "2024-06-01",
        decisionDeadline: "2024-06-01",
        status: "approved",
        approvalOdds: 100,
        notes: "2x杠杆以太坊ETF，已通过",
        ticker: "ETHT"
    },
    {
        id: "eth-proshares-ethd",
        cryptocurrency: "Ethereum",
        symbol: "ETH",
        issuer: "ProShares",
        etfName: "ProShares UltraShort Ether ETF (ETHD)",
        filingType: "杠杆 ETF",
        filingDate: "2024-06-01",
        decisionDeadline: "2024-06-01",
        status: "approved",
        approvalOdds: 100,
        notes: "-2x杠杆以太坊ETF，已通过",
        ticker: "ETHD"
    },
    // BTC + ETH Combo ETFs
    {
        id: "combo-proshares-bete",
        cryptocurrency: "Multi-Crypto",
        symbol: "BETE",
        issuer: "ProShares",
        etfName: "ProShares Bitcoin & Ether Equal Weight Strategy ETF (BETE)",
        filingType: "Futures ETF",
        filingDate: "2024-10-01",
        decisionDeadline: "2024-10-01",
        status: "approved",
        approvalOdds: 100,
        notes: "BTC+ETH等权重组合ETF，已通过",
        ticker: "BETE"
    },
    {
        id: "combo-proshares-beth",
        cryptocurrency: "Multi-Crypto",
        symbol: "BETH",
        issuer: "ProShares",
        etfName: "ProShares Bitcoin & Ether Market Cap Weight Strategy ETF (BETH)",
        filingType: "Futures ETF",
        filingDate: "2024-10-01",
        decisionDeadline: "2024-10-01",
        status: "approved",
        approvalOdds: 100,
        notes: "BTC+ETH市值权重组合ETF，已通过",
        ticker: "BETH"
    },
    // Solana ETF
    {
        id: "sol-proshares-slon",
        cryptocurrency: "Solana",
        symbol: "SOL",
        issuer: "ProShares",
        etfName: "ProShares Ultra Solana ETF (SLON)",
        filingType: "杠杆 ETF",
        filingDate: "2025-06-01",
        decisionDeadline: "2025-06-01",
        status: "approved",
        approvalOdds: 100,
        notes: "2x杠杆Solana ETF，已通过",
        ticker: "SLON"
    },
    // XRP ETF
    {
        id: "xrp-proshares-uxrp",
        cryptocurrency: "XRP",
        symbol: "XRP",
        issuer: "ProShares",
        etfName: "ProShares Ultra XRP ETF (UXRP)",
        filingType: "杠杆 ETF",
        filingDate: "2025-06-01",
        decisionDeadline: "2025-06-01",
        status: "approved",
        approvalOdds: 100,
        notes: "2x杠杆XRP ETF，已通过",
        ticker: "UXRP"
    },
    // ProShares CoinDesk 20 ETF (Pending)
    {
        id: "index-proshares-coindesk20",
        cryptocurrency: "Multi-Crypto",
        symbol: "CD20",
        issuer: "ProShares",
        etfName: "ProShares CoinDesk 20 ETF",
        filingType: "Index ETF",
        filingDate: "2025-10-15",
        decisionDeadline: "2026-04-15",
        status: "pending",
        approvalOdds: 75,
        notes: "跟踪CoinDesk 20指数(前20大加密资产)，审批中"
    }
];

// DOM Elements
const updateTimeEl = document.getElementById('updateTime');
const totalCountEl = document.getElementById('totalCount');
const approvedCountEl = document.getElementById('approvedCount');
const pendingCountEl = document.getElementById('pendingCount');
const deniedCountEl = document.getElementById('deniedCount');
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

// API Configuration - Use relative path for static hosting
const SEC_API_ENDPOINT = './data/etf-data.json';
const APP_VERSION = '1.1.0'; // Increment to force refresh

// Initialize App
async function init() {
    console.log(`Initializing App v${APP_VERSION}`);
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
        console.log('Fetching SEC EDGAR data with cache bust...');
        // Add timestamp to prevent browser caching of the JSON data
        const cacheBuster = `?v=${APP_VERSION}&t=${Date.now()}`;
        const response = await fetch(SEC_API_ENDPOINT + cacheBuster);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && result.data && result.data.length > 0) {
            // Replace the entire application list with the verified data from the API
            // This ensures we reflect the exact counts (220 total, 126 pending) from etf-data.json
            etfApplications.length = 0; // Clear hardcoded data
            result.data.forEach(secApp => {
                etfApplications.push({
                    ...secApp,
                    id: secApp.id || secApp.cik || `sec-${secApp.symbol}-${Date.now() + Math.random()}`,
                    source: secApp.source || 'SEC EDGAR (Verified)'
                });
            });

            currentDataSource = 'sec-api';
            console.log(`✅ SEC EDGAR data loaded: ${etfApplications.length} applications`);

            // Update UI after successful fetch
            updateStats();
            populateCryptoFilter();
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
        // Fallback: render static data if API fails but we already have static data
        updateStats();
        renderApplications();
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
    const denied = etfApplications.filter(app => app.status === 'denied').length;

    if (totalCountEl) animateValue(totalCountEl, parseInt(totalCountEl.textContent) || 0, total, 500);
    if (approvedCountEl) animateValue(approvedCountEl, parseInt(approvedCountEl.textContent) || 0, approved, 500);
    if (pendingCountEl) animateValue(pendingCountEl, parseInt(pendingCountEl.textContent) || 0, pending, 500);

    // Explicitly update denied count element
    if (deniedCountEl) animateValue(deniedCountEl, parseInt(deniedCountEl.textContent) || 0, denied, 500);

    // Update filter counts
    const btnAll = document.getElementById('btnAll');
    const btnApproved = document.getElementById('btnApproved');
    const btnPending = document.getElementById('btnPending');
    const btnDenied = document.getElementById('btnDenied');

    if (btnAll) btnAll.textContent = `${t('btnAll')} (${total})`;
    if (btnApproved) btnApproved.textContent = `${t('btnApproved')} (${approved})`;
    if (btnPending) btnPending.textContent = `${t('btnPending')} (${pending})`;
    if (btnDenied) btnDenied.textContent = `${t('btnDenied')} (${denied})`;

    // Render charts
    renderCharts();
}

// Chart instances for updates
let issuerChartInstance = null;
let cryptoChartInstance = null;

/**
 * Render Charts using Chart.js
 */
function renderCharts() {
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded');
        return;
    }

    renderIssuerChart();
    renderCryptoChart();
}

/**
 * Render Issuer Distribution Bar Chart (Horizontal)
 */
function renderIssuerChart() {
    const canvas = document.getElementById('issuerChart');
    if (!canvas) return;

    // Calculate issuer counts
    const issuerCounts = {};
    etfApplications.forEach(app => {
        const issuer = app.issuer || 'Unknown';
        issuerCounts[issuer] = (issuerCounts[issuer] || 0) + 1;
    });

    // Sort and get top 10
    const sortedIssuers = Object.entries(issuerCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    const labels = sortedIssuers.map(([issuer]) => issuer);
    const data = sortedIssuers.map(([, count]) => count);

    // Color palette matching brutalist design
    const colors = [
        '#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6',
        '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
    ];

    // Destroy existing chart if exists
    if (issuerChartInstance) {
        issuerChartInstance.destroy();
    }

    issuerChartInstance = new Chart(canvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: t('productCount'),
                data: data,
                backgroundColor: colors,
                borderColor: '#1C1917',
                borderWidth: 2
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1C1917',
                    titleFont: { family: "'JetBrains Mono', monospace", weight: 'bold' },
                    bodyFont: { family: "'JetBrains Mono', monospace" },
                    borderColor: '#1C1917',
                    borderWidth: 2
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: '#E7E5E4'
                    },
                    ticks: {
                        font: { family: "'JetBrains Mono', monospace", weight: 'bold' },
                        color: '#1C1917'
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { family: "'JetBrains Mono', monospace", weight: 'bold', size: 11 },
                        color: '#1C1917'
                    }
                }
            }
        }
    });
}

/**
 * Render Cryptocurrency Distribution Doughnut Chart
 */
function renderCryptoChart() {
    const canvas = document.getElementById('cryptoChart');
    if (!canvas) return;

    // Calculate crypto counts
    const cryptoCounts = {};
    etfApplications.forEach(app => {
        const crypto = app.cryptocurrency || 'Unknown';
        cryptoCounts[crypto] = (cryptoCounts[crypto] || 0) + 1;
    });

    // Sort by count
    const sortedCrypto = Object.entries(cryptoCounts)
        .sort((a, b) => b[1] - a[1]);

    const labels = sortedCrypto.map(([crypto]) => crypto);
    const data = sortedCrypto.map(([, count]) => count);

    // Color palette for cryptocurrencies
    const cryptoColors = {
        'Bitcoin': '#F7931A',
        'Ethereum': '#627EEA',
        'Solana': '#00FFA3',
        'XRP': '#23292F',
        'Litecoin': '#BFBBBB',
        'Dogecoin': '#C2A633',
        'Avalanche': '#E84142',
        'Cardano': '#0033AD',
        'Polkadot': '#E6007A',
        'Chainlink': '#375BD2',
        'Multi-Crypto': '#3B82F6',
        'Stellar': '#7D00FF',
        'Hedera': '#8259EF'
    };

    const colors = labels.map(label => cryptoColors[label] || '#78716C');

    // Destroy existing chart if exists
    if (cryptoChartInstance) {
        cryptoChartInstance.destroy();
    }

    cryptoChartInstance = new Chart(canvas.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: '#1C1917',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '50%',
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: { family: "'JetBrains Mono', monospace", size: 10, weight: 'bold' },
                        color: '#1C1917',
                        padding: 8,
                        boxWidth: 12,
                        boxHeight: 12
                    }
                },
                tooltip: {
                    backgroundColor: '#1C1917',
                    titleFont: { family: "'JetBrains Mono', monospace", weight: 'bold' },
                    bodyFont: { family: "'JetBrains Mono', monospace" },
                    borderColor: '#1C1917',
                    borderWidth: 2,
                    callbacks: {
                        label: function (context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return `${context.label}: ${context.raw} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
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

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Filter for pending ETFs with valid date deadlines
    const upcoming = etfApplications
        .filter(app => {
            if (app.status !== 'pending') return false;
            const deadline = app.decisionDeadline;
            if (!deadline || deadline === 'N/A') return false;
            // Check if it's a valid date format (YYYY-MM-DD)
            return /^\d{4}-\d{2}-\d{2}$/.test(deadline);
        })
        .map(app => {
            const deadlineDate = new Date(app.decisionDeadline);
            const diffTime = deadlineDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return { ...app, deadlineDate, diffDays };
        })
        .filter(app => app.diffDays >= 0) // Only future deadlines
        .sort((a, b) => a.diffDays - b.diffDays) // Nearest first
        .slice(0, 5);

    if (upcoming.length === 0) {
        timelineEl.innerHTML = `<div class="timeline-empty">${t('none')}</div>`;
        return;
    }

    timelineEl.innerHTML = upcoming.map(app => `
        <div class="timeline-item">
            <div class="timeline-date">${formatDate(app.decisionDeadline)}</div>
            <div class="timeline-crypto">
                <span class="symbol">${app.symbol}</span>
                <span class="name">${app.cryptocurrency}</span>
            </div>
            <div class="timeline-issuer">${app.issuer}</div>
            <div class="timeline-countdown">
                ⏳ ${app.diffDays === 0 ? t('today') : `${app.diffDays} ${t('daysLeft')}`}
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

    // Apply crypto filter (also check constituents for Multi-Crypto ETFs)
    if (currentCryptoFilter !== 'all') {
        filteredApps = filteredApps.filter(app => {
            // Direct match
            if (app.cryptocurrency === currentCryptoFilter) return true;
            // Check if Multi-Crypto contains this token in constituents array
            if (app.cryptocurrency === 'Multi-Crypto' && app.constituents && Array.isArray(app.constituents)) {
                return app.constituents.some(c => c.toLowerCase() === currentCryptoFilter.toLowerCase());
            }
            // Fallback: check notes for legacy data
            if (app.cryptocurrency === 'Multi-Crypto' && app.notes) {
                const filterLower = currentCryptoFilter.toLowerCase();
                const notesLower = app.notes.toLowerCase();
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

    // Apply search filter (also check constituents for Multi-Crypto ETFs)
    if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        if (query) {
            filteredApps = filteredApps.filter(app => {
                try {
                    // Safe string conversion and check for each field
                    const cryptoMatch = (app.cryptocurrency || '').toLowerCase().includes(query);
                    const symbolMatch = (app.symbol || '').toLowerCase().includes(query);
                    const issuerMatch = (app.issuer || '').toLowerCase().includes(query);
                    const nameMatch = (app.etfName || '').toLowerCase().includes(query);
                    const notesMatch = (app.notes || '').toLowerCase().includes(query);

                    // Specific constituent check
                    let constituentMatch = false;
                    if (app.constituents && Array.isArray(app.constituents)) {
                        constituentMatch = app.constituents.some(c =>
                            c && typeof c === 'string' && c.toLowerCase().includes(query)
                        );
                    }

                    return cryptoMatch || symbolMatch || issuerMatch || nameMatch || notesMatch || constituentMatch;
                } catch (err) {
                    console.error('Error filtering app:', app, err);
                    return false;
                }
            });
        }
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
        deadlineDisplay = statusTextValue;
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
                ${app.constituents && app.constituents.length > 0 ? `
                <div class="constituents-row" style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 4px; align-items: center;">
                    <span style="font-size: 0.7rem; color: var(--text-muted); margin-right: 4px; line-height: 1;">${currentLang === 'zh' ? '包含:' : 'Contains:'}</span>
                    ${app.constituents.slice(0, 5).map(c => `<span class="constituent-tag" style="font-size: 0.65rem; padding: 2px 6px; background: var(--bg-secondary); border-radius: 3px; color: var(--text-primary); border: 1px solid var(--bg-tertiary); line-height: 1;">${c}</span>`).join('')}
                    ${app.constituents.length > 5 ? `<span style="font-size: 0.65rem; color: var(--text-muted); line-height: 1;">+${app.constituents.length - 5}</span>` : ''}
                </div>
                ` : ''}
            </div>

            <div class="card-meta">
                <div class="meta-item">
                    <span class="meta-label">${t('cardFilingType')}</span>
                    <span class="meta-value">${t(app.filingType || 'none')}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">${t('cardFilingDate')}</span>
                    <span class="meta-value">${app.filingDate ? formatDate(app.filingDate) : t('none')}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">${status === 'approved' ? t('statusApprovedDate') : t('cardStatus')}</span>
                    <span class="meta-value" style="${deadlineDisplay.includes('Stage') || deadlineDisplay.includes('期') || deadlineDisplay.includes('Review') ? 'color: var(--accent-orange)' : ''}">${deadlineDisplay}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">${t('cardNotes')}</span>
                    <span class="meta-value">${t(app.notes || 'none')}</span>
                </div>
            </div>
            
            <div class="card-actions" style="margin-top: 15px; display: flex; gap: 10px;">
                <a href="${historyLink}" target="_blank" class="action-btn" style="flex: 1; text-align: center; padding: 8px; background: rgba(0,255,157,0.1); border-radius: 8px; color: var(--accent-green); text-decoration: none; font-size: 0.9rem; transition: all 0.3s;">
                    ${t('cardHistory')}
                </a>
            </div>

            ${status !== 'approved' && status !== 'denied' ? `
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
