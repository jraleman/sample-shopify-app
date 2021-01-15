import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';
import { Provider } from '@shopify/app-bridge-react';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Sample App</title>
            <meta charSet="utf-8" />
        </Head>
        <Provider>
            <AppProvider i18n={translations}>
                <Component { ...pageProps }/>
            </AppProvider>
        </Provider>
    </>
);

export default App;