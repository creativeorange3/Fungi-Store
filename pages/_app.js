import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import { NFTProvider } from '../context/NFTContext';
import '../styles/globals.css';
import { Navbar, Footer } from '../components';

const MyApp = ({ Component, pageProps }) => (
  <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/0d1696bb3c.js" crossorigin="anonymous" />

    </ThemeProvider>
  </NFTProvider>
);

export default MyApp;
