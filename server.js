require('isomorphic-fetch');

const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth, verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();
const { PORT, NODE_ENV, SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

const port = parseInt(PORT, 10) || 3000;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();
    server.use(session({ secure: true, sameSite: 'none' }, server));
    server.keys = [SHOPIFY_API_SECRET_KEY];
    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
    });
    server.use(
        createShopifyAuth({
          apiKey: SHOPIFY_API_KEY,
          secret: SHOPIFY_API_SECRET_KEY,
          scopes: ['read_products'],
          afterAuth(ctx) {
            const { request, redirect, session } = ctx;
            const urlParams = new URLSearchParams(request.url);
            const shop = urlParams.get('shop');
            redirect(`/?shop=${shop}`);
          },
        }),
      );
    server.use(verifyRequest());
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
