import "@walletconnect/react-native-compat";

import {
  createAppKit,
  solana,
  type AppKitNetwork
} from '@reown/appkit-react-native';
import { EthersAdapter } from '@reown/appkit-ethers-react-native';
import { PhantomConnector, SolanaAdapter, SolflareConnector } from '@reown/appkit-solana-react-native';

// Import EVM chains
import { mainnet, polygon, arbitrum } from 'viem/chains';
import storage from '../utils/StorageUtil';

// Get your project ID from https://dashboard.reown.com/
const projectId = 'YOUR_PROJECT_ID';

// Initialize adapters
const ethersAdapter = new EthersAdapter();
const solanaAdapter = new SolanaAdapter();

// Create and export AppKit instance
export const appKit = createAppKit({
  projectId,

  // Define supported networks
  networks: [
    mainnet,    // Ethereum
    polygon,    // Polygon
    arbitrum,   // Arbitrum
    solana      // Solana
  ],
  storage,

  defaultNetwork: mainnet,

  // Add adapters for blockchain interactions
  adapters: [ethersAdapter, solanaAdapter],

  // Your dApp metadata
  metadata: {
    name: 'Wallet Connect App',
    description: 'A Web3 app with wallet integration',
    url: 'https://myapp.com',
    icons: [''],
  },

  includeWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
    'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393', // Phantom
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // Trust Wallet
    '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369', // Rainbow
    // Add wallet IDs from https://walletguide.walletconnect.network/
  ],

  extraConnectors: [
    new PhantomConnector({ cluster: 'mainnet-beta' }), // Or 'devnet', 'testnet'
    new SolflareConnector({ cluster: 'mainnet-beta' }) // Or 'devnet', 'testnet'
  ],


  // Optional: Disable default features
  features: {
    socials: false,
    swaps: false,
    onramp: false,
  }
});