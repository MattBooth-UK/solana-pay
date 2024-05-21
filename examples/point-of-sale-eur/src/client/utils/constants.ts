import { clusterApiUrl, PublicKey } from '@solana/web3.js';

export const MAX_CONFIRMATIONS = 32;

export const NON_BREAKING_SPACE = '\u00a0';

// GenesysGo's devnet endpoint doesn't retain historical transactions
export const DEVNET_ENDPOINT = clusterApiUrl('devnet');

// Use Phantom's mainnet endpoint instead of GenesysGo (auth issue) or default (ratelimits)
export const MAINNET_ENDPOINT = 'https://solana-mainnet.phantom.tech';

// Mint DUMMY tokens on devnet @ https://spl-token-faucet.com
export const DEVNET_DUMMY_MINT = new PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr');

export const MAINNET_USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');

export const MAINNET_EURC_MINT = new PublicKey('HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr');

export const DEVNET_USDC_MINT = new PublicKey('4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU');

export const DEVNET_EURC_MINT = new PublicKey('HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr');
