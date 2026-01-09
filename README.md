# 🚀 SEC Crypto ETF Tracker (English)

[中文版本请见下方 (Chinese Version Below)](#-sec-crypto-etf-tracker-)

A modern, high-performance cryptocurrency ETF application tracking system integrated directly with the **SEC EDGAR database**, providing authoritative, real-time status updates on filings.

Supports tracking for **Bitcoin, Ethereum, Solana, XRP, Dogecoin, Litecoin, Cardano**, and **Multi-Crypto** ETF applications.

## ✨ Core Highlights

*   **⚡️ Real-Time SEC Data Sync**
    *   Built-in background sync engine pulls the latest data from the SEC every 5 minutes.
    *   Smart caching mechanism ensures API response speeds < 100ms.
    *   Real-time progress bar on the frontend displays sync status.

*   **🌍 Bilingual Support (Multi-language)**
    *   One-click toggle between **Simplified Chinese** and **English**.
    *   Full system localization: covers status labels, approval stage descriptions, and official file links.

*   **🔍 Deep Multi-Crypto Search**
    *   **Multi-Crypto Search**: Directly search for "BTC" or "ETH" to filter composite ETFs containing that constituent asset.
    *   Smart dropdown filter covering all discovered crypto asset classes.

*   **🧠 Smart Status Tracking**
    *   **Approved**: Includes highlighted display for today's newly approved ETFs.
    *   **Pending**: Covers all applications currently in the review process.
    *   **Delayed**: Clearly marks key applications that have been delayed by the SEC.
    *   **Trading Info**: Directly displays Expense Ratio and Ticker symbols.

*   **🎨 Tech UI / Brutalist Design**
    *   **Hardcore Aesthetics**: Features #F5F5F4 beige background with #10B981 emerald green accents.
    *   **Minimalist Grid**: 4px brutalist hard shadows for visual tension.
    *   **Enhanced Interaction**: Includes "Back to Top" navigation and smooth scrolling.

## 🛠 Tech Stack

*   **Backend**: Node.js, Express
*   **Data Source**: SEC EDGAR API (`data.sec.gov`, `efts.sec.gov`)
*   **Frontend**: Vanilla JS (ES6+), Vanilla CSS3 (Custom Tokens)
*   **Performance**: In-memory caching, Rate-limiting (Compliant with SEC rate limits)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd crypto-etf
npm install
```

### 2. Start Server

The server will automatically start the background data sync task upon launch.

```bash
node server.js
```

### 3. Access Application

Open your browser and visit:

http://localhost:3000

*On first launch, please watch the sync progress bar at the top of the page. It takes about 2-3 minutes to crawl data for 120+ issuers.*

## 📚 API Documentation

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/all-etf-applications` | GET | Get all ETF applications (known and discovered) |
| `/api/sync-progress` | GET | Get current background sync progress (processed/total) |
| `/api/health` | GET | Server health check |

## ⚠️ Disclaimer

*   **Data Source**: Project data is derived directly from SEC EDGAR public interfaces, syncing filing documents in real-time.
*   **Approval Odds**: This is an estimate based on **market consensus, historical approval rates, and forecasts from professional analysts (e.g., Bloomberg Intelligence)** and does not represent the SEC's official stance.
*   **Investment Advice**: This project is for informational purposes only and does not constitute investment advice.
*   **Latency**: Due to SEC API rate limits, data updates may occasionally be delayed.

---

<a name="-sec-crypto-etf-tracker-"></a>
# 🚀 SEC Crypto ETF Tracker (实时追踪器)

一个现代化、高性能的加密货币 ETF 申请追踪系统，直接与 **SEC EDGAR 数据库** 集成，提供最权威、实时的申请状态数据。

支持 **Bitcoin, Ethereum, Solana, XRP, Dogecoin, Litecoin, Cardano** 以及 **Multi-Crypto (多币种组合)** 等多种资产类别的 ETF 申请追踪。

## ✨ 核心亮点

*   **⚡️ 实时 SEC 数据同步**
    *   内置后台同步引擎，每 5 分钟自动从 SEC 拉取最新数据。
    *   智能缓存机制，API 响应速度 < 100ms。
    *   前端实时进度条显示同步状态。

*   **🌍 中英文双语支持 (Multi-language)**
    *   一键切换 **简体中文** 与 **English**。
    *   全系统本地化：包括状态标签、审批阶段描述以及官方文件链接。

*   **🔍 深度多币种检索 (Deep Search)**
    *   支持 **Multi-Crypto** 穿透式搜索：直接搜索 "BTC" 或 "ETH" 即可筛选出包含该成分币的组合 ETF。
    *   智能下拉筛选，覆盖所有已发现的加密资产类别。

*   **🧠 智能状态追踪 (Smart Status)**
    *   **已通过 (Approved)**: 包含今日最新获批的高亮展示。
    *   **待通过 (Pending)**: 涵盖所有正在审批流程中的申请。
    *   **已延期 (Delayed)**: 明确标记被 SEC 延期的关键申请。
    *   **交易信息**: 直接展示费率 (Expense Ratio) 与交易所代码。

*   **🎨 Tech UI / Brutalist 设计**
    *   **硬核美学**: 采用 #F5F5F4 米色背景与 #10B981 翡翠绿点缀。
    *   **极简网格**: 4px brutalist 硬阴影，极具视觉张力。
    *   **交互增强**: 包含 "返回顶部" 导航与平滑滚动体验。

## 🛠 技术栈

*   **Backend**: Node.js, Express
*   **Data Source**: SEC EDGAR API (`data.sec.gov`, `efts.sec.gov`)
*   **Frontend**: Vanilla JS (ES6+), Vanilla CSS3 (Custom Tokens)
*   **Performance**: In-memory caching, Rate-limiting (符合 SEC 频率限制)

## 🚀 快速开始

### 1. 安装依赖

```bash
cd crypto-etf
npm install
```

### 2. 启动服务器

服务器启动后会自动开启后台数据同步任务。

```bash
node server.js
```

### 3. 访问应用

打开浏览器访问：

http://localhost:3000

*首次启动时，请留意页面顶部的同步进度条，系统大约需要 2-3 分钟来完成 120+ 个发行商的数据爬取。*

## 📚 API 文档

| Endpoint | Method | 描述 |
|----------|--------|------|
| `/api/all-etf-applications` | GET | 获取所有 ETF 申请列表 (包含已知和自动发现的) |
| `/api/sync-progress` | GET | 获取当前后台同步的进度 (已处理/总数) |
| `/api/health` | GET | 服务器健康检查 |

## ⚠️ 免责声明

*   **数据来源**: 项目数据直接来源于 SEC EDGAR 公开接口，实时同步备案文件。
*   **批准概率 (Approval Odds)**: 这是一个基于 **市场共识、历史获批率以及彭博社 (Bloomberg Intelligence) 等专业分析师预测** 的估算值，不代表 SEC 的官方态度。
*   **投资建议**: 本项目仅供信息参考，不构成任何投资建议。
*   **延迟说明**: 由于 SEC API 的频率限制，数据可能会有偶尔的延迟。

---
Developed by **Rex Liu** for Vibe Coding.
