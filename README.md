# XAUUSD Trading Dashboard

**Professional-grade trading platform for XAUUSD (Gold) analysis with Smart Money Concepts (SMC), intermarket correlations, macro news, and institutional position sizing.**

## 📱 Available Platforms

- **Web**: React SPA (cross-platform)
- **Desktop**: Electron (Windows, macOS, Linux)
- **Mobile**: React Native (iOS & Android)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm 8+

### Installation & Development

```bash
# Clone repository
git clone https://github.com/shivansewpersad-beep/xauusd-trading-dashboard.git
cd xauusd-trading-dashboard

# Install all workspaces
npm install

# Run Web Version
npm run dev

# Run Electron Desktop App
npm run dev:electron

# Run Mobile Version (React Native)
npm run dev:mobile
```

## 🏗️ Project Structure

```
.
├── packages/
│   ├── web/              # React web application
│   ├── electron/         # Electron desktop app (Windows, macOS, Linux)
│   └── mobile/           # React Native mobile app (iOS, Android)
├── shared/               # Shared utilities, types, hooks
├── docs/                 # Documentation
└── README.md
```

## 🎯 Features

✅ **Real-time Market Data** - Live XAUUSD, DXY, USOIL, US10Y quotes  
✅ **SMC Analysis** - Smart Money Concepts scanner with pre-built setups  
✅ **Intermarket Correlations** - Live correlation matrix (Gold/DXY/Oil/Yields)  
✅ **Macro News Feed** - Real-time Bloomberg, Reuters, MarketWatch updates  
✅ **Economic Calendar** - High-impact events with countdown timers  
✅ **Position Sizing** - Institutional-grade risk calculator with R:R ratio  
✅ **Multi-Timeframe Analysis** - Chart overlays (SMC Map, FVG, Liquidity Sweeps)  
✅ **Dark Theme** - Professional slate/amber UI optimized for traders  

## 📦 Download & Install

### Windows
```bash
npm run build:electron
# Output: dist/XAUUSD-Trading-Dashboard-Setup-1.0.0.exe
```

### macOS
```bash
npm run build:electron
# Output: dist/XAUUSD-Trading-Dashboard-1.0.0.dmg
```

### Android
```bash
npm run build:mobile
# Output: packages/mobile/android/app/build/outputs/apk/release/*.apk
```

### iOS
```bash
npm run build:mobile
# Output: packages/mobile/ios/build/XAUUSDTradingDashboard.ipa
```

## 🔧 Tech Stack

| Platform | Stack |
|----------|-------|
| **Web** | React 18, Vite, Tailwind CSS |
| **Desktop** | Electron 25+, React, Vite |
| **Mobile** | React Native 0.72+, Expo |
| **Shared** | TypeScript, Zustand (state), Axios (API) |

## 📄 License

MIT © 2024 XAUUSD Trading Dashboard

## 🤝 Contributing

Contributions welcome! Please open an issue or pull request.
