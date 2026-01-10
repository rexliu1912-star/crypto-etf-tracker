/**
 * SEC Data Fetcher Script
 * Runs via GitHub Actions to generate static data.json
 * 
 * COMPREHENSIVE CRYPTO ETF ISSUER LIST - January 2026
 * All CIKs verified via SEC EDGAR
 */

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// --- Configuration ---
const DATA_DIR = path.join(__dirname, '../data');
const DATA_FILE = path.join(DATA_DIR, 'etf-data.json');
const SEC_USER_AGENT = 'SEC-ETF-Tracker/1.0 (Contact: admin@example.com)';

// --- COMPREHENSIVE CRYPTO ETF ISSUERS (All CIKs Verified January 2026) ---
const CRYPTO_ETF_ISSUERS = [
    // ==================== BLACKROCK / iSHARES ====================
    { cik: '0001980994', name: 'iShares Bitcoin Trust ETF', symbol: 'IBIT', crypto: 'Bitcoin' },
    { cik: '0002000638', name: 'iShares Ethereum Trust ETF', symbol: 'ETHA', crypto: 'Ethereum' },

    // ==================== GRAYSCALE ====================
    { cik: '0001588489', name: 'Grayscale Bitcoin Trust', symbol: 'GBTC', crypto: 'Bitcoin' },
    { cik: '0002015034', name: 'Grayscale Bitcoin Mini Trust ETF', symbol: 'BTC', crypto: 'Bitcoin' },
    { cik: '0001725210', name: 'Grayscale Ethereum Trust', symbol: 'ETHE', crypto: 'Ethereum' },
    { cik: '0002020455', name: 'Grayscale Ethereum Mini Trust ETF', symbol: 'ETH', crypto: 'Ethereum' },
    { cik: '0001896677', name: 'Grayscale Solana Trust', symbol: 'GSOL', crypto: 'Solana' },
    { cik: '0001833502', name: 'Grayscale XRP Trust', symbol: 'GXRP', crypto: 'XRP' },
    { cik: '0001732406', name: 'Grayscale Litecoin Trust', symbol: 'LTCN', crypto: 'Litecoin' },
    { cik: '0002055510', name: 'Grayscale Dogecoin Trust', symbol: 'GDOG', crypto: 'Dogecoin' },
    { cik: '0002035053', name: 'Grayscale Avalanche Trust', symbol: 'AVAX', crypto: 'Avalanche' },
    { cik: '0001852025', name: 'Grayscale Chainlink Trust', symbol: 'GLNK', crypto: 'Chainlink' },
    { cik: '0001761325', name: 'Grayscale Stellar Lumens Trust', symbol: 'GXLM', crypto: 'Stellar' },
    { cik: '0001732409', name: 'Grayscale Bitcoin Cash Trust', symbol: 'BCHG', crypto: 'Bitcoin Cash' },
    { cik: '0001705181', name: 'Grayscale Ethereum Classic Trust', symbol: 'ETCG', crypto: 'Ethereum Classic' },
    { cik: '0001748945', name: 'Grayscale Horizen Trust', symbol: 'HZEN', crypto: 'Horizen' },
    { cik: '0001729997', name: 'Grayscale Digital Large Cap Fund', symbol: 'GDLC', crypto: 'Multi-Crypto' },
    { cik: '0002029297', name: 'Grayscale Bittensor Trust', symbol: 'GTAO', crypto: 'Bittensor' },
    { cik: '0001720265', name: 'Grayscale Zcash Trust', symbol: 'ZCSH', crypto: 'Zcash' },
    { cik: '0001976672', name: 'Grayscale Funds Trust', symbol: 'GFT', crypto: 'Multi-Crypto' },

    // ==================== FIDELITY ====================
    { cik: '0001852317', name: 'Fidelity Wise Origin Bitcoin Fund', symbol: 'FBTC', crypto: 'Bitcoin' },
    { cik: '0002003125', name: 'Fidelity Ethereum Fund', symbol: 'FETH', crypto: 'Ethereum' },

    // ==================== VANECK ====================
    { cik: '0001838028', name: 'VanEck Bitcoin Trust', symbol: 'HODL', crypto: 'Bitcoin' },
    { cik: '0001852063', name: 'VanEck Ethereum Trust', symbol: 'ETHV', crypto: 'Ethereum' },
    { cik: '0002028541', name: 'VanEck Solana ETF', symbol: 'VSOL', crypto: 'Solana' },
    { cik: '0002060717', name: 'VanEck Avalanche ETF', symbol: 'VAVAX', crypto: 'Avalanche' },

    // ==================== BITWISE ====================
    { cik: '0001763415', name: 'Bitwise Bitcoin ETF', symbol: 'BITB', crypto: 'Bitcoin' },
    { cik: '0002013744', name: 'Bitwise Ethereum ETF', symbol: 'ETHW', crypto: 'Ethereum' },
    { cik: '0001723788', name: 'Bitwise 10 Crypto Index ETF', symbol: 'BITW', crypto: 'Multi-Crypto' },
    { cik: '0001928561', name: 'Bitwise Funds Trust', symbol: 'BFTR', crypto: 'Multi-Crypto' },

    // ==================== ARK 21SHARES ====================
    { cik: '0001869699', name: 'ARK 21Shares Bitcoin ETF', symbol: 'ARKB', crypto: 'Bitcoin' },
    { cik: '0001992508', name: '21Shares Core Ethereum ETF', symbol: 'CETH', crypto: 'Ethereum' },
    { cik: '0002064314', name: '21Shares Dogecoin ETF', symbol: 'DOGE', crypto: 'Dogecoin' },
    { cik: '0002028834', name: '21Shares Solana ETF', symbol: 'SOLS', crypto: 'Solana' },
    { cik: '0002028835', name: '21Shares XRP ETF', symbol: 'XXRP', crypto: 'XRP' },

    // ==================== INVESCO / GALAXY ====================
    { cik: '0001855781', name: 'Invesco Galaxy Bitcoin ETF', symbol: 'BTCO', crypto: 'Bitcoin' },
    { cik: '0001995569', name: 'Invesco Galaxy Ethereum ETF', symbol: 'QETH', crypto: 'Ethereum' },

    // ==================== FRANKLIN TEMPLETON ====================
    { cik: '0001992870', name: 'Franklin Bitcoin ETF', symbol: 'EZBC', crypto: 'Bitcoin' },
    { cik: '0002011535', name: 'Franklin Ethereum ETF', symbol: 'EZET', crypto: 'Ethereum' },
    { cik: '0002057388', name: 'Franklin Solana ETF', symbol: 'SOEZ', crypto: 'Solana' },
    { cik: '0002059438', name: 'Franklin XRP ETF', symbol: 'XRPZ', crypto: 'XRP' },
    { cik: '0002033807', name: 'Franklin Crypto Trust', symbol: 'EZPZ', crypto: 'Multi-Crypto' },

    // ==================== WISDOMTREE ====================
    { cik: '0001850391', name: 'WisdomTree Bitcoin Fund', symbol: 'BTCW', crypto: 'Bitcoin' },
    { cik: '0001350487', name: 'WisdomTree Trust', symbol: 'WTT', crypto: 'Multi-Crypto' },
    { cik: '0000880631', name: 'WisdomTree Inc', symbol: 'WT', crypto: 'Multi-Crypto' },

    // ==================== PROSHARES ====================
    // ProShares Trust - Contains 12 crypto products (BITO, BITI, BITU, SBIT, EETH, SETH, ETHT, ETHD, BETE, BETH, SLON, UXRP)
    { cik: '0001174610', name: 'ProShares Trust', symbol: 'BITO', crypto: 'Multi-Crypto' },

    // ==================== HASHDEX ====================
    { cik: '0002031069', name: 'Hashdex Nasdaq Crypto Index US ETF', symbol: 'NCIQ', crypto: 'Multi-Crypto' },

    // ==================== CANARY CAPITAL ====================
    { cik: '0002039505', name: 'Canary XRP ETF', symbol: 'XRPC', crypto: 'XRP' },
    { cik: '0002039461', name: 'Canary Litecoin ETF', symbol: 'LTCC', crypto: 'Litecoin' },
    { cik: '0002039459', name: 'Canary HBAR Trust', symbol: 'HBAR', crypto: 'Hedera' },
    { cik: '0002041869', name: 'Canary Marinade Solana ETF', symbol: 'SOLS', crypto: 'Solana' },
    { cik: '0002083119', name: 'Canary American-Made Crypto ETF', symbol: 'MRCA', crypto: 'Multi-Crypto' },

    // ==================== VOLATILITY SHARES ====================
    { cik: '0001884021', name: 'Volatility Shares Trust', symbol: 'BITX', crypto: 'Bitcoin' },

    // ==================== MORGAN STANLEY ====================
    { cik: '0002103612', name: 'Morgan Stanley Bitcoin Trust', symbol: 'MSBTC', crypto: 'Bitcoin' },

    // ==================== COINSHARES ====================
    { cik: '0002048583', name: 'CoinShares XRP ETF', symbol: 'CSXR', crypto: 'XRP' },

    // ==================== OSPREY ====================
    { cik: '0001767057', name: 'Osprey Bitcoin Trust', symbol: 'OBTC', crypto: 'Bitcoin' },

    // ==================== MAJOR ETF TRUSTS ====================
    { cik: '0001579881', name: 'Calamos ETF Trust', symbol: 'CBTC', crypto: 'Multi-Crypto' },
    { cik: '0001985840', name: 'Tidal Commodities Trust I', symbol: 'DEFI', crypto: 'Multi-Crypto' },
    { cik: '0001924868', name: 'Tidal Trust II', symbol: 'TTII', crypto: 'Multi-Crypto' },
    { cik: '0001771146', name: 'ETF Opportunities Trust', symbol: 'ETFO', crypto: 'Multi-Crypto' },
    { cik: '0001722388', name: 'Tidal Trust III', symbol: 'TTIII', crypto: 'Multi-Crypto' },
    { cik: '0001432353', name: 'Global X Funds', symbol: 'GXF', crypto: 'Multi-Crypto' },
    { cik: '0001683471', name: 'Listed Funds Trust', symbol: 'LFT', crypto: 'Multi-Crypto' },
    { cik: '0001329377', name: 'First Trust Exchange-Traded Fund', symbol: 'FTEF', crypto: 'Multi-Crypto' },
    { cik: '0001355064', name: 'Mutual Fund Series Trust', symbol: 'MFST', crypto: 'Multi-Crypto' },
    { cik: '0001424958', name: 'Direxion Shares ETF Trust', symbol: 'DSET', crypto: 'Multi-Crypto' },
    { cik: '0001592900', name: 'EA Series Trust', symbol: 'EAST', crypto: 'Multi-Crypto' },
    { cik: '0001959372', name: 'Aristotle Funds Series Trust', symbol: 'AFST', crypto: 'Multi-Crypto' },
    { cik: '0001579982', name: 'ARK ETF Trust', symbol: 'ARKT', crypto: 'Multi-Crypto' },
    { cik: '0001859392', name: 'Galaxy Digital Inc', symbol: 'GLXY', crypto: 'Multi-Crypto' },
];

const MULTI_CRYPTO_CONSTITUENTS = {
    'Grayscale Digital Large Cap Fund': '包含: BTC, ETH, SOL, XRP, ADA, AVAX',
    'Hashdex Nasdaq Crypto Index': '包含: BTC, ETH, SOL, XRP, XLM',
    'Bitwise 10 Crypto Index': '包含: BTC, ETH, SOL, ADA, DOT, AVAX, LINK, LTC, UNI, XLM',
    'Bitwise Funds Trust': '包含: BTC, ETH, SOL, ADA, DOT, AVAX, LINK, LTC',
    'Franklin Crypto Trust': '包含: BTC, ETH',
    'ProShares Trust': '包含: BITO, BITI, BITU, SBIT, EETH, SETH, ETHT, ETHD, BETE, BETH, SLON, UXRP',
    'Grayscale Funds Trust': '包含: 多币种组合 (BTC, ETH 等)',
    'Global X Funds': '包含: 比特币与以太坊策略组合',
    'Tidal Commodities Trust I': '包含: BTC, ETH 策略组合',
    '21Shares': '包含: 多币种加密资产组合',
    'WisdomTree': '包含: 多币种分散配置',
    'Canary American-Made Crypto ETF': '包含: 美国创建/挖矿的加密货币',
    'Multi-Crypto': '包含: 多种加密货币组合'
};

// --- Helpers ---
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

// --- SEC Fetching Logic ---
async function fetchCompanyFilings(cik) {
    const url = `https://data.sec.gov/submissions/CIK${cik}.json`;
    console.log(`Fetching CIK ${cik}...`);

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': SEC_USER_AGENT,
                'Accept': 'application/json'
            }
        });

        if (response.status === 403 || response.status === 429) {
            console.warn(`Rate limit for CIK ${cik}, waiting...`);
            await delay(5000);
            return null;
        }

        if (!response.ok) {
            console.error(`Failed CIK ${cik}: ${response.status}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(`Error CIK ${cik}:`, error.message);
        return null;
    }
}

async function searchSECFilings(query = 'cryptocurrency ETF', dateFrom = '2024-01-01') {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://efts.sec.gov/LATEST/search-index?q=${encodedQuery}&dateRange=custom&startdt=${dateFrom}&enddt=${new Date().toISOString().split('T')[0]}`;

    try {
        const response = await fetch(url, {
            headers: { 'User-Agent': SEC_USER_AGENT, 'Accept': 'application/json' }
        });
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        return null;
    }
}

function determineStatus(filings) {
    if (!filings || !filings.recent) return 'pending';
    const recentForms = filings.recent.form || [];

    if (recentForms.some(f => f === '10-Q' || f === '10-K')) return 'approved';
    if (recentForms.some(f => f.startsWith('424B')) && recentForms.some(f => f.startsWith('S-1'))) return 'approved';
    if (recentForms.some(f => f === 'RW')) return 'denied';

    return 'pending';
}

function generateNotes(status, latestForm, name, cryptoType) {
    if (cryptoType === 'Multi-Crypto') {
        for (const [key, value] of Object.entries(MULTI_CRYPTO_CONSTITUENTS)) {
            if (name.includes(key)) return value;
        }
        return MULTI_CRYPTO_CONSTITUENTS['Multi-Crypto'];
    }
    if (status === 'approved') return '已获SEC批准并开始交易';
    if (latestForm === 'S-1/A') return 'S-1修订文件已提交';
    if (latestForm === 'S-1') return '注册声明已提交';
    return '审批进行中';
}

function extractIssuerName(fullName) {
    if (!fullName) return 'Unknown';
    const patterns = [
        /^(iShares)/i, /^(Grayscale)/i, /^(VanEck)/i, /^(Fidelity)/i,
        /^(ARK)/i, /^(Hashdex)/i, /^(Franklin)/i, /^(Calamos)/i,
        /^(Volatility Shares)/i, /^(ProShares)/i, /^(Bitwise)/i,
        /^(21Shares)/i, /^(WisdomTree)/i, /^(CoinShares)/i, /^(Canary)/i,
        /^(Invesco)/i, /^(Morgan Stanley)/i, /^(Osprey)/i,
    ];
    for (const pattern of patterns) {
        const match = fullName.match(pattern);
        if (match) return match[1];
    }
    return fullName.split(' ')[0];
}

function processETFData(companyData, issuerInfo) {
    if (!companyData) {
        return {
            id: issuerInfo.cik, cryptocurrency: issuerInfo.crypto, symbol: issuerInfo.symbol,
            issuer: extractIssuerName(issuerInfo.name), etfName: issuerInfo.name,
            filingType: 'Unknown', filingDate: 'N/A', decisionDeadline: 'N/A',
            status: 'unknown', approvalOdds: 0, notes: '无法获取SEC数据',
            source: 'SEC EDGAR', cik: issuerInfo.cik,
            secLink: `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${issuerInfo.cik}`
        };
    }

    const filings = companyData.filings;
    const status = determineStatus(filings);
    const latestFilingDate = filings?.recent?.filingDate?.[0] || 'N/A';
    const latestForm = filings?.recent?.form?.[0] || 'Unknown';

    let latestFilingLink = `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${issuerInfo.cik}`;
    if (filings?.recent?.accessionNumber?.[0] && filings?.recent?.primaryDocument?.[0]) {
        const accNum = filings.recent.accessionNumber[0].replace(/-/g, '');
        latestFilingLink = `https://www.sec.gov/Archives/edgar/data/${parseInt(issuerInfo.cik)}/${accNum}/${filings.recent.primaryDocument[0]}`;
    }

    let approvalOdds = 50;
    if (status === 'approved') approvalOdds = 100;
    else if (latestForm === 'S-1/A') approvalOdds = 75;
    else if (latestForm === 'S-1') approvalOdds = 60;

    return {
        id: issuerInfo.cik, cryptocurrency: issuerInfo.crypto, symbol: issuerInfo.symbol,
        issuer: extractIssuerName(companyData.name || issuerInfo.name),
        etfName: companyData.name || issuerInfo.name,
        filingType: latestForm.startsWith('S-1') ? 'Spot ETF' : latestForm.startsWith('10') ? 'Active ETF' : latestForm,
        filingDate: latestFilingDate,
        decisionDeadline: status === 'approved' ? '已通过 (交易中)' : '待通过',
        status, approvalOdds,
        notes: generateNotes(status, latestForm, companyData.name || issuerInfo.name, issuerInfo.crypto),
        source: 'SEC EDGAR', cik: issuerInfo.cik,
        secLink: `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${issuerInfo.cik}`,
        latestFilingLink
    };
}

// --- Main Execution ---
async function main() {
    console.log('--- Starting Comprehensive ETF Data Update ---');
    console.log(`Processing ${CRYPTO_ETF_ISSUERS.length} known issuers...`);

    const knownResults = await fetchWithRateLimit(
        CRYPTO_ETF_ISSUERS,
        async (issuer) => {
            const data = await fetchCompanyFilings(issuer.cik);
            return processETFData(data, issuer);
        },
        5, 200
    );

    // Expanded discovery search
    console.log('Scanning for additional filings...');
    const searchTerms = [
        'cryptocurrency ETF spot 19b-4', 'bitcoin ethereum solana xrp spot ETF S-1',
        'Digital Asset Trust S-1', 'Bitcoin Strategy ETF', 'Crypto Index ETF',
        'Ethereum Trust S-1', 'Solana Trust', 'XRP Trust', 'Litecoin ETF', 'Dogecoin ETF'
    ];

    const discoveredIssuersMap = new Map();
    const knownCIKs = new Set(CRYPTO_ETF_ISSUERS.map(i => i.cik));

    for (const term of searchTerms) {
        const results = await searchSECFilings(term, '2023-01-01');
        if (results?.aggregations?.entity_filter?.buckets) {
            for (const bucket of results.aggregations.entity_filter.buckets) {
                const match = bucket.key.match(/CIK\s*(\d+)/i);
                if (match) {
                    const cik = match[1].padStart(10, '0');
                    if (!knownCIKs.has(cik) && !discoveredIssuersMap.has(cik)) {
                        const nameMatch = bucket.key.match(/^(.+?)\s*\(.*CIK/);
                        const name = nameMatch ? nameMatch[1].trim() : bucket.key.split('(')[0].trim();
                        let cryptoType = 'Multi-Crypto';
                        const lowerName = name.toLowerCase();
                        if (lowerName.includes('bitcoin')) cryptoType = 'Bitcoin';
                        else if (lowerName.includes('ethereum')) cryptoType = 'Ethereum';
                        else if (lowerName.includes('solana')) cryptoType = 'Solana';
                        else if (lowerName.includes('xrp')) cryptoType = 'XRP';
                        else if (lowerName.includes('litecoin')) cryptoType = 'Litecoin';
                        else if (lowerName.includes('dogecoin')) cryptoType = 'Dogecoin';
                        discoveredIssuersMap.set(cik, { cik, name, symbol: name.substring(0, 4).toUpperCase(), crypto: cryptoType });
                    }
                }
            }
        }
        await delay(500);
    }

    const additionalIssuers = Array.from(discoveredIssuersMap.values());
    console.log(`Discovered ${additionalIssuers.length} additional issuers.`);

    const additionalResults = await fetchWithRateLimit(
        additionalIssuers,
        async (issuer) => {
            const data = await fetchCompanyFilings(issuer.cik);
            return processETFData(data, issuer);
        },
        5, 250
    );

    const allResults = [...knownResults, ...additionalResults]
        .filter(r => r && r.status !== 'unknown')
        .sort((a, b) => new Date(b.filingDate || '1970-01-01') - new Date(a.filingDate || '1970-01-01'));

    const outputData = {
        success: true,
        timestamp: new Date().toISOString(),
        count: allResults.length,
        knownCount: knownResults.filter(r => r && r.status !== 'unknown').length,
        discoveredCount: additionalResults.filter(r => r && r.status !== 'unknown').length,
        source: 'SEC EDGAR (Comprehensive Update)',
        data: allResults
    };

    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(outputData, null, 2));
    console.log(`✅ Data written: ${outputData.count} total records`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
