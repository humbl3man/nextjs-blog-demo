import { AppProps } from 'next/app';
import Header from '@components/Header';
import App from '../context/App';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Header />
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;
