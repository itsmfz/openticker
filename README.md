<div align="center">

# OpenTicker

### *Institutional-grade market intelligence shouldn't cost $25,000 a year.*

[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS-blue)]()
[![License](https://img.shields.io/badge/license-MIT-green)]()
[![Built with Electron](https://img.shields.io/badge/built%20with-Electron-47848F)]()
[![Status](https://img.shields.io/badge/status-beta-orange)]()

**[Download for Windows](#installation) · [Download for macOS](#installation) · [Read the Manual](MANUAL.md)**

</div>

---

## The Mission

For forty years, the most powerful financial-analysis tool on Wall Street has sat behind a $25,000/year paywall. Hedge funds, central banks, and trading desks have it. Independent investors, students, journalists, and anyone curious about how markets actually work — don't.

**OpenTicker exists to close that gap.**

This is a desktop financial terminal that brings the workflow of professional traders to anyone with a laptop. Same command-driven navigation. Same dense, information-rich screens. Same kinds of analysis — single-stock research, portfolio risk decomposition, scenario stress-testing, yield-curve interpretation, macro surveillance, and a query engine that lets you ask questions of market data in something close to plain English.

Two things make it different from the legacy terminal it draws from:

1. **It's free** — open source, free to run, free to modify. Bring your own API keys; we don't sell your data and we don't take a margin.
2. **It's bilingual** — a **Pro Mode** that mimics the dense, expert-only interface professionals know, *and* a **Simple Mode** that translates every chart, every metric, and every workflow into plain English with color-coded signals. Same data, two languages.

The bet behind this project is straightforward: most of finance's complexity is artificial. The data is data. The math isn't that hard. What's been hard is *access*. OpenTicker removes that barrier.

---

## Screenshots

> *(Add screenshots here after first build — recommended: Pro Mode equity dashboard, Simple Mode portfolio view, and the BQL query screen.)*

---

## Quick Start

### Option 1 — Download a release (5 seconds)

1. Grab the installer for your OS from the [Releases page](#)
2. Run it
3. Click **▶ Explore with Demo Data** when the setup wizard appears
4. Start typing `AAPL EQ` or click any module tile

That's it. Every screen works out of the box with realistic sample data.

### Option 2 — Build from source

```bash
git clone <this-repo>
cd <repo>
npm install
npm start
```

To produce installers:

```bash
npm run dist:win   # Windows installer + portable .exe
npm run dist:mac   # macOS .dmg (arm64 + x64)
```

---

## What's Inside

<table>
<tr>
<td width="50%" valign="top">

### Markets

- **Equity dashboards** for every major US ticker — price, fundamentals, analyst ratings, peer comparison, upcoming catalysts
- **Macro surveillance** — GDP, inflation, employment, rates, oil, gold, the dollar, all on one screen with trend sparklines and next-release dates
- **Yield curve visualizer** — overlay today's curve against 1 and 2 years ago; auto-classified Normal / Flat / Inverted with explanation
- **FX rates** for 12 major currency pairs with 90-day charts
- **News feed** with source tags, category filtering, and ticker-aware deep-linking
- **Economic calendar** — every CPI, jobs report, and Fed decision with prev / forecast / actual and historical context

</td>
<td width="50%" valign="top">

### Analysis

- **Portfolio tracker** with P&L, sector allocation, and per-holding return
- **Risk analytics** — VaR, Sharpe, Beta, tracking error, max drawdown, factor exposure, and risk-contribution decomposition
- **Stress testing** — five pre-built macro scenarios plus a custom shock builder with rate / equity / FX sliders
- **Comparison tool** — normalized-return charts across up to 5 securities with best/worst highlighting
- **Equity screener** — six-dimensional filter (market cap, P/E, sector, dividend, performance, region)
- **BQL query engine** — pseudo-SQL queries across stocks, bonds, and your portfolio
- **AI assistant** — context-aware analyst chat that shows its work via underlying BQL

</td>
</tr>
</table>

### The Two Modes

| | **Pro Mode** | **Simple Mode** |
|---|---|---|
| Navigation | Command-line: `AAPL EQ <GO>` | Natural-language search: *"Show me Apple"* |
| Labels | `P/E`, `VaR`, `Sharpe`, `β` | "Price Score", "Estimated Worst Day", "Risk-Adjusted Return Score" |
| Charts | Dense, multi-series, sortable tables | Card-based, color-coded signal dots, plain-English explanations |
| AI | On-demand (`ASKB <GO>`) | Persistent right-side drawer, context-aware prompts |
| For | Active traders, finance professionals, power users | Students, retail investors, anyone learning markets |

Switch any time. Your screen and your data stay put.

---

## Why Bring-Your-Own-API-Key?

OpenTicker doesn't host any market data. We don't sit between you and the providers; we don't take a cut; we don't sell your usage data. Instead, you connect five free-tier APIs and the data flows directly from them to your machine.

| Feed | Recommended Provider | Free Tier |
|---|---|---|
| Equities & Indices | Finnhub | 60 calls/min |
| FX Rates | ExchangeRate-API | 1,500/month |
| Macro & Rates | FRED (St. Louis Fed) | Completely free, unlimited |
| News | NewsAPI | 100/day |
| Economic Calendar | Finnhub Calendar | Reuses Equities key |

Connecting one feed takes 60 seconds. Connecting all five takes about ten minutes. And you can postpone the whole thing indefinitely — the app runs perfectly on bundled demo data while you decide.

**See the [full provider guide](MANUAL.md#7-data-connections--provider-guide) in the manual.**

---

## Architecture

- **Renderer** — React 18 (UMD via local vendor bundle) + Tailwind CSS (utility-first) + JetBrains Mono / Inter typography
- **Shell** — Electron 32 with `contextIsolation: true`, `nodeIntegration: false`
- **Build** — electron-builder, multi-platform (Windows NSIS + portable, macOS DMG universal)
- **State** — React `useState` / `useEffect` only; no external store. Persistence via `localStorage`.
- **Charts** — hand-rolled SVG, no charting library dependency. ~1.3 MB total runtime.
- **Data** — mocked at runtime, with a clean integration surface (the `DATA_FEEDS` config + `testApiKey` function) for swapping in real provider fetches.

The entire UI is a **single HTML file** (~3,000 lines of React JSX) — deliberately. You can read it end-to-end in a sitting; there's no framework abstraction tax, no bundler magic, no transpile step you have to debug. Open `terminal.html` and the program is right there.

---

## Roadmap

- [ ] Live data adapter implementations (real fetch calls per provider)
- [ ] Options chain & options-strategy visualizer
- [ ] Backtesting engine for simple strategies
- [ ] Cryptocurrency feed
- [ ] Earnings transcripts with sentiment analysis
- [ ] Multi-portfolio support
- [ ] Cloud sync (optional, e2e encrypted)
- [ ] Plugin system for community-contributed modules

---

## Contributing

This project is solo right now, but PRs are welcome. The codebase is intentionally small and readable — anyone comfortable with React can ship a meaningful feature in a weekend. Issues with reproduction steps are the most valuable contributions.

---

## License

MIT. Use it. Fork it. Ship it. Charge for it. Just don't pretend you wrote it from scratch.

---

## Acknowledgments

This project would not exist without the financial-data community's commitment to free and accessible APIs — particularly **FRED** (the St. Louis Fed), **Finnhub**, **Alpha Vantage**, and **ExchangeRate-API**. The Bloomberg Terminal interface conventions that inspired the navigation patterns are the work of forty years of trader-led iteration at Bloomberg L.P. — credit where it's due.

---

<div align="center">

**Markets shouldn't only be legible to people who can afford a Bloomberg subscription.**
**Welcome to OpenTicker.**

</div>
