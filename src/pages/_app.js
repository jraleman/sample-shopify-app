import App from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Sample App</title>
            <meta charSet="utf-8" />
        </Head>
        <Component { ...pageProps }/>
    </>
);

export default App;