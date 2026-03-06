# 🚀 Crypto ETF Tracker

<p align="center">
  <img src="assets/logo.png" alt="Crypto ETF Tracker Logo" width="120">
</p>

<p align="center">
  <strong>Real-time SEC Crypto ETF Application Tracker</strong><br>
  <a href="https://crypto-etf-tracker.vercel.app">🌐 Live Site</a> · <a href="https://x.com/rexliu">@rexliu</a>
</p>

Track every crypto ETF filing in real time — directly from the SEC EDGAR database. Covers **Bitcoin, Ethereum, Solana, XRP, Dogecoin, Litecoin, Cardano**, and **Multi-Crypto** applications.

## ✨ Features

- **⚡️ Real-Time SEC Sync** — Background engine pulls EDGAR data every hour via GitHub Actions. Smart caching for <100ms responses.
- **🔍 Deep Multi-Crypto Search** — Search "BTC" to find all composite ETFs containing Bitcoin. Smart dropdown filters by asset class.
- **🧠 Smart Status Tracking** — Approved (with today's highlights), Pending, Delayed. Shows expense ratios and ticker symbols.
- **🌍 Bilingual** — One-click English ↔ 中文 toggle. Full localization including SEC filing links.
- **🌙 Dark Mode** — System preference detection + manual toggle. Persisted via localStorage.
- **📱 Mobile Responsive** — Tablet 2×2 grid, mobile single-column with scroll-snap timeline.

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Vanilla HTML5/CSS3/JS (ES6+) |
| Data | SEC EDGAR API (`data.sec.gov`, `efts.sec.gov`) |
| Automation | GitHub Actions (hourly sync) |
| Hosting | Vercel (auto-redeploy on data commit) |

## 🚀 Quick Start

```bash
npm install
npm run update-data    # Fetch latest from SEC → data/etf-data.json
npx http-server .      # Visit http://localhost:8080
```

## 🌐 Deploy

Optimized for **Vercel** — import repo, set output directory to `.`, done. GitHub Actions handles hourly data updates and auto-triggers redeploy.

## ⚠️ Disclaimer

Data sourced directly from SEC EDGAR public filings. Approval odds are estimates based on market consensus and Bloomberg Intelligence analysis — not official SEC positions. For informational purposes only, not investment advice.

---

Built by [Rex Liu](https://rexliu.io) · *Stay Invested in the Game* 🐍
