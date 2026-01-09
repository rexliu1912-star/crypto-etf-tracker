/* ==========================================
   SEC Crypto ETF Application Tracker - App Logic
   ========================================== */

// --- Multi-language Support ---
const translations = {
    zh: {
        mainTitle: "SEC 加密货币 ETF 追踪器",
        mainSubtitle: "实时监控 SEC 加密货币 ETF 申请进度",
        liveStatus: "实时更新",
        secLive: "SEC EDGAR 实时数据",
        localCache: "本地缓存数据",
        lastUpdate: "最后更新:",
        labelTotal: "总申请数",
        labelApproved: "已批准",
        labelPending: "审核中",
        labelDelayed: "已延期",
        btnAll: "全部",
        btnApproved: "已批准",
        btnPending: "审核中",
        btnDelayed: "已延期",
        optAllCrypto: "所有加密货币",
        titleTimeline: "即将到来的决策时间表",
        titleApplications: "所有 ETF 申请",
        footerSource: "数据来源: SEC EDGAR、彭博社、路透社 | 仅供参考，不构成投资建议",
        footerCopyright: "© 2026 SEC 加密货币 ETF 追踪器",
        searchPlaceholder: "搜索加密货币或发行商...",
        cardIssuer: "发行商",
        cardFilingType: "申请类型",
        cardFilingDate: "最新公告",
        cardStatus: "当前状态",
        cardNotes: "备注",
        cardOdds: "批准概率",
        cardHistory: "🔗 查阅历史",
        statusApproved: "已批准",
        statusPending: "审核中",
        statusDelayed: "已延期",
        statusDenied: "已拒绝",
        statusUnknown: "未知状态",
        stage1: "初期审核 (第1阶段)",
        stage2: "延期审核 (第2阶段)",
        stageFinal: "最终审核 (最后阶段)",
        stageDecision: "等待裁决 (已过法定审核期)",
        daysLeft: "天后",
        today: "今天",
        none: "无",
        syncLoading: "正在连接 SEC 数据库...",
        syncProcessing: "正在处理新增申请..."
    },
    en: {
        mainTitle: "SEC Crypto ETF Tracker",
        mainSubtitle: "Live Tracking of SEC Crypto ETF Applications",
        liveStatus: "LIVE",
        secLive: "SEC EDGAR REAL-TIME",
        localCache: "LOCAL CACHE DATA",
        lastUpdate: "Last Updated:",
        labelTotal: "Total Apps",
        labelApproved: "Approved",
        labelPending: "Pending",
        labelDelayed: "Delayed",
        btnAll: "All",
        btnApproved: "Approved",
        btnPending: "Pending",
        btnDelayed: "Delayed",
        optAllCrypto: "All Cryptos",
        titleTimeline: "Upcoming Decision Timeline",
        titleApplications: "All ETF Applications",
        footerSource: "Source: SEC EDGAR, Bloomberg, Reuters | For reference only",
        footerCopyright: "© 2026 SEC Crypto ETF Tracker",
        searchPlaceholder: "Search crypto or issuer...",
        cardIssuer: "Issuer",
        cardFilingType: "Type",
        cardFilingDate: "Latest Filing",
        cardStatus: "Status",
        cardNotes: "Notes",
        cardOdds: "Approval Odds",
        cardHistory: "🔗 History",
        statusApproved: "Approved",
        statusPending: "Pending",
        statusDelayed: "Delayed",
        statusDenied: "Denied",
        statusUnknown: "Unknown",
        stage1: "Initial Review (Stage 1)",
        stage2: "Extended Review (Stage 2)",
        stageFinal: "Final Review (Final Stage)",
        stageDecision: "Decision Pending (Past Deadline)",
        daysLeft: "days left",
        today: "Today",
        none: "N/A",
        syncLoading: "Connecting to SEC database...",
        syncProcessing: "Processing new applications..."
    }
};

let currentLang = 'zh';

function t(key) {
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
        notes: "审核进行中"
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
        notes: "审核中"
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
        notes: "审核进行中"
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
        notes: "新申请,等待初步审核"
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
    updateDataSourceIndicator();

    // Inject Sync Progress Bar HTML after header is ready
    setTimeout(() => {
        const header = document.querySelector('.header');
        if (header && !document.getElementById('syncProgress')) {
            const progressHTML = `
                <div class="sync-progress-container" id="syncProgress">
                    <div class="logo-icon" style="width: 36px; height: 36px; min-width: 36px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw spin"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                    </div>
                    <div class="sync-bar-wrapper">
                        <div class="sync-info">
                            <span class="sync-status-text" id="syncStatusText">${t('syncLoading')}</span>
                            <span class="sync-count" id="syncCount">0/0</span>
                        </div>
                        <div class="sync-track">
                            <div class="sync-fill" id="syncFill" style="width: 0%"></div>
                        </div>
                    </div>
                </div>
            `;
            header.insertAdjacentHTML('afterend', progressHTML);

            // Start progress polling after injection
            startProgressPolling();
        }
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
                const existingIndex = etfApplications.findIndex(
                    app => app.etfName.toLowerCase().includes(secApp.symbol.toLowerCase()) ||
                        app.issuer.toLowerCase() === secApp.issuer.toLowerCase()
                );

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
    if (delayedCountEl) animateValue(delayedCountEl, parseInt(delayedCountEl.textContent) || 0, delayed, 500);
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

    const upcoming = etfApplications
        .filter(app => app.status === 'pending' || app.status === 'delayed')
        .map(app => {
            const date = new Date(app.decisionDeadline);
            const today = new Date();
            const diffTime = date - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return { ...app, diffDays };
        })
        .filter(app => app.diffDays >= 0) // Only future dates
        .sort((a, b) => a.diffDays - b.diffDays)
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
                ⏰ ${app.diffDays === 0 ? t('today') : `${app.diffDays} ${t('daysLeft')}`}
            </div>
        </div>
    `).join('');
}

// Render applications
function renderApplications() {
    if (!applicationsGridEl) return;

    let filteredApps = etfApplications;

    // Apply status filter
    if (currentFilter !== 'all') {
        filteredApps = filteredApps.filter(app => app.status === currentFilter);
    }

    // Apply crypto filter
    if (currentCryptoFilter !== 'all') {
        filteredApps = filteredApps.filter(app => app.cryptocurrency === currentCryptoFilter);
    }

    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredApps = filteredApps.filter(app =>
            app.cryptocurrency.toLowerCase().includes(query) ||
            app.symbol.toLowerCase().includes(query) ||
            app.issuer.toLowerCase().includes(query) ||
            app.etfName.toLowerCase().includes(query)
        );
    }

    if (filteredApps.length === 0) {
        applicationsGridEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p>未找到匹配的ETF申请</p>
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

    const oddsColor = (app.approvalOdds || 0) >= 80 ? 'var(--accent-green)' :
        (app.approvalOdds || 0) >= 50 ? 'var(--accent-orange)' :
            'var(--accent-red)';

    // Check if decision deadline is a descriptive string or date
    let deadlineDisplay = decisionDeadline;
    const isDescriptiveDeadline = decisionDeadline.includes('审核') ||
        decisionDeadline.includes('已过') ||
        decisionDeadline.includes('批准') ||
        decisionDeadline.includes('Review') ||
        decisionDeadline.includes('Decision');

    // 🧠 Smart Status Logic: Calculate status based on filing date if pending
    if ((status === 'pending' || status === 'delayed') && !isDescriptiveDeadline && app.filingDate) {
        const filingDate = new Date(app.filingDate);
        if (!isNaN(filingDate.getTime())) {
            const diffTime = Math.abs(new Date() - filingDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays < 45) {
                deadlineDisplay = t('stage1');
            } else if (diffDays < 90) {
                deadlineDisplay = t('stage2');
            } else if (diffDays < 240) {
                deadlineDisplay = t('stageFinal');
            } else {
                deadlineDisplay = t('stageDecision');
            }
        }
    } else if (!isDescriptiveDeadline) {
        deadlineDisplay = formatDate(decisionDeadline);
    }

    // Generate History Link (Fallback to search if specific link is missing)
    let historyLink = app.secLink;
    if (!historyLink || historyLink === '#') {
        const searchTerm = encodeURIComponent(app.issuer ? app.issuer.split('/')[0].trim() : (app.etfName || 'crypto etf'));
        historyLink = `https://www.sec.gov/cgi-bin/browse-edgar?company=${searchTerm}&owner=exclude&action=getcompany`;
    }

    return `
        <div class="application-card">
            <div class="card-header">
                <div class="crypto-info">
                    <div class="crypto-icon">
                        <img src="https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png" 
                             alt="${symbol}" 
                             onerror="this.style.display='none'; this.parentElement.textContent='${symbol.charAt(0)}'">
                    </div>
                    <div class="crypto-details">
                        <h3>${cryptocurrency}</h3>
                        <span class="crypto-symbol">${symbol}</span>
                    </div>
                </div>
                <span class="status-badge ${status}">${statusText[status] || status}</span>
            </div>
            <div class="card-body">
                <div class="etf-name">${app.etfName || 'Unknown ETF'}</div>
                <div class="issuer-name">${t('cardIssuer')}: ${app.issuer || 'Unknown'}</div>
            </div>
            <div class="card-meta">
                <div class="meta-item">
                    <span class="meta-label">${t('cardFilingType')}</span>
                    <span class="meta-value">${app.filingType || 'N/A'}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">${t('cardFilingDate')}</span>
                    <span class="meta-value">${app.filingDate ? formatDate(app.filingDate) : 'N/A'}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">${t('cardStatus')}</span>
                    <span class="meta-value" style="${deadlineDisplay.includes('Stage') || deadlineDisplay.includes('期') || deadlineDisplay.includes('Review') ? 'color: var(--accent-orange)' : ''}">${deadlineDisplay}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">${t('cardNotes')}</span>
                    <span class="meta-value">${app.notes === '无' ? t('none') : (app.notes || t('none'))}</span>
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
                if (countText) countText.textContent = `${status.processedCount}/${status.totalToProcess}`;

                // Silent update periodically
                if (status.processedCount % 5 === 0 && status.processedCount > 0) {
                    fetchSECData(false);
                }

            } else {
                // Sync finished
                if (container.classList.contains('active')) {
                    if (fill) fill.style.width = '100%';
                    if (statusText) statusText.textContent = '所有数据同步完成';
                    if (countText) countText.textContent = '100%';

                    // Final fetch
                    fetchSECData(false);

                    // Hide after delay
                    setTimeout(() => {
                        container.classList.remove('active');
                        setTimeout(() => container.style.display = 'none', 500);
                    }, 3000);
                }
            }
        } catch (e) {
            console.error('Progress poll error:', e);
        }
    }, 1000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
