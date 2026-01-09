/**
 * SEC EDGAR API Server
 * Fetches cryptocurrency ETF filings from SEC and serves to frontend
 */

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Request logger (must be first)
app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
});

// Enable CORS and serve static files
app.use(cors());
app.use(express.static(path.join(__dirname)));

// User agent for SEC requests (required by SEC policy)
const SEC_USER_AGENT = 'SEC-ETF-Tracker/1.0 (Contact: admin@example.com)';

/**
 * Known cryptocurrency ETF issuers with their CIK numbers
 * Expanded list based on SEC EDGAR full-text search results (2044 filings)
 */
const CRYPTO_ETF_ISSUERS = [
    // ==================== BITCOIN ETFs ====================
    { cik: '0001980994', name: 'iShares Bitcoin Trust ETF', symbol: 'IBIT', crypto: 'Bitcoin' },
    { cik: '0001588489', name: 'Grayscale Bitcoin Trust', symbol: 'GBTC', crypto: 'Bitcoin' },
    { cik: '0002015034', name: 'Grayscale Bitcoin Mini Trust ETF', symbol: 'BTC', crypto: 'Bitcoin' },
    { cik: '0001850391', name: 'WisdomTree Bitcoin Fund', symbol: 'BTCW', crypto: 'Bitcoin' },
    { cik: '0001763415', name: 'Bitwise Bitcoin ETF', symbol: 'BITB', crypto: 'Bitcoin' },
    { cik: '0001855781', name: 'Invesco Galaxy Bitcoin ETF', symbol: 'BTCO', crypto: 'Bitcoin' },
    { cik: '0001884021', name: 'Volatility Shares Trust', symbol: 'BITX', crypto: 'Bitcoin' },
    { cik: '0001852063', name: 'VanEck Bitcoin Trust', symbol: 'HODL', crypto: 'Bitcoin' },

    // ==================== ETHEREUM ETFs ====================
    { cik: '0001725210', name: 'Grayscale Ethereum Trust', symbol: 'ETHE', crypto: 'Ethereum' },
    { cik: '0002020455', name: 'Grayscale Ethereum Mini Trust ETF', symbol: 'ETH', crypto: 'Ethereum' },
    { cik: '0002000638', name: 'iShares Ethereum Trust ETF', symbol: 'ETHA', crypto: 'Ethereum' },
    { cik: '0002013744', name: 'Bitwise Ethereum ETF', symbol: 'ETHW', crypto: 'Ethereum' },
    { cik: '0001995569', name: 'Invesco Galaxy Ethereum ETF', symbol: 'QETH', crypto: 'Ethereum' },

    // ==================== SOLANA ETFs ====================
    { cik: '0001896677', name: 'Grayscale Solana Trust', symbol: 'GSOL', crypto: 'Solana' },
    { cik: '0002028541', name: 'VanEck Solana ETF', symbol: 'VSOL', crypto: 'Solana' },
    { cik: '0002057388', name: 'Franklin Solana Trust', symbol: 'FSOL', crypto: 'Solana' },
    // ==================== MORGAN STANLEY CRYPTO ETFs (Filed 2026-01-06) ====================
    // Note: Only Bitcoin Trust CIK (0002103612) is confirmed. ETH/SOL CIKs pending SEC sync.
    { cik: '0002103612', name: 'Morgan Stanley Bitcoin Trust', symbol: 'MSBTC', crypto: 'Bitcoin' },

    // ==================== XRP ETFs ====================
    { cik: '0002059438', name: 'Franklin XRP Trust', symbol: 'FXRP', crypto: 'XRP' },
    { cik: '0001833502', name: 'Grayscale XRP Trust', symbol: 'GXRP', crypto: 'XRP' },

    // ==================== LITECOIN ETFs ====================
    { cik: '0001732406', name: 'Grayscale Litecoin Trust', symbol: 'LTCN', crypto: 'Litecoin' },

    // ==================== DOGECOIN ETFs ====================
    { cik: '0002055510', name: 'Grayscale Dogecoin Trust', symbol: 'GDOG', crypto: 'Dogecoin' },
    { cik: '0002064314', name: '21Shares Dogecoin ETF', symbol: 'TDOG', crypto: 'Dogecoin' },

    // ==================== AVALANCHE ETFs ====================
    { cik: '0002060717', name: 'VanEck Avalanche ETF', symbol: 'VAVAX', crypto: 'Avalanche' },
    { cik: '0002035053', name: 'Grayscale Avalanche Trust', symbol: 'AVAX', crypto: 'Avalanche' },

    // ==================== OTHER ALTCOIN ETFs ====================
    { cik: '0001852025', name: 'Grayscale Chainlink Trust', symbol: 'GLNK', crypto: 'Chainlink' },
    { cik: '0001761325', name: 'Grayscale Stellar Lumens Trust', symbol: 'GXLM', crypto: 'Stellar' },
    { cik: '0001732409', name: 'Grayscale Bitcoin Cash Trust', symbol: 'BCHG', crypto: 'Bitcoin Cash' },
    { cik: '0001705181', name: 'Grayscale Ethereum Classic Trust', symbol: 'ETCG', crypto: 'Ethereum Classic' },
    { cik: '0001748945', name: 'Grayscale Horizen Trust', symbol: 'HZEN', crypto: 'Horizen' },
    { cik: '0001729997', name: 'Grayscale Digital Large Cap Fund', symbol: 'GDLC', crypto: 'Multi-Crypto' },
    { cik: '0002029297', name: 'Grayscale Bittensor Trust', symbol: 'GTAO', crypto: 'Bittensor' },

    // ==================== MULTI-CRYPTO / INDEX ETFs ====================
    { cik: '0002031069', name: 'Hashdex Nasdaq Crypto Index US ETF', symbol: 'NCIQ', crypto: 'Multi-Crypto' },
    { cik: '0001579881', name: 'Calamos ETF Trust', symbol: 'CBTC', crypto: 'Multi-Crypto' },
    { cik: '0002033807', name: 'Franklin Crypto Trust', symbol: 'EZPZ', crypto: 'Multi-Crypto' },
    { cik: '0001976672', name: 'Grayscale Funds Trust', symbol: 'GFT', crypto: 'Multi-Crypto' },
    { cik: '0001985840', name: 'Tidal Commodities Trust I', symbol: 'DEFI', crypto: 'Multi-Crypto' },
    { cik: '0001928561', name: 'Bitwise Funds Trust', symbol: 'BFTR', crypto: 'Multi-Crypto' },

    // ==================== MAJOR ETF TRUSTS ====================
    { cik: '0001924868', name: 'Tidal Trust II', symbol: 'TTII', crypto: 'Multi-Crypto' },
    { cik: '0001771146', name: 'ETF Opportunities Trust', symbol: 'ETFO', crypto: 'Multi-Crypto' },
    { cik: '0001722388', name: 'Tidal Trust III', symbol: 'TTIII', crypto: 'Multi-Crypto' },
    { cik: '0001432353', name: 'Global X Funds', symbol: 'GXF', crypto: 'Multi-Crypto' },
    { cik: '0001683471', name: 'Listed Funds Trust', symbol: 'LFT', crypto: 'Multi-Crypto' },
    { cik: '0001329377', name: 'First Trust Exchange-Traded Fund', symbol: 'FTEF', crypto: 'Multi-Crypto' },
    { cik: '0001350487', name: 'WisdomTree Trust', symbol: 'WTT', crypto: 'Multi-Crypto' },
    { cik: '0001355064', name: 'Mutual Fund Series Trust', symbol: 'MFST', crypto: 'Multi-Crypto' },
    { cik: '0001424958', name: 'Direxion Shares ETF Trust', symbol: 'DSET', crypto: 'Multi-Crypto' },
    { cik: '0001592900', name: 'EA Series Trust', symbol: 'EAST', crypto: 'Multi-Crypto' },
    { cik: '0001959372', name: 'Aristotle Funds Series Trust', symbol: 'AFST', crypto: 'Multi-Crypto' },
    { cik: '0001579982', name: 'ARK ETF Trust', symbol: 'ARKT', crypto: 'Multi-Crypto' },

    // ==================== ADDITIONAL CRYPTO COMPANIES ====================
    { cik: '0001859392', name: 'Galaxy Digital Inc', symbol: 'GLXY', crypto: 'Multi-Crypto' },
    { cik: '0000880631', name: 'WisdomTree Inc', symbol: 'WT', crypto: 'Multi-Crypto' },
];

const MULTI_CRYPTO_CONSTITUENTS = {
    'Grayscale Digital Large Cap Fund': '包含: BTC, ETH, SOL, XRP, ADA, AVAX',
    'Hashdex Nasdaq Crypto Index': '包含: BTC, ETH, LTC, BCH, SOL, ADA, LINK, DOT',
    'Bitwise 10 Crypto Index': '包含: BTC, ETH, SOL, ADA, DOT, AVAX, LINK, LTC, UNI, XLM',
    'Bitwise Funds Trust': '包含: BTC, ETH, SOL, ADA, DOT, AVAX, LINK, LTC',
    'Franklin Crypto Trust': '包含: BTC, ETH',
    'Grayscale Smart Contract Platform': '包含: SOL, ADA, AVAX, DOT, MATIC, ALGO, XLM',
    'Grayscale Funds Trust': '包含: 多币种组合 (BTC, ETH 等)',
    'Global X Funds': '包含: 比特币与以太坊策略组合',
    'Hashdex': '包含: Nasdaq Crypto Index 指数成分币',
    'Tidal Commodities Trust I': '包含: BTC, ETH 策略组合',
    '21Shares': '包含: 多币种加密资产组合',
    'WisdomTree': '包含: 多币种分散配置',
    'Multi-Crypto': '包含: 多种加密货币组合'
};

// Helper for rate limited fetching
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRateLimit(items, processingFn, concurrency = 3, interval = 350) {
    const results = [];
    const queue = [...items];
    const workers = [];

    for (let i = 0; i < concurrency; i++) {
        workers.push((async () => {
            while (queue.length > 0) {
                const item = queue.shift();
                try {
                    const result = await processingFn(item);
                    results.push(result);
                } catch (err) {
                    console.error('Processing error:', err.message);
                }
                await delay(interval);
            }
        })());
    }

    await Promise.all(workers);
    return results;
}

/**
 * Fetch company submissions from SEC EDGAR
 */
async function fetchCompanyFilings(cik) {
    const url = `https://data.sec.gov/submissions/CIK${cik}.json`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': SEC_USER_AGENT,
                'Accept': 'application/json'
            }
        });

        if (response.status === 403 || response.status === 429) {
            console.warn(`Rate limit hit for CIK ${cik} (${response.status}), waiting...`);
            await delay(2000); // Wait longer on block
            return null; // Skip for now or implement retry
        }

        if (!response.ok) {
            console.error(`Failed to fetch CIK ${cik}: ${response.status}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(`Error fetching CIK ${cik}:`, error.message);
        return null; // Return null to handle gracefully
    }
}

/**
 * Search SEC EDGAR full-text for crypto ETF filings
 */
async function searchSECFilings(query = 'cryptocurrency ETF', dateFrom = '2024-01-01') {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://efts.sec.gov/LATEST/search-index?q=${encodedQuery}&dateRange=custom&startdt=${dateFrom}&enddt=${new Date().toISOString().split('T')[0]}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': SEC_USER_AGENT,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            console.error(`Search failed: ${response.status}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error searching SEC:', error.message);
        return null;
    }
}

/**
 * Determine ETF status based on filing history
 */
function determineStatus(filings, formTypes = []) {
    if (!filings || !filings.recent) return 'pending';

    const recentForms = filings.recent.form || [];

    // 1. Check for active trading indicators (10-Q, 10-K, or 8-K filings with significant assets)
    const hasQuarterlyReports = recentForms.some(f => f === '10-Q' || f === '10-K');

    // SEC effectively approved filings often show '424B2' or '424B3' (prospectus) 
    // or 'Form 8-K' announcing commencement of trading.
    const hasProspectus = recentForms.some(f => f.startsWith('424B'));

    // Check if definitely approved
    if (hasQuarterlyReports) return 'approved';

    // Many crypto trusts are 'approved' (trading) but are technically private trusts 
    // that report like public companies. If they have S-1/A followed by 424B, they are active.
    if (hasProspectus && recentForms.some(f => f.startsWith('S-1'))) return 'approved';

    // 2. Check for Denials (usually via a public order or withdrawal)
    const hasWithdrawal = recentForms.some(f => f === 'RW');
    if (hasWithdrawal) return 'denied';

    // 3. Status is Pending if there are recent S-1, 19b-4 or amendments
    const isActivePending = recentForms.some(f =>
        f.startsWith('S-1') ||
        f.startsWith('19b-4') ||
        f.startsWith('485') ||
        f.startsWith('N-1A') ||
        f.startsWith('DRS')
    );

    if (isActivePending) return 'pending';

    return 'pending';
}

/**
 * Process and normalize ETF data
 */
function processETFData(companyData, issuerInfo) {
    if (!companyData) {
        return {
            id: issuerInfo.cik,
            cryptocurrency: issuerInfo.crypto,
            symbol: issuerInfo.symbol,
            issuer: extractIssuerName(issuerInfo.name),
            etfName: issuerInfo.name,
            filingType: 'Unknown',
            filingDate: 'N/A',
            decisionDeadline: 'N/A',
            status: 'unknown',
            approvalOdds: 0,
            notes: '无法获取SEC数据',
            source: 'SEC EDGAR',
            cik: issuerInfo.cik,
            secLink: `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${issuerInfo.cik}&type=&dateb=&owner=include&count=40`
        };
    }

    const filings = companyData.filings;
    const status = determineStatus(filings, []);

    // Get latest filing info
    const latestFilingDate = filings?.recent?.filingDate?.[0] || 'N/A';
    const latestForm = filings?.recent?.form?.[0] || 'Unknown';

    // Construct direct link to the latest filing document
    let latestFilingLink = `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${issuerInfo.cik}&type=&dateb=&owner=include&count=40`;

    if (filings?.recent?.accessionNumber?.[0] && filings?.recent?.primaryDocument?.[0]) {
        const accessionNumber = filings.recent.accessionNumber[0].replace(/-/g, '');
        const primaryDocument = filings.recent.primaryDocument[0];
        latestFilingLink = `https://www.sec.gov/Archives/edgar/data/${parseInt(issuerInfo.cik)}/${accessionNumber}/${primaryDocument}`;
    }

    // Calculate approval odds based on status and filing activity
    let approvalOdds = 50;
    if (status === 'approved') approvalOdds = 100;
    else if (latestForm === 'S-1/A') approvalOdds = 75;
    else if (latestForm === 'S-1') approvalOdds = 60;

    return {
        id: issuerInfo.cik,
        cryptocurrency: issuerInfo.crypto,
        symbol: issuerInfo.symbol,
        issuer: extractIssuerName(companyData.name || issuerInfo.name),
        etfName: companyData.name || issuerInfo.name,
        filingType: latestForm.startsWith('S-1') ? 'Spot ETF' :
            latestForm.startsWith('10') ? 'Active ETF' : latestForm,
        filingDate: latestFilingDate,
        decisionDeadline: calculateDeadline(latestFilingDate, status),
        status: status,
        approvalOdds: approvalOdds,
        notes: generateNotes(status, latestForm, companyData.name || issuerInfo.name, issuerInfo.crypto),
        source: 'SEC EDGAR',
        cik: issuerInfo.cik,
        secLink: `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${issuerInfo.cik}&type=&dateb=&owner=include&count=40`,
        latestFilingLink: latestFilingLink
    };
}

/**
 * Extract issuer name from full ETF name
 */
function extractIssuerName(fullName) {
    if (!fullName) return 'Unknown';

    const patterns = [
        /^(iShares)/i,
        /^(Grayscale)/i,
        /^(VanEck)/i,
        /^(Fidelity)/i,
        /^(ARK [0-9]+Shares|ARK)/i,
        /^(Hashdex)/i,
        /^(Franklin)/i,
        /^(Calamos)/i,
        /^(Volatility Shares)/i,
        /^(ProShares)/i,
        /^(Bitwise)/i,
        /^(21Shares)/i,
        /^(WisdomTree)/i,
        /^(CoinShares)/i,
        /^(Canary)/i,
    ];

    for (const pattern of patterns) {
        const match = fullName.match(pattern);
        if (match) return match[1];
    }

    return fullName.split(' ')[0];
}

/**
 * Calculate estimated decision deadline and status description
 */
function calculateDeadline(filingDate, status) {
    if (status === 'approved') return '已通过 (交易中)';
    return '待通过';
}

/**
 * Generate notes based on filing status
 */
function generateNotes(status, latestForm, name, cryptoType) {
    // For Multi-Crypto, only return constituents
    if (cryptoType === 'Multi-Crypto') {
        for (const [key, value] of Object.entries(MULTI_CRYPTO_CONSTITUENTS)) {
            if (name.includes(key)) {
                return value;
            }
        }
        return MULTI_CRYPTO_CONSTITUENTS['Multi-Crypto'] || '多币种组合';
    }

    // For single-crypto ETFs, return status-based note
    if (status === 'approved') {
        return '已获SEC批准并开始交易';
    } else if (latestForm === 'S-1/A') {
        return 'S-1修订文件已提交';
    } else if (latestForm === 'S-1') {
        return '注册声明已提交';
    } else if (latestForm === 'DRS' || latestForm === 'DRS/A') {
        return '保密注册声明已提交';
    }

    return '审批进行中';
}

/**
 * API Endpoint: Get all ETF applications
 */
app.get('/api/etf-applications', async (req, res) => {
    console.log('Fetching ETF applications from SEC EDGAR...');

    const applications = [];
    const fetchPromises = CRYPTO_ETF_ISSUERS.map(async (issuer) => {
        const data = await fetchCompanyFilings(issuer.cik);
        return processETFData(data, issuer);
    });

    try {
        const results = await Promise.all(fetchPromises);

        // Sort by status: pending first, then approved
        results.sort((a, b) => {
            const statusOrder = { pending: 0, delayed: 1, approved: 2, unknown: 3 };
            return (statusOrder[a.status] || 3) - (statusOrder[b.status] || 3);
        });

        res.json({
            success: true,
            timestamp: new Date().toISOString(),
            count: results.length,
            source: 'SEC EDGAR (data.sec.gov)',
            data: results
        });
    } catch (error) {
        console.error('Error fetching ETF data:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * API Endpoint: Search SEC filings
 */
app.get('/api/search', async (req, res) => {
    const { q = 'bitcoin ETF', from = '2024-01-01' } = req.query;

    try {
        const results = await searchSECFilings(q, from);
        res.json({
            success: true,
            query: q,
            results: results
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * API Endpoint: Get specific company filings
 */
app.get('/api/company/:cik', async (req, res) => {
    const { cik } = req.params;

    try {
        const data = await fetchCompanyFilings(cik.padStart(10, '0'));
        if (data) {
            res.json({
                success: true,
                data: data
            });
        } else {
            res.status(404).json({
                success: false,
                error: 'Company not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

/**
 * API Endpoint: Discover new crypto ETF issuers from SEC search
 */
// --- Global Cache & State ---
let globalETFData = {
    known: [],
    discovered: [],
    timestamp: null
};

let syncStatus = {
    isSyncing: false,
    totalToProcess: 0,
    processedCount: 0,
    currentAction: 'Idle',
    lastUpdated: null
};

// --- Background Sync Logic ---

async function startBackgroundSync() {
    if (syncStatus.isSyncing) return;
    syncStatus.isSyncing = true;
    syncStatus.currentAction = 'Starting comprehensive sync...';
    console.log('🔄 Starting comprehensive background sync...');

    try {
        // 1. Fetch Known Issuers
        syncStatus.currentAction = 'Updating known products...';
        syncStatus.processedCount = 0;

        const knownResults = await fetchWithRateLimit(
            CRYPTO_ETF_ISSUERS,
            async (issuer) => {
                const data = await fetchCompanyFilings(issuer.cik);
                syncStatus.processedCount++;
                return processETFData(data, issuer);
            },
            5, 150
        );

        globalETFData.known = knownResults;

        // 2. Discover New Issuers via Multiple Search Queries
        syncStatus.currentAction = 'Deep scanning SEC for crypto filings...';
        const searchTerms = [
            'cryptocurrency ETF spot 19b-4',
            'bitcoin ethereum solana xrp spot ETF S-1',
            'Digital Asset Trust S-1',
            'Bitcoin Strategy ETF 485',
            'Crypto Index ETF N-1A'
        ];

        const discoveredIssuersMap = new Map();
        const knownCIKs = new Set(CRYPTO_ETF_ISSUERS.map(i => i.cik));

        for (const term of searchTerms) {
            syncStatus.currentAction = `Searching: ${term}...`;
            const searchResults = await searchSECFilings(term, '2023-01-01');

            if (searchResults && searchResults.aggregations && searchResults.aggregations.entity_filter) {
                for (const bucket of searchResults.aggregations.entity_filter.buckets) {
                    const match = bucket.key.match(/CIK\s*(\d+)/i);
                    if (match) {
                        const cik = match[1].padStart(10, '0');
                        if (!knownCIKs.has(cik) && !discoveredIssuersMap.has(cik)) {
                            const nameMatch = bucket.key.match(/^(.+?)\s*\(.*CIK/);
                            const name = nameMatch ? nameMatch[1].trim() : bucket.key.split('(')[0].trim();

                            // Estimate crypto type from name
                            let cryptoType = 'Multi-Crypto';
                            const lowerName = name.toLowerCase();
                            if (lowerName.includes('bitcoin')) cryptoType = 'Bitcoin';
                            else if (lowerName.includes('ethereum')) cryptoType = 'Ethereum';
                            else if (lowerName.includes('solana')) cryptoType = 'Solana';
                            else if (lowerName.includes('xrp')) cryptoType = 'XRP';
                            else if (lowerName.includes('avalanche')) cryptoType = 'Avalanche';
                            else if (lowerName.includes('cardano')) cryptoType = 'Cardano';
                            else if (lowerName.includes('litecoin')) cryptoType = 'Litecoin';
                            else if (lowerName.includes('dogecoin')) cryptoType = 'Dogecoin';
                            else if (lowerName.includes('polkadot')) cryptoType = 'Polkadot';
                            else if (lowerName.includes('chainlink')) cryptoType = 'Chainlink';
                            else if (lowerName.includes('stellar')) cryptoType = 'Stellar';
                            else if (lowerName.includes('bitcoin cash')) cryptoType = 'Bitcoin Cash';
                            else if (lowerName.includes('hedera')) cryptoType = 'Hedera';
                            else if (lowerName.includes('near')) cryptoType = 'Near Protocol';
                            else if (lowerName.includes('uniswap')) cryptoType = 'Uniswap';
                            else if (lowerName.includes('tron')) cryptoType = 'Tron';
                            else if (lowerName.includes('aave')) cryptoType = 'Aave';

                            discoveredIssuersMap.set(cik, {
                                cik,
                                name,
                                symbol: name.substring(0, 4).toUpperCase(),
                                crypto: cryptoType
                            });
                        }
                    }
                }
            }
            await delay(500); // Respect SEC search endpoint
        }

        const additionalIssuers = Array.from(discoveredIssuersMap.values());

        // 3. Fetch Discovered Issuers
        syncStatus.currentAction = `Processing ${additionalIssuers.length} newly discovered candidates...`;
        syncStatus.totalToProcess = CRYPTO_ETF_ISSUERS.length + additionalIssuers.length;

        const additionalResults = await fetchWithRateLimit(
            additionalIssuers,
            async (issuer) => {
                const data = await fetchCompanyFilings(issuer.cik);
                syncStatus.processedCount++;
                return processETFData(data, issuer);
            },
            5, 200
        );

        globalETFData.discovered = additionalResults;
        globalETFData.timestamp = new Date().toISOString();

        syncStatus.currentAction = 'Sync complete';
        syncStatus.isSyncing = false;
        syncStatus.lastUpdated = new Date().toISOString();
        console.log(`✅ Deep sync complete. Total Found: ${knownResults.length + additionalResults.length} (Known: ${knownResults.length}, Discovered: ${additionalResults.length})`);

    } catch (error) {
        console.error('❌ Background sync failed:', error);
        syncStatus.currentAction = 'Error: ' + error.message;
        syncStatus.isSyncing = false;
    }
}

// Start sync on server start
setTimeout(startBackgroundSync, 1000);

// Schedule regular updates (every 10 minutes)
setInterval(startBackgroundSync, 600000);


/**
 * API Endpoint: Get sync progress
 */
app.get('/api/sync-progress', (req, res) => {
    res.json(syncStatus);
});

/**
 * API Endpoint: Get combined data (served from cache)
 */
app.get('/api/all-etf-applications', async (req, res) => {
    // If cache is empty and not syncing, trigger sync
    if (!globalETFData.timestamp && !syncStatus.isSyncing) {
        startBackgroundSync();
    }

    const allResults = [...globalETFData.known, ...globalETFData.discovered]
        .filter(r => r && r.status !== 'unknown')
        .sort((a, b) => {
            const dateA = new Date(a.filingDate || '1970-01-01');
            const dateB = new Date(b.filingDate || '1970-01-01');
            return dateB - dateA;
        });

    res.json({
        success: true,
        timestamp: globalETFData.timestamp || new Date().toISOString(),
        count: allResults.length,
        knownCount: globalETFData.known.filter(r => r && r.status !== 'unknown').length,
        discoveredCount: globalETFData.discovered.filter(r => r && r.status !== 'unknown').length,
        source: 'SEC EDGAR (Cached)',
        status: syncStatus,
        data: allResults
    });
});


/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        source: 'SEC EDGAR API'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║  SEC Crypto ETF Tracker Server                             ║
║  ──────────────────────────────────────────────────────── ║
║  🌐 Server running at: http://localhost:${PORT}              ║
║  📊 API endpoint: http://localhost:${PORT}/api/etf-applications║
║  🔍 Data source: SEC EDGAR (data.sec.gov)                  ║
╚════════════════════════════════════════════════════════════╝
    `);
});
