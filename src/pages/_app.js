import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Sample App</title>
            <meta charSet="utf-8" />
        </Head>
        <AppProvider i18n={translations}>
            <Component { ...pageProps }/>
        </AppProvider>
    </>
);

export default App;