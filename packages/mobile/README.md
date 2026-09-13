# React Native Mobile App (Android & iOS)

Professional XAUUSD trading dashboard for mobile platforms.

## Features

✅ Native Android and iOS apps  
✅ Bottom tab navigation (Dashboard, Scanner, Calendar, Settings)  
✅ Real-time market ticker  
✅ SMC scanner with signal alerts  
✅ Position sizing calculator  
✅ Offline-capable with local data storage  

## Development

### Android

```bash
npm install
npm run android
```

### iOS

```bash
npm install
npm run pod:install
npm run ios
```

## Building for Distribution

### Android APK

```bash
npm run build:android-apk
# Output: dist/XAUUSD-Trading-Dashboard.apk
```

### iOS IPA

```bash
npm run build:ios
# Output: ./ios/build/XAUUSDTradingDashboard.ipa
```

## Installation

### Android Users
1. Download APK from GitHub Releases
2. Enable "Unknown Sources" in Settings > Security
3. Open APK file and install

### iOS Users
1. Download IPA from GitHub Releases
2. Use Xcode or iOS App Installer to sideload
3. Or: Deploy to TestFlight for beta testing
