Welcome to BlockDesk

# Getting Started

To run this application:

## 1. Make sure you have Node.js (>= v8) installed.

## 2. Install Ganache
# Option A: Ganache-cli

```bash
npm install -g ganache-cli
ganache-cli <options>
```

# Option B: Ganache Download (either)
- https://archive.trufflesuite.com/ganache/
- https://github.com/ConsenSys-archive/ganache-ui


## 3. Installing MetaMask

# Option A: Browser Extension (Recommended)
1. Visit [MetaMask.io](https://metamask.io/)
2. Click "Download" and select your browser
3. Add the extension to your browser
4. Create a new wallet or import an existing one
5. Follow the setup process and **SAVE YOUR SEED PHRASE SECURELY**

# Option B: Mobile App
1. Download MetaMask from App Store (iOS) or Google Play (Android)
2. Set up your wallet following the in-app instructions

### For Development (Local Blockchain)
```javascript
// Add local network to MetaMask Networks
Network Name: {Localhost}
RPC URL: http://127.0.0.1:8545  //make sure that the URL is the same
Chain ID: 1337 (or your local chain ID)
Currency Symbol: ETH
```
- For local development: Use Ganache built-in accounts


## 4. Manager account and .env
- Make a copy the blockchain/manager.txt.example and remove the .example
- Add an address to the manager.txt to give it the manager role
- Add .env file for Pinata IPFS


## 5. Truffle && run vite on port 3000

```bash
npm run startup
```

### Manual Startup 
```bash 
npm install
cd blockchain
truffle compile
truffle migrate
cd ..
npm run dev
```