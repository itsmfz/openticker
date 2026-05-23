# OpenTicker — Complete User Manual

Welcome. This document is the complete reference for OpenTicker. It covers every screen, every command, the analysis workflows the tool is designed for, and how to connect your own data providers when you're ready to go live.

If you just want to get running, read **§1–§3**. If you want to actually do analysis, read **§5 (Modules)** and **§6 (Workflows)** in depth.

---

## Table of Contents

1. [What OpenTicker Is](#1-what-__name__-is)
2. [Installation](#2-installation)
3. [First-Time Setup — Connecting Your Data](#3-first-time-setup--connecting-your-data)
4. [The Interface](#4-the-interface)
   - 4.1 Pro Mode vs Simple Mode
   - 4.2 The Top Bar
   - 4.3 The Command Bar (Pro Mode)
   - 4.4 The Search Bar (Simple Mode)
   - 4.5 The AI Assistant Drawer
5. [Module Reference](#5-module-reference)
   - 5.1 Equity Dashboard
   - 5.2 Macro Dashboard
   - 5.3 Yield Curve
   - 5.4 Currency Rates (FXC)
   - 5.5 News Feed
   - 5.6 Portfolio
   - 5.7 Comparison Tool (COMP)
   - 5.8 Risk Analytics
   - 5.9 Stress Testing
   - 5.10 Equity Screener (EQS)
   - 5.11 Watchlist & Alerts
   - 5.12 BQL Query Engine
   - 5.13 Economic Calendar (ECO)
   - 5.14 AI Assistant (ASKB)
6. [Analysis Workflows](#6-analysis-workflows)
   - 6.1 Researching a Single Stock End-to-End
   - 6.2 Building a Portfolio Investment Thesis
   - 6.3 Stress-Testing for Downside Risk
   - 6.4 Hunting for Undervalued Stocks
   - 6.5 Reading a Macro Setup
   - 6.6 Pre-Earnings Preparation
7. [Data Connections — Provider Guide](#7-data-connections--provider-guide)
8. [Power-User Reference](#8-power-user-reference)
9. [Troubleshooting](#9-troubleshooting)
10. [Glossary](#10-glossary)

---

## 1. What OpenTicker Is

OpenTicker is a **desktop financial-analysis terminal** modeled on the conventions of professional trading desks. It gives you:

- Real-time equity, FX, and macroeconomic data in dense, dashboard-style screens
- A natural-language query engine (BQL) for ad-hoc data questions
- Portfolio tracking with risk analytics, factor exposure, and scenario stress-testing
- Side-by-side security comparison across up to five tickers
- An economic-event calendar with importance signals
- A built-in AI assistant for plain-English market analysis

It runs as a **native desktop app** (Windows .exe / macOS .dmg) — no browser, no internet required for the interface itself. Market data flows in through API keys you provide; if you don't have keys yet, the entire tool runs on realistic demo data so you can learn the workflow before going live.

**Two interface modes** are baked in:

- **Pro Mode** — command-line driven (type `AAPL EQ <GO>`), dense tables, every technical metric exposed
- **Simple Mode** — natural-language search, friendly labels ("Price Score" instead of "P/E"), card-based layouts, persistent AI helper

Switch between them any time from the pill in the top-right corner. The underlying data is identical — only the presentation changes.

---

## 2. Installation

### Windows

1. Download `OpenTicker-Setup-x.x.x.exe` from the [Releases page](#).
2. Double-click to run. Walk through the installer (you can change the install location).
3. Launch from the Start Menu or desktop shortcut.

**Portable version available** — if you don't want to install, grab `OpenTicker-Portable-Windows.zip`, extract anywhere, run the `.exe` inside. Same app, no installer wizard, no system changes.

### macOS

1. Download the right `.dmg` for your machine:
   - **Apple Silicon (M1/M2/M3/M4):** `OpenTicker-x.x.x-arm64.dmg`
   - **Intel Mac:** `OpenTicker-x.x.x-x64.dmg`
   - **Universal (works on both):** `OpenTicker-x.x.x-universal.dmg`
2. Double-click the `.dmg`. Drag the app into your **Applications** folder.
3. First launch: right-click the app → **Open** (this bypasses Gatekeeper for unsigned builds). After the first launch, you can open it normally.

### System Requirements

| | Minimum | Recommended |
|---|---|---|
| OS | Windows 10 / macOS 11 | Windows 11 / macOS 13+ |
| RAM | 4 GB | 8 GB |
| Disk | 500 MB | 1 GB |
| Display | 1366×768 | 1920×1080+ |

---

## 3. First-Time Setup — Connecting Your Data

On first launch, the **Connect Your Data** wizard appears. You have two paths:

### Path A: Explore with Demo Data (Recommended for first hour)

Click the big **▶ Explore with Demo Data** button at the top of the wizard. Every screen will work with realistic mocked market data. You won't see live prices, but every feature is exercisable.

> **Use this path first** even if you have keys. Learn the workflow before risking a typo on a real key.

### Path B: Connect Live Data Feeds

Five data feeds power OpenTicker. You can connect any subset — uninstalled ones simply fall back to demo data on the screens they power.

| Feed | Powers These Screens | Recommended Free Provider |
|---|---|---|
| **Equities & Indices** | Equity, Portfolio, Risk, Stress Test, Screener, Comparison, Watchlist, BQL | Finnhub (60 calls/min free) |
| **FX Rates** | Currency Rates (FXC) | ExchangeRate-API (1,500/mo free) |
| **Macro & Rates** | Macro dashboard, Yield Curve | FRED (free, unlimited) |
| **News Wire** | News Feed | NewsAPI (100/day free) |
| **Economic Calendar** | Economic Calendar (ECO) | Finnhub (reuses Equities key) |

For each feed:

1. Click the provider name in the card → opens the signup page in your browser
2. Sign up (most are instant, no credit card)
3. Copy the API key they give you
4. Paste it into the field in OpenTicker
5. Click **Test & Connect**
6. Green badge → live. Red badge → check what the error message says.

> **Privacy:** API keys are stored only on your machine, in your browser's local storage. They are never transmitted anywhere except to the provider you specified. You can audit this — the source is open.

### Changing Connections Later

Type `CONN <GO>` (Pro Mode) or search "connections" (Simple Mode), or click the **n/5 feeds** pill in the top-right corner. Same screen, available any time.

---

## 4. The Interface

### 4.1 Pro Mode vs Simple Mode

Toggle in the **top-right pill**. The choice persists across launches.

| | **Pro Mode** | **Simple Mode** |
|---|---|---|
| Navigation | Command bar at the bottom (`AAPL EQ <GO>`) | Search bar at the top ("Show me Apple") |
| Home screen | 14-tile module grid with command labels | Same modules with plain-English names |
| Metric labels | Technical (P/E, VaR, Sharpe, Beta) | Plain-English (Price Score, Estimated Worst Day, Risk-Adjusted Return Score) |
| Tables | Dense, sortable, packed | Card layouts with explanations |
| AI Assistant | Accessible via `ASKB <GO>` | Persistent right-side drawer |
| Color-coded signals | Off | On (green / amber / red dots next to key metrics) |
| Module summaries | Off | AI-generated 2–3 sentence summaries at the top of major screens |

**When you switch, your current screen is preserved.** If you're on Apple's equity page in Pro Mode and switch to Simple, you stay on Apple — just re-rendered with friendly labels and the AI summary.

### 4.2 The Top Bar

Always visible. Left to right:

- **Brand mark** with live status dot
- **Module name** of the screen you're currently on
- **Live ticker strip** (clickable) — `AAPL`, `MSFT`, `NVDA`, key FX pairs, 10Y yield, oil
- **Current date & time** (updates every second)
- **Connection pill** — `n/5 feeds`, color-coded. Click to open the Data Connections manager.
- **Mode toggle** — `PRO | SIMPLE`
- **Notification bell** — shows triggered watchlist alerts with a red badge count

### 4.3 The Command Bar (Pro Mode)

The black strip at the bottom of the screen. The grammar is:

```
<TARGET> <FUNCTION> <GO>
```

The `<GO>` is the Enter key. Examples:

| Type | Effect |
|---|---|
| `AAPL EQ` | Open Apple's equity dashboard |
| `AAPL FA` | Open Apple, scroll to financial-analysis section |
| `AAPL GP` | Open Apple, scroll to price graph |
| `AAPL ANR` | Open Apple, scroll to analyst recommendations |
| `MACRO` | Macro dashboard |
| `FXC` | Currency rates |
| `EQS` | Equity screener |
| `COMP` | Comparison tool |
| `ECO` | Economic calendar |
| `PORT` | Your portfolio |
| `RISK` | Portfolio risk analytics |
| `STRESS` | Stress testing |
| `YCRV` | Yield curve |
| `WATCH` | Watchlist |
| `BQL` | Query engine |
| `ASKB` | AI assistant (full-page) |
| `CONN` | Data connections manager |
| `MENU` | Module grid |
| `HELP` | Command reference modal |

**Keyboard shortcuts:**

- `/` from anywhere → focuses the command bar
- `↑` / `↓` while focused → cycle through your last 50 commands
- `Esc` → close any open modal

**Backwards-compatible aliases** (if you're used to other terminal mnemonics):

| Canonical | Also accepts |
|---|---|
| `FXC` | `FX` |
| `EQS` | `SCRN` |
| `ECO` | `ECON` |
| `MACRO` | `ECST` |
| `NEWS` | `N`, `TOP` |
| `CONN` | `API` |

### 4.4 The Search Bar (Simple Mode)

A natural-language bar at the top of the screen, always visible. Type what you want; it routes you to the right module.

Examples that work:

- *"Show me Apple"* → Apple equity page
- *"How is the economy doing?"* → Macro dashboard
- *"What are interest rates doing?"* → Yield curve
- *"Check my portfolio"* → Portfolio
- *"Find cheap stocks"* → Equity screener
- *"What if the market crashed?"* → Stress test
- *"Compare AAPL vs MSFT"* → Comparison tool
- *"News on Microsoft"* → News feed
- *"Fed meeting"* → Economic calendar

If the search bar can't figure out what you mean, it flashes a hint with examples.

### 4.5 The AI Assistant Drawer

In **Simple Mode**, the assistant is a persistent right-side panel on every screen. In **Pro Mode**, access it via `ASKB <GO>` for a full-page chat view.

The drawer is **context-aware** — the suggested starter prompts change based on what screen you're on. On the equity page you'll see prompts like *"Is this stock a good buy?"* and *"Explain the P/E ratio."* On the macro page you'll see *"Summarize the macro outlook"* and *"Are we heading into a recession?"*

Type your own question at the bottom. Responses include the underlying BQL query when relevant, so you can see how the assistant arrived at its answer.

---

## 5. Module Reference

### 5.1 Equity Dashboard

**Command:** `<TICKER> EQ` (e.g., `AAPL EQ`, `NVDA EQ`)

The single-stock workspace. Pre-loaded with the major US-listed equities and a handful of international names (ASML, SAP, TSM, BABA). Type any ticker symbol; if it's unknown, you get an error.

**Layout (Pro Mode):**

- **Header panel** — name, ticker, exchange, current price, day change ($ and %), sector tag. Sub-function `DES` jumps here.
- **Price History (90D)** — line chart with O/H/L/C strip. Sub-functions `GP`, `GIP`, `HP` jump here.
- **Key Stats** — bid/ask, day & 52-week range, volume, market cap, P/E, EPS, dividend yield. Sub-function `FA` jumps here.
- **Upcoming Events** — next 2–3 macro events that could affect this stock's sector
- **Analyst Ratings** — horizontal bars for Strong Buy / Buy / Hold / Sell / Strong Sell + consensus
- **Peer Comparison** — six same-sector peers in a sortable mini-table. Click any row to jump to that ticker.

**Layout (Simple Mode):**

The same data, restructured:
- AI-generated 2–3 sentence company summary at the top
- Card grid of metrics with friendly labels and signal dots
- Bullish / Neutral / Bearish percentage cards instead of ratings bars
- Similar companies as clickable cards

**Sub-function shortcuts** (Pro Mode):

| Code | Jumps to |
|---|---|
| `DES` | Description / header |
| `GP`, `GIP`, `HP` | Price chart |
| `FA`, `DVD`, `ERN` | Key stats / financials |
| `ANR` | Analyst ratings |

### 5.2 Macro Dashboard

**Command:** `MACRO`

Eight key US macro indicators in card grid: GDP growth, CPI inflation, unemployment, Fed Funds rate, 10Y Treasury yield, Brent crude, gold, DXY. Each card shows current value, change, a sparkline trend, and a **"Next Release" date** so you know when fresh data is due. A yield-curve chart spans the bottom.

In Simple Mode, each card adds a **"What this means for you:"** line in plain English. For example, the inflation card explains *"Rising inflation means everyday goods are getting more expensive."*

### 5.3 Yield Curve

**Command:** `YCRV`

Interactive US Treasury yield curve. Plots 1M / 3M / 6M / 1Y / 2Y / 5Y / 7Y / 10Y / 20Y / 30Y maturities.

**Three overlapping curves** are toggleable via checkboxes:
- **Today** (teal)
- **1 Year Ago** (amber)
- **2 Years Ago** (purple)

Below the chart:
- **2s10s spread** label classifying the curve as *Normal / Flat / Inverted*
- 3M-vs-10Y and 5Y-vs-30Y spreads
- Year-over-year curve steepness change

Table below shows exact yields at every maturity for all three dates with the YoY delta in basis points.

**Simple Mode** adds a large color-coded banner at the top: *"Normal Curve — Economy appears healthy"* / *"Inverted Curve — Recession warning signal"* with a 2-sentence explanation.

### 5.4 Currency Rates (FXC)

**Command:** `FXC` (alias: `FX`)

Major currency pairs in a sortable table — EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, USD/AED, USD/CNH, USD/INR, GBP/EUR, EUR/JPY, USD/SGD.

Click any pair on the left to load its 90-day chart on the right, with day range, 52-week range, and exact spread.

### 5.5 News Feed

**Command:** `NEWS` (aliases: `N`, `TOP`)

Scrollable headline stream with timestamp, source tag (BLM, Reuters, WSJ, FT, CNBC), and category badge (Equities / Macro / FX / Earnings). Filter chips at the top let you narrow by category.

Click any headline that mentions a known company — the news feed parses the headline and routes you to that company's equity page.

### 5.6 Portfolio

**Command:** `PORT`

Your holdings dashboard.

**Pro Mode layout:**
- **Summary card** — total value, total cost, unrealized P&L, total return %, day P&L
- **Allocation pie chart** — colored by sector with side legend
- **Top movers panel** — five biggest day-movers in your portfolio
- **Holdings table** — every position with ticker, sector, shares, avg cost, current price, market value, P&L, % return. CSV export available.

**Simple Mode layout:**
- Large centered P&L number (green or red)
- Plain-English summary line: *"Your portfolio is up 12.4% since you bought, outperforming the S&P 500 by 3.1%."*
- 1–10 risk score card with label (Low / Moderate / High / Very High)
- Sector allocation
- Holdings as clickable cards (not table)

### 5.7 Comparison Tool (COMP)

**Command:** `COMP`

Side-by-side performance comparison of up to 5 securities (stocks, indices, or ETFs).

**To use:**
1. Click a pre-built chip (`FAANG`, `S&P vs Nasdaq vs Dow`, `Apple vs Microsoft`, `Growth vs Value ETFs`) OR type a ticker in the search box and click `+ Add`
2. Pick a time range: 1W / 1M / 3M / 6M / 1Y / 3Y / 5Y
3. Hover anywhere on the chart for a tooltip showing each security's exact return at that point

**Chart axis** — every security starts at 0% on the left. The Y-axis shows percentage return, not price, so the comparison is purely about relative performance.

**Below the chart:** a side-by-side metric table (Current Price, YTD %, 1Y %, Market Cap, P/E, Dividend Yield, Volatility). The best value in each column is highlighted in teal-bold; the worst in muted red. Sortable.

**Removing a security:** click the `✕` next to its name in the legend.

**Simple Mode adds:** a one-line AI verdict at the top: *"Over the past year, Microsoft has outperformed Apple by 8.3%."*

### 5.8 Risk Analytics

**Command:** `RISK`

Portfolio-level risk dashboard.

**Six metric cards:**
- **Value at Risk (VaR)** — 1-day, 95% confidence (in Simple Mode: "Estimated Worst Day")
- **Sharpe Ratio** — risk-adjusted return (Simple: "Risk-Adjusted Return Score")
- **Beta vs S&P 500** — market sensitivity (Simple: "Market Sensitivity")
- **Tracking Error** — annualized deviation from benchmark (Simple: "How Much You Drift from the Market")
- **Max Drawdown** — worst peak-to-trough (Simple: "Worst Drop Ever Recorded")
- **Annualized Volatility** — σ (Simple: "How Bumpy the Ride Is")

**Factor Exposure** — horizontal centered bars for Growth, Value, Momentum, Quality, Size, Volatility. Positive bars = overweight that factor vs benchmark.

**Risk Contribution by Holding** — table ranking your positions by what % of total portfolio risk they generate. A holding can have a small portfolio weight but a huge risk contribution if it's volatile.

### 5.9 Stress Testing

**Command:** `STRESS`

Simulate how your portfolio performs under macro shocks.

**Five pre-built scenarios** as selectable tiles:
1. **Rates +100bps** — parallel UST curve shift up
2. **Rates −100bps** — parallel UST curve shift down
3. **Equity Crash −30%** — S&P 500 declines 30%
4. **USD +10%** — dollar strengthens
5. **Recession −3% GDP** — US GDP contracts over 4 quarters

**Custom Scenario Builder** — three sliders:
- Rate change (−200 to +200 bps)
- Equity shock (−50% to +50%)
- FX move (−20% to +20%)

**Output panels:**
- Before-and-after portfolio value bars
- $ impact, % impact, and VaR multiple (how many "normal worst days" the shock equals)
- Per-holding impact table — every position's stressed value and dollar impact. CSV export.

### 5.10 Equity Screener (EQS)

**Command:** `EQS` (alias: `SCRN`)

Multi-filter security finder.

**Filters:**
- **Market cap tier** — All / Small / Mid / Large / Mega
- **P/E ratio** — dual-handle range slider
- **Sector** — All / Tech / Finance / Healthcare / Energy / Consumer / Industrials
- **Dividend yield** — range slider
- **52-week return** — range slider
- **Region** — All / US / Europe / Asia / Global

**Results table** — sortable by any column. Click a row to load that ticker's equity page. CSV export available.

### 5.11 Watchlist & Alerts

**Command:** `WATCH`

Persistent watchlist of tickers you want to monitor.

**Adding/removing:**
- Type a ticker in the input + click `+ Add`
- Click `✕` to remove
- **Drag-and-drop rows** to reorder

**Each row shows:** ticker, company name, last price, % change, mini sparkline trend, current alerts, and an `+ Alert` button.

**Setting an alert:** click `+ Alert` → modal opens → choose direction (above/below) → enter threshold price → save. The alert immediately evaluates against the current price; if the threshold is already crossed, the row blinks `⚠ ALERT`.

**Active Alerts panel** — full list of armed alerts with current price vs threshold and triggered status.

**Triggered alerts** also appear in the **notification bell** in the top-right corner with a red badge count. Click any triggered alert to jump to that ticker's equity page.

### 5.12 BQL Query Engine

**Command:** `BQL`

Pseudo-SQL query interface across stocks, bonds, and your portfolio.

**Syntax:**
```
SHOW <entity> WHERE <field> <operator> <value> [AND <condition>...]
```

**Entities:** `stocks`, `bonds`, `portfolio`

**Fields:**
- For stocks/portfolio: `pe_ratio`, `market_cap`, `sector`, `region`, `dividend_yield`, `wk_return`, `price`
- For bonds: `yield`, `rating`, `duration`, `maturity`

**Operators:** `=`, `!=`, `>`, `<`, `>=`, `<=`

**Numeric suffixes:** `K`, `M`, `B`, `T`, `%`

**Examples:**
```sql
SHOW stocks WHERE pe_ratio < 20 AND market_cap > 500B
SHOW stocks WHERE sector = 'Technology' AND wk_return > 30
SHOW stocks WHERE dividend_yield > 2 AND region = 'US'
SHOW portfolio WHERE sector = 'Technology'
SHOW bonds WHERE yield > 4.5 AND rating = 'AA'
```

**Results table** is sortable; click any stock to jump to its equity page. CSV export available.

**Simple Mode replaces this** with a visual filter builder — dropdowns and sliders instead of typing. The equivalent BQL query is shown in a "Behind the scenes:" code block so you can learn the syntax over time.

### 5.13 Economic Calendar (ECO)

**Command:** `ECO` (alias: `ECON`)

Scheduled economic releases, defaulting to the current week.

**Each event card shows:**
- Time of release (local exchange time)
- Event name (e.g., *Non-Farm Payrolls*, *Fed Interest Rate Decision*)
- Importance badge — **High** (red) / **Medium** (yellow) / **Low** (grey)
- Previous value, Forecast (consensus), Actual (green if beats forecast, red if misses, grey if unreleased)

**Top-right toggle:** Week / Month view, with prev / next navigation.

**Filter chips:** filter by importance level and category (Inflation, Employment, Growth, Central Bank, Housing, Consumer, Manufacturing, Trade).

**Right sidebar:** "Coming Up — High Importance" lists the next 7 high-importance unreleased events regardless of date.

**Clicking any event** opens a detail modal:
- Previous / Forecast / Actual cards
- Historical line chart of the last 10 releases — see the trend
- Plain-English description of what the indicator measures and why it matters

**Simple Mode adds:** a top banner highlighting the single most important upcoming event with a 2-sentence explanation of why it matters. Importance labels become "Big Deal / Worth Watching / Minor."

### 5.14 AI Assistant (ASKB)

**Command:** `ASKB` (full-page chat) or use the Simple Mode drawer

Conversational analyst interface. Ask anything about markets, your portfolio, security analysis, or screening logic.

**Pre-populated prompts** (vary by context):
- *"Summarize the macro outlook"*
- *"Which of my holdings has the most risk?"*
- *"Explain the current yield curve shape"*
- *"Screen for undervalued large-cap tech stocks"*

**Responses include:**
- Well-formatted analytical paragraphs (2–4 paragraphs typical)
- An underlying BQL query when relevant, shown in a grey code block — so you can see and learn the data logic

---

## 6. Analysis Workflows

These are the actual research patterns OpenTicker is built to support. Walk through each one with real or demo data to internalize the workflow.

### 6.1 Researching a Single Stock End-to-End

**Goal:** decide whether to buy / hold / sell a single security.

1. `AAPL EQ` — load the equity dashboard. Read the header. Note the price, day change, and 52-week range. Is it near a high or low?
2. `AAPL FA` — jump to financials. P/E vs sector average? Dividend yield? Market cap tier?
3. Scroll to **Analyst Ratings**. What's the consensus? Are professional analysts mostly bullish or split?
4. Scroll to **Peer Comparison**. How does AAPL trade vs MSFT, GOOGL, META on valuation? Cheap, expensive, in line?
5. `COMP` → add AAPL plus 2–3 peers. Set range to 1Y or 3Y. Has AAPL led, lagged, or matched its peers? Look at the side-by-side table for clean valuation/return contrast.
6. `ASKB` → ask *"Is AAPL a good buy right now?"* — read the analyst summary, look at the underlying BQL.
7. Back to the equity page → check the **Upcoming Events** widget for any catalysts (earnings, Fed decisions affecting tech).
8. `WATCH` → add AAPL with a price alert at your buy threshold if you're patient.

### 6.2 Building a Portfolio Investment Thesis

**Goal:** explain in writing why your current portfolio holdings are good ones.

1. `PORT` — start with the high-level view. Look at total return vs the S&P 500 line in the summary. Are you adding value?
2. Look at **Allocation by Sector**. Is your portfolio diversified or concentrated? Single-sector exposure > 50% is a red flag.
3. `RISK` — read the six risk cards. Sharpe ratio > 1 is good; Beta near 1 is market-like; Volatility under 20% is calm.
4. Look at **Risk Contribution by Holding**. The names with the biggest bars are driving your risk. If one position is generating 30%+ of total risk, that's concentration to defend.
5. Look at **Factor Exposure**. Are you a growth investor (positive Growth/Momentum) or value (positive Value, negative Growth)? Make sure your factor tilt matches your stated style.
6. For each holding, run §6.1's stock workflow. Could you explain in 2 sentences why each is in the portfolio?
7. `STRESS` → run all five pre-built scenarios. Look at the dollar impacts. Are you comfortable with each downside?

### 6.3 Stress-Testing for Downside Risk

**Goal:** quantify what your portfolio loses in adverse scenarios so you can sleep at night.

1. `STRESS` → click the **Equity Crash −30%** tile. Read the **before-vs-after bars** at the top.
2. Look at the **VaR Multiple** card — how many "normal worst days" does a 30% market crash equal? If it's 10x or more, the magnitude is hard to imagine but real.
3. Look at the **Holding-Level Impact** table. Which positions get hit hardest? Tech and high-beta names typically lose more than 30%; healthcare and staples less.
4. Now try **Rates +100bps**. Long-duration tech and growth names get hit; financials benefit. Does your portfolio's profile match your interest-rate view?
5. Try **Recession −3% GDP**. This is the broad-economic-slowdown scenario. Cyclicals (industrials, financials) get worse than defensives.
6. Use the **Custom Scenario Builder** to combine shocks — e.g., rates +50bps AND equity −15%. This simulates a stagflation scare.
7. If any scenario shows a loss you wouldn't tolerate emotionally, reduce that exposure now, not when the scenario actually happens.

### 6.4 Hunting for Undervalued Stocks

**Goal:** find stocks trading at attractive valuations that you don't already own.

**Approach A — visual screener:**
1. `EQS` (or `SCRN`)
2. Set **Market Cap** to **Large (100B–1T)** for liquidity
3. Set **P/E** range to **0–20** (cheap on earnings)
4. Set **Dividend Yield** to **2%+** for income floor
5. Set **52W Return** to **−20% to +10%** — recent laggards that haven't run yet
6. Sort the results by P/E ascending. Open the top 5 in equity pages one by one.

**Approach B — BQL for power users:**
```sql
SHOW stocks WHERE pe_ratio < 18 AND market_cap > 100B AND dividend_yield > 2 AND wk_return < 10
```

**Approach C — Simple Mode visual builder:**
1. Search "find cheap stocks" or click the **Custom Search** tile
2. Slide **Price Score (P/E)** range to the cheap end
3. Set **Performance This Year** to slightly negative through slightly positive
4. Set **Company Size** to Large
5. Set **Dividend Payout** to Medium or High
6. Browse the result cards

For each candidate, run the §6.1 single-stock workflow to confirm whether it's cheap for a reason (deteriorating fundamentals) or genuinely undervalued.

### 6.5 Reading a Macro Setup

**Goal:** form a coherent view of where the economy is headed.

1. `MACRO` — read all eight cards. Which are improving (green arrows / positive sparkline trends) and which are deteriorating?
2. Pay specific attention to:
   - **CPI trend** — accelerating or decelerating?
   - **Unemployment trajectory** — rising = late-cycle warning
   - **10Y yield** — direction tells you what the bond market thinks
   - **DXY** — a strong dollar tightens global financial conditions
3. `YCRV` — what's the curve shape? Inverted = recession risk in 12–18 months. Steepening from inverted = potentially the *worst* time historically (recession imminent).
4. `ECO` — what's on the calendar this week? High-importance unreleased events drive volatility.
5. `ASKB` → ask *"Summarize the macro outlook"* and *"Are we heading into a recession?"* for a synthesized read.
6. Translate the macro picture into portfolio positioning: rising-rates environment favors financials and value; falling-rates favors growth and long-duration; recession favors defensives.

### 6.6 Pre-Earnings Preparation

**Goal:** prepare a position for an earnings release.

1. `WATCH` — add the ticker if not already there
2. `<TICKER> EQ` → check the **Upcoming Events** sidebar for the earnings date
3. `<TICKER> ANR` → check analyst consensus. Strong Buy with low whispers = upside if numbers are merely OK; Hold with high expectations = downside even on a decent print.
4. `COMP` — add the ticker plus 2–3 peers. Has the sector already moved into earnings? Sometimes the whole sector pre-runs.
5. Set a price alert at your stop-loss level (`+ Alert` on the watchlist row, direction "below")
6. Decide your position size *before* earnings, not after. Use `STRESS` with a custom −15% equity shock to estimate downside if the report disappoints.

---

## 7. Data Connections — Provider Guide

If you want live data, you need API keys. Below are concrete recommendations per feed with free-tier limits and direct signup URLs.

### Equities & Indices

| Provider | Free Tier | Sign-up Link |
|---|---|---|
| **Finnhub** (recommended) | 60 calls/min, no credit card | <https://finnhub.io/register> |
| Alpha Vantage | 25 calls/day | <https://www.alphavantage.co/support/#api-key> |
| Polygon.io | Free tier, US stocks | <https://polygon.io/dashboard/signup> |

### FX Rates

| Provider | Free Tier | Sign-up Link |
|---|---|---|
| **ExchangeRate-API** (recommended) | 1,500 requests/month | <https://www.exchangerate-api.com/> |
| Open Exchange Rates | 1,000/mo | <https://openexchangerates.org/signup/free> |
| Fixer.io | 100/mo | <https://fixer.io/signup/free> |

### Macro & Rates

| Provider | Free Tier | Sign-up Link |
|---|---|---|
| **FRED (St. Louis Fed)** (recommended) | Completely free, unlimited | <https://fred.stlouisfed.org/docs/api/api_key.html> |
| Trading Economics | Demo key on signup | <https://tradingeconomics.com/api/> |

> **FRED is the easiest first key to get.** Instant, no credit card, no rate limits worth mentioning. If you only set up one feed, set up this one.

### News Wire

| Provider | Free Tier | Sign-up Link |
|---|---|---|
| **NewsAPI** (recommended) | 100 requests/day, dev tier | <https://newsapi.org/register> |
| Marketaux | 100/day | <https://www.marketaux.com/> |
| Finnhub News | Reuses your Equities key | (already covered) |

### Economic Calendar

| Provider | Free Tier | Sign-up Link |
|---|---|---|
| **Finnhub Calendar** (recommended) | Reuses your Equities key | <https://finnhub.io/register> |
| Financial Modeling Prep | 250 req/day | <https://site.financialmodelingprep.com/developer/docs> |

### Privacy & Security

Your API keys live exclusively in your browser's `localStorage` under the key `openticker.feeds.v1`. They are never:

- Sent to any server other than the data provider you specified
- Logged or telemetered
- Synced across devices

You can inspect or wipe them via your browser's dev tools at any time.

---

## 8. Power-User Reference

### Full Command Reference

| Command | Description | Alias |
|---|---|---|
| `<TICKER> EQ` | Equity dashboard | |
| `<TICKER> DES` | Equity → Description section | |
| `<TICKER> GP` / `GIP` / `HP` | Equity → Price chart | |
| `<TICKER> FA` / `DVD` / `ERN` | Equity → Financials | |
| `<TICKER> ANR` | Equity → Analyst ratings | |
| `MACRO` | Macro dashboard | `ECST` |
| `YCRV` | Yield curve | |
| `FXC` | Currency rates | `FX` |
| `NEWS` | News feed | `N`, `TOP` |
| `PORT` | Portfolio | |
| `COMP` | Comparison tool | |
| `RISK` | Risk analytics | |
| `STRESS` | Stress testing | |
| `EQS` | Equity screener | `SCRN` |
| `WATCH` | Watchlist | |
| `BQL` | Query engine | |
| `ECO` | Economic calendar | `ECON` |
| `ASKB` | AI assistant | |
| `CONN` | Data connections | `API` |
| `SETUP` | Re-open boot wizard | |
| `MENU` | Module grid | |
| `HELP` | Command reference modal | |

### Keyboard Shortcuts

| Key | Action |
|---|---|
| `/` | Focus the command bar (Pro Mode) |
| `↑` / `↓` | Cycle command history (when command bar focused) |
| `Enter` | Execute current command |
| `Esc` | Close any open modal |

### BQL Syntax Cheat Sheet

```
SHOW <entity> WHERE <field> <op> <value> [AND <field> <op> <value>...]
```

- **Entities:** `stocks` · `bonds` · `portfolio`
- **Operators:** `=` · `!=` · `>` · `<` · `>=` · `<=`
- **Suffixes:** `K` (thousand) · `M` (million) · `B` (billion) · `T` (trillion) · `%`
- **String values:** wrap in `'single quotes'`

### CSV Export

Most tables have a small `↓ Export CSV` button in the top-right corner — Portfolio holdings, BQL results, FX pairs, Risk contribution, Stress test impact, Yield curve, and Screener. Click → file downloads instantly to your default Downloads folder.

---

## 9. Troubleshooting

**The app shows demo data on every screen.**
You haven't connected any live API keys. Open `CONN <GO>` and either connect feeds or accept demo mode. Demo data is realistic but static; it won't move.

**I entered a key but it says "Connection failed."**
- Check the error message in the red badge — it tells you what went wrong.
- Common causes: copied with leading/trailing spaces, copied a placeholder like "YOUR_API_KEY", key is too short (less than ~10 chars).
- Try regenerating the key on the provider's dashboard.

**The "Updated Xs ago" timestamp is stuck.**
- Click `↻ Refresh` on the status bar
- Check the **Connection pill** in the top-right — if it shows a red dot, one of your feeds failed silently. Click it to investigate.

**Watchlist alert isn't firing.**
- Alerts evaluate against the *current mock price* in demo mode. They fire immediately if the threshold is already crossed, not on a future move.
- In live mode, alerts fire when the polled price crosses the threshold (delay = poll interval, ~15 seconds for equities).

**Pro/Simple toggle isn't sticking.**
- Mode preference is in `localStorage` under `openticker.mode`. If your browser has site data restrictions (private mode, aggressive privacy extensions), the preference may not persist. The Electron desktop app doesn't have this problem.

**BQL says "Bad condition: …"**
- Check spelling of field names (`pe_ratio` not `pe`).
- String values need quotes: `sector = 'Technology'`, not `sector = Technology`.
- Don't put spaces inside the suffix: `100B` not `100 B`.

**I want to wipe everything and start over.**
Open the app's dev console (Ctrl+Shift+I on Windows, Cmd+Option+I on Mac), run:
```js
localStorage.clear()
```
Reload. The boot wizard will reappear.

---

## 10. Glossary

| Term | Meaning |
|---|---|
| **Basis point (bp)** | One-hundredth of a percent. A move from 4.25% to 4.50% is "25 bps." |
| **Beta** | A security's volatility relative to the market. β=1.0 moves with the market; β>1 amplifies; β<1 dampens. |
| **BQL** | The terminal's pseudo-SQL query syntax. Stands for "Bloomberg Query Language." |
| **Drawdown** | Peak-to-trough percentage decline. "Max drawdown" = the worst one in a given period. |
| **Inverted curve** | When short-term bond yields are higher than long-term yields. Historically precedes recessions. |
| **P/E ratio** | Price-to-earnings: stock price divided by annual earnings per share. Lower = cheaper relative to profits. |
| **Sharpe ratio** | Return earned per unit of risk taken. Above 1 is good; above 2 is exceptional; below 0.5 is poor. |
| **Tracking error** | Annualized standard deviation of a portfolio's returns minus a benchmark's. High = your portfolio diverges from the benchmark. |
| **VaR** | Value at Risk. "5% chance the portfolio loses more than $X tomorrow." A downside-quantification metric. |
| **Volatility (σ)** | Annualized standard deviation of returns. Higher = wider swings in either direction. |
| **Yield curve** | Plot of bond yields by maturity. Normally upward-sloping. Inverted/flat shapes carry information. |

---

*End of manual. For source code and contributions, see the GitHub repository.*
