# Onchain Commerce Template

An Onchain Commerce Template build with [OnchainKit](https://onchainkit.xyz), and ready to be deployed to Vercel.

Have fun! ⛵️

<br />

## Setup

To ensure all components work seamlessly, set the following environment variables in your `.env` file using `.local.env.example` as a reference.

You can find the API key on the [Coinbase Developer Portal's OnchainKit page](https://portal.cdp.coinbase.com/products/onchainkit). If you don't have an account, you will need to create one. 

You can find your Coinbase Commerce API key after creating an account on [Coinbase Commerce](https://beta.commerce.coinbase.com/). If you don't have an account, you will need to create one. 

```sh
# See https://portal.cdp.coinbase.com/products/onchainkit
NEXT_PUBLIC_ONCHAINKIT_API_KEY="GET_FROM_COINBASE_DEVELOPER_PLATFORM"

# See https://beta.commerce.coinbase.com/
NEXT_PUBLIC_COINBASE_COMMERCE_API_KEY="GET_FROM_COINBASE_COMMERCE"
```
<br />

## Locally run



```sh
# Install bun in case you don't have it
bun curl -fsSL <https://bun.sh/install> | bash

# Install packages
bun i

# Run Next app
bun run dev
```
<br />

## Resources

- [OnchainKit documentation](https://onchainkit.xyz)

<br />

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
