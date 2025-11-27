# React Native WalletConnect Example

A simple React Native application demonstrating wallet connection and disconnection functionality using Reown.

## Features

- 🔗 Connect to Web3 wallets
- 🔌 Disconnect wallet functionality
- 📱 Built with React Native
- 🎨 Clean and simple UI
- ⚡ Powered by Reown AppKit

## Prerequisites

Before you begin, ensure you have:

- Node.js installed (v16 or higher recommended)
- React Native development environment set up
- A Reown Project ID

## Getting Your Project ID

1. Visit [Reown Dashboard](https://dashboard.reown.com/)
2. Create a new project or select an existing one
3. Copy your Project ID
4. Paste it in the `AppKitConfig` file in this project

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure your Project ID:
   - Open the `AppKitConfig` file
   - Replace the placeholder with your Project ID from Reown Dashboard

4. Run the application:

For iOS:
```bash
npx react-native run-ios
# or
npm run ios
```

For Android:
```bash
npx react-native run-android
# or
npm run android
```

## Usage

1. Open the app on your device/emulator
2. Tap the "Connect Wallet" button
3. Select your preferred wallet from the list
4. Approve the connection in your wallet app
5. Use the "Disconnect" button to end the session

## Project Structure

```
.
├── src/
│   ├── components/
│   ├── config/
│   │   └── AppKitConfig.ts
│   └── ...
├── App.js
├── package.json
└── README.md
```

## Built With

- [React Native](https://reactnative.dev/) - Mobile application framework
- [Reown AppKit](https://reown.com/) - Wallet connection library

## Documentation

For detailed setup instructions and advanced configuration, please refer to the official Reown AppKit documentation:

📚 [Reown AppKit React Native Documentation](https://docs.reown.com/appkit/react-native/core/installation)

## Troubleshooting

If you encounter issues:

1. Ensure your Project ID is correctly configured
2. Check that all dependencies are properly installed
3. Verify your React Native environment is set up correctly
4. Consult the [Reown documentation](https://docs.reown.com/appkit/react-native/core/installation) for platform-specific issues

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the Reown team for the AppKit SDK
- React Native community for excellent documentation

---

**Need help?** Check out the [Reown Documentation](https://docs.reown.com/) or open an issue in this repository.