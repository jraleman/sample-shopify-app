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

app.prepare().then(() => {});