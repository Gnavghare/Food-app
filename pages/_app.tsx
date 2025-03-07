import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp; 