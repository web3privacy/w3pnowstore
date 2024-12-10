// Add this debugging at the top of the file
console.log('=== Environment Variables Debug ===');
console.log({
  commerceKey: process.env.COINBASE_COMMERCE_API_KEY,
  onchainKitKey: process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY,
  nodeEnv: process.env.NODE_ENV,
});

// Add your API key from Coinbase Commerce
export const COINBASE_COMMERCE_API_KEY =
  process.env.COINBASE_COMMERCE_API_KEY || '';
// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://onchain-commerce-template.vercel.app';
// Add your API KEY from the Coinbase Developer Portal
export const NEXT_PUBLIC_ONCHAINKIT_API_KEY =
  process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || '';

// Add validation
if (!NEXT_PUBLIC_ONCHAINKIT_API_KEY) {
  console.warn('Missing NEXT_PUBLIC_ONCHAINKIT_API_KEY environment variable');
}

if (!COINBASE_COMMERCE_API_KEY) {
  console.warn('Missing COINBASE_COMMERCE_API_KEY environment variable');
}
