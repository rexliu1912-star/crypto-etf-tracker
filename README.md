# 🚀 SEC Crypto ETF Tracker (实时追踪器)

一个现代化、高性能的加密货币 ETF 申请追踪系统，直接与 **SEC EDGAR 数据库** 集成，提供最权威、实时的申请状态数据。

支持 **Bitcoin, Ethereum, Solana, XRP, Dogecoin, Litecoin** 等多种资产类别的 ETF 申请追踪。

## ✨ 核心亮点

*   **⚡️ 实时 SEC 数据同步**
    *   内置后台同步引擎，每 10 分钟自动从 SEC 拉取最新数据。
    *   智能缓存机制，API 响应速度 < 100ms。
    *   前端实时进度条显示同步状态。

*   **🌍 中英文双语支持 (Multi-language)**
    *   一键切换 **简体中文** 与 **English**。
    *   全系统本地化：包括状态标签、审核阶段描述、时间轴倒计时以及搜索占位符。

*   **🔍 动态发现系统 (Dynamic Discovery)**
    *   不再局限于硬编码列表。
    *   自动扫描 SEC 全文检索系统，发现新的发行商（如 Morgan Stanley, JPMorgan 等）。
    *   目前覆盖 **120+** 个潜在申请主体。

*   **🧠 智能状态追踪 (Smart Status)**
    *   **初期审核 (Stage 1)**: 提交 < 45天。
    *   **延期审核 (Stage 2)**: 提交 45-90天。
    *   **最终审核 (Final Stage)**: 提交 90-240天。
    *   **等待裁决**: 已过法定审核期，结果即将公布。

*   **�️ Tech UI / Brutalist 设计**
    *   **硬核美学**: 采用 #F5F5F4 米色背景与 #10B981 翡翠绿点缀。
    *   **极简网格**: 4px  brutalist 硬阴影，极具视觉张力。
    *   **终端风格**: JetBrains Mono 字体，代码窗口式数据展示。

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

本项目数据直接来源于 SEC 公开接口，仅供信息参考。不构成任何投资建议。
由于 SEC API 的限制，数据可能会有偶尔的延迟。

---
Developed by **Antigravity** for Vibe Coding.
