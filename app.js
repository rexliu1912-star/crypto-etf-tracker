/* ==========================================
   SEC Crypto ETF Application Tracker - App Logic
   ========================================== */

// --- Multi-language Support ---
const translations = {
    zh: {
        mainTitle: "加密货币 ETF 追踪",
        mainSubtitle: "实时监控 SEC 加密货币 ETF 进度",
        liveStatus: "实时更新",
        secLive: "SEC EDGAR",
        localCache: "本地缓存数据",
        lastUpdate: "更新时间:",
        labelTotal: "总申请数",
        labelApproved: "已通过",
        labelPending: "待通过",
        labelRecent7d: "最近7天",
        btnAll: "全部",
        btnApproved: "已通过",
        btnPending: "待通过",
        btnRecent7d: "最近7天",
        optAllCrypto: "所有加密货币",
        titleTimeline: "决策时间表",
        titleApplications: "所有 ETF 申请",
        titleCharts: "核心数据分析",
        chartTitleIssuers: "发行商覆盖 (Top 10)",
        chartTitleCrypto: "加密货币分布",
        footerSource: "数据来源: SEC EDGAR | 仅供参考，不构成投资建议",
        footerCopyright: '<a href="https://x.com/rexliu" target="_blank" style="color: inherit; text-decoration: none;">© Rex Liu</a>',
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
        productCount: "产品数量",
        oddsTooltip: "基于历史数据和分析师预测的批准概率估算，仅供参考",
        timelineTooltip: "根据 SEC 规定，ETF 申请有 240 天审批窗口。此时间表显示预计的决策日期。"
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
        labelRecent7d: "7D New",
        btnAll: "All",
        btnApproved: "Approved",
        btnPending: "Pending",
        btnRecent7d: "Last 7 Days",
        optAllCrypto: "All Crypto",
        titleTimeline: "Decision Timeline",
        titleApplications: "All ETF Applications",
        titleCharts: "Core Data Analysis",
        chartTitleIssuers: "Issuer Coverage (Top 10)",
        chartTitleCrypto: "Cryptocurrency Distribution",
        footerSource: "Source: SEC EDGAR | For reference only",
        footerCopyright: '<a href="https://x.com/rexliu" target="_blank" style="color: inherit; text-decoration: none;">© 2026 Rex Liu</a>',
        searchPlaceholder: "Search crypto or issuer...",
        cardIssuer: "Issuer",
        cardFilingType: "Type",
        cardFilingDate: "Latest Filing",
        cardStatus: "Status",
        statusApprovedDate: "Approved Date",
        cardNotes: "Notes",
        cardOdds: "Approval Odds",
        cardHistory: "🔗 SEC Filings",
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
        oddsTooltip: "Estimated approval probability based on historical data and analyst predictions. For reference only.",
        timelineTooltip: "Per SEC rules, ETF applications have a 240-day review window. This timeline shows expected decision dates.",
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
let currentTheme = 'light';

// Theme management
function initTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem('etf-tracker-theme');
    if (savedTheme) {
        currentTheme = savedTheme;
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = 'dark';
        }
    }
    applyTheme();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('etf-tracker-theme', currentTheme);
    applyTheme();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️';
        themeBtn.title = currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    }
    // Update charts for theme compatibility
    updateChartsTheme();
}

function updateChartsTheme() {
    // Chart.js global defaults for dark mode
    const textColor = currentTheme === 'dark' ? '#FAFAF9' : '#1C1917';
    const gridColor = currentTheme === 'dark' ? '#44403C' : '#E7E5E4';

    if (typeof Chart !== 'undefined') {
        Chart.defaults.color = textColor;
        Chart.defaults.borderColor = gridColor;

        // Re-render charts if they exist
        if (typeof issuerChartInstance !== 'undefined' && issuerChartInstance) {
            issuerChartInstance.options.scales.x.ticks.color = textColor;
            issuerChartInstance.options.scales.y.ticks.color = textColor;
            issuerChartInstance.options.scales.x.grid.color = gridColor;
            issuerChartInstance.options.scales.y.grid.color = gridColor;
            issuerChartInstance.update();
        }
        if (typeof cryptoChartInstance !== 'undefined' && cryptoChartInstance) {
            cryptoChartInstance.options.plugins.legend.labels.color = textColor;
            cryptoChartInstance.update();
        }
    }
}

function t(key) {
    if (!key) return key;
    if (currentLang === 'en' && translations['en'][key]) {
        return translations['en'][key];
    }
    return translations[currentLang][key] || key;
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLangButton();
    updateUILanguage();
    updateStats();
    renderApplications();
    renderTimeline();
    populateCryptoFilter();
    updateDataSourceIndicator();
}

function updateLangButton() {
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        // Show the OTHER language as the button text (what you'll switch TO)
        langBtn.textContent = currentLang === 'zh' ? 'EN' : '中';
        langBtn.title = currentLang === 'zh' ? 'Switch to English' : '切换到中文';
    }
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
    if (el('labelRecent7d')) el('labelRecent7d').textContent = t('labelRecent7d');
    if (el('btnAll')) el('btnAll').textContent = t('btnAll');
    if (el('btnApproved')) el('btnApproved').textContent = t('btnApproved');
    if (el('btnPending')) el('btnPending').textContent = t('btnPending');
    if (el('btnRecent7d')) el('btnRecent7d').textContent = t('btnRecent7d');
    if (el('optAllCrypto')) el('optAllCrypto').textContent = t('optAllCrypto');
    if (el('titleTimeline')) el('titleTimeline').textContent = t('titleTimeline');
    if (el('titleApplications')) el('titleApplications').textContent = t('titleApplications');
    if (el('footerSource')) el('footerSource').textContent = t('footerSource');
    if (el('footerCopyright')) el('footerCopyright').innerHTML = t('footerCopyright');
    if (el('searchInput')) el('searchInput').placeholder = t('searchPlaceholder');
    if (el('titleCharts')) el('titleCharts').textContent = t('titleCharts');
    if (el('chartTitleIssuers')) el('chartTitleIssuers').textContent = t('chartTitleIssuers');
    if (el('chartTitleCrypto')) el('chartTitleCrypto').textContent = t('chartTitleCrypto');
    if (el('timelineTooltip')) el('timelineTooltip').title = t('timelineTooltip');
}

// Comprehensive SEC Crypto ETF Application Data
// Initialize empty applications array - will be populated from API or fallback data
const etfApplications = [];

// Fallback data loader
async function loadFallbackData() {
    try {
        const response = await fetch('./data/fallback-etf-data.json');
        if (!response.ok) {
            throw new Error(`Failed to load fallback data: ${response.status}`);
        }
        const fallbackData = await response.json();
        return fallbackData.data || [];
    } catch (error) {
        console.warn('Failed to load fallback data:', error);
        // Return minimal fallback data if file loading fails
        return [{
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
        }];
    }
}

// DOM Elements
const updateTimeEl = document.getElementById('updateTime');
const totalCountEl = document.getElementById('totalCount');
const approvedCountEl = document.getElementById('approvedCount');
const pendingCountEl = document.getElementById('pendingCount');
const recent7dCountEl = document.getElementById('recent7dCount');
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

    // Load initial fallback data first
    try {
        const fallbackData = await loadFallbackData();
        etfApplications.length = 0;
        fallbackData.forEach(app => etfApplications.push(app));
        console.log(`📄 Initial fallback data loaded: ${etfApplications.length} applications`);
    } catch (error) {
        console.warn('Failed to load initial fallback data:', error);
    }
    
    // Show initial data
    updateStats();
    populateCryptoFilter();
    renderTimeline();
    renderApplications();
    updateTime();
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

    // Theme Toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Initialize theme on page load
    initTheme();

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

    // Timeline Navigation
    const timelineContainer = document.getElementById('timeline');
    const prevBtn = document.getElementById('timelinePrev');
    const nextBtn = document.getElementById('timelineNext');

    if (timelineContainer && prevBtn && nextBtn) {
        const scrollAmount = 280; // Approximately one item width

        prevBtn.addEventListener('click', () => {
            timelineContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            timelineContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        // Update button states on scroll
        function updateNavButtons() {
            const maxScroll = timelineContainer.scrollWidth - timelineContainer.clientWidth;
            prevBtn.disabled = timelineContainer.scrollLeft <= 0;
            nextBtn.disabled = timelineContainer.scrollLeft >= maxScroll - 1;
        }

        timelineContainer.addEventListener('scroll', updateNavButtons);
        // Initial check
        setTimeout(updateNavButtons, 100);
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
            // This ensures we reflect the exact counts from SEC EDGAR data
            etfApplications.length = 0; // Clear any existing data
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
        console.warn('⚠️ API failed, loading fallback data:', error.message);
        try {
            // Load fallback data from separate file
            const fallbackData = await loadFallbackData();
            etfApplications.length = 0; // Clear any existing data
            fallbackData.forEach(app => etfApplications.push(app));
            
            currentDataSource = 'fallback';
            console.log(`📄 Fallback data loaded: ${etfApplications.length} applications`);
        } catch (fallbackError) {
            console.error('❌ Failed to load fallback data:', fallbackError.message);
            currentDataSource = 'error';
        }
        
        updateDataSourceIndicator();
        updateStats();
        renderApplications();
        renderTimeline();
        populateCryptoFilter();
    }
}

/**
 * Update data source indicator in UI
 */
function updateDataSourceIndicator() {
    const container = document.getElementById('liveStatusContainer');
    const text = document.getElementById('liveStatusText');

    if (container && text) {
        switch (currentDataSource) {
            case 'sec-api':
                container.style.background = 'var(--accent-emerald)';
                text.textContent = t('secLive');
                container.setAttribute('aria-label', 'Live data from SEC EDGAR');
                break;
            case 'fallback':
                container.style.background = 'var(--accent-orange)';
                text.textContent = t('localCache');
                container.setAttribute('aria-label', 'Using cached fallback data');
                break;
            case 'error':
                container.style.background = 'var(--accent-red)';
                text.textContent = 'Error';
                container.setAttribute('aria-label', 'Data loading failed');
                break;
            default:
                container.style.background = 'var(--accent-orange)';
                text.textContent = t('localCache');
                container.setAttribute('aria-label', 'Loading data...');
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

    // Calculate recent 7 days filings
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recent7d = etfApplications.filter(app => {
        // Use initialFilingDate (first S-1/N-1A filing) for accurate '7-day new' detection
        const dateToCheck = app.initialFilingDate || app.filingDate;
        if (!dateToCheck || dateToCheck === 'N/A') return false;
        const filingDate = new Date(dateToCheck);
        return filingDate >= sevenDaysAgo && filingDate <= today;
    }).length;

    if (totalCountEl) animateValue(totalCountEl, parseInt(totalCountEl.textContent) || 0, total, 500);
    if (approvedCountEl) animateValue(approvedCountEl, parseInt(approvedCountEl.textContent) || 0, approved, 500);
    if (pendingCountEl) animateValue(pendingCountEl, parseInt(pendingCountEl.textContent) || 0, pending, 500);

    // Update recent 7 days count element
    if (recent7dCountEl) animateValue(recent7dCountEl, parseInt(recent7dCountEl.textContent) || 0, recent7d, 500);

    // Update filter counts
    const btnAll = document.getElementById('btnAll');
    const btnApproved = document.getElementById('btnApproved');
    const btnPending = document.getElementById('btnPending');
    const btnRecent7d = document.getElementById('btnRecent7d');

    if (btnAll) btnAll.textContent = `${t('btnAll')} (${total})`;
    if (btnApproved) btnApproved.textContent = `${t('btnApproved')} (${approved})`;
    if (btnPending) btnPending.textContent = `${t('btnPending')} (${pending})`;
    if (btnRecent7d) btnRecent7d.textContent = `${t('btnRecent7d')} (${recent7d})`;

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

    // Calculate issuer counts (only approved and pending, exclude denied)
    const issuerCounts = {};
    etfApplications
        .filter(app => app.status === 'approved' || app.status === 'pending')
        .forEach(app => {
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

    // Calculate crypto counts (only approved and pending, exclude denied)
    const cryptoCounts = {};
    etfApplications
        .filter(app => app.status === 'approved' || app.status === 'pending')
        .forEach(app => {
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
    const SEC_REVIEW_DAYS = 240; // SEC standard review period

    // Filter for pending ETFs with valid filing dates and calculate expected approval
    const upcoming = etfApplications
        .filter(app => app.status === 'pending' && app.filingDate && app.filingDate !== 'N/A')
        .map(app => {
            const filingDate = new Date(app.filingDate);
            // Calculate expected approval date: filing date + 240 days
            const expectedDate = new Date(filingDate);
            expectedDate.setDate(expectedDate.getDate() + SEC_REVIEW_DAYS);

            const diffTime = expectedDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            return {
                ...app,
                expectedDate,
                expectedDateStr: expectedDate.toISOString().split('T')[0],
                diffDays
            };
        })
        .filter(app => app.diffDays >= 0) // Only future expected dates
        .sort((a, b) => a.diffDays - b.diffDays) // Nearest first
        .slice(0, 5);

    if (upcoming.length === 0) {
        timelineEl.innerHTML = `<div class="timeline-empty">${t('none')}</div>`;
        return;
    }

    timelineEl.innerHTML = upcoming.map(app => `
        <div class="timeline-item">
            <div class="timeline-date">${formatDate(app.expectedDateStr)}</div>
            <div class="timeline-crypto">
                <span class="symbol">${app.symbol}</span>
                <span class="name">${app.cryptocurrency}</span>
            </div>
            <div class="timeline-issuer">${app.issuer}</div>
            <div class="timeline-etf-name">${app.etfName}</div>
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

    // Apply status filter (including special 'recent7d' filter)
    if (currentFilter !== 'all') {
        if (currentFilter === 'recent7d') {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const sevenDaysAgo = new Date(today);
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            filteredApps = filteredApps.filter(app => {
                // Use initialFilingDate (first S-1/N-1A filing) for accurate '7-day new' detection
                const dateToCheck = app.initialFilingDate || app.filingDate;
                if (!dateToCheck || dateToCheck === 'N/A') return false;
                const filingDate = new Date(dateToCheck);
                return filingDate >= sevenDaysAgo && filingDate <= today;
            });
        } else {
            filteredApps = filteredApps.filter(app => app.status === currentFilter);
        }
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

    // Check if filed within last 7 days (for NEW badge)
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date(todayDate);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    let isRecent7d = false;
    // Use initialFilingDate (first S-1/N-1A filing) for accurate '7-day new' detection
    const dateToCheck = app.initialFilingDate || app.filingDate;
    if (dateToCheck && dateToCheck !== 'N/A') {
        const filingDate = new Date(dateToCheck);
        isRecent7d = filingDate >= sevenDaysAgo && filingDate <= todayDate;
    }

    const cardClasses = `application-card fade-in${isApprovedToday ? ' today-approved' : ''}${isRecent7d ? ' recent-filing' : ''}`;
    const todayBadgeHtml = isApprovedToday
        ? `<div class="today-badge">🎉 ${currentLang === 'zh' ? '今日通过' : 'Passed Today'}</div>`
        : '';
    const newBadgeHtml = isRecent7d && !isApprovedToday
        ? `<div class="new-badge">🔥 NEW</div>`
        : '';

    return `
        <div class="${cardClasses}">
            ${newBadgeHtml}
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
                <div class="odds-label">
                    <span>${t('cardOdds')}<span class="info-tooltip" title="${t('oddsTooltip')}">ⓘ</span></span>
                    <span class="odds-value" style="color: ${oddsColor}">${app.approvalOdds || 0}%</span>
                </div>
                <div class="odds-bar">
                    <div class="odds-fill ${app.approvalOdds >= 70 ? 'high' : app.approvalOdds >= 40 ? 'medium' : 'low'}" style="width: ${app.approvalOdds || 0}%;"></div>
                </div>
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

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
