import '../styles/globals.css'
import { ChainId, ThirdwebProvider, useAddress, useNetworkMismatch, useNetwork } from '@thirdweb-dev/react';
import { AppProps } from 'next/app';
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>

  <Component {...pageProps} />
  </ThirdwebProvider>

  )
}
export default MyApp
