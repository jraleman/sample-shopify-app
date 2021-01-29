import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';
import { Provider } from '@shopify/app-bridge-react';
import ClientRouter from '../components/ClientRouter';

const {SHOPIFY_API_KEY: apiKey} = process.env;

const App = ({ Component, pageProps, shopOrigin }) => {
    const config = { 
        apiKey, 
        shopOrigin, 
        forceRedirect: true 
    };
    return (
        <>
            <Head>
                <title>Sample App</title>
                <meta charSet="utf-8" />
            </Head>
            <Provider config={config}>
                <ClientRouter />
                <AppProvider i18n={translations}>
                    <Component { ...pageProps }/>
                </AppProvider>
            </Provider>
        </>
    );
};

App.getInitialProps = async ({ ctx }) => {
    return {
      shopOrigin: ctx.query.shop,
    }
};

export default App;