import { withRouter } from 'next/router';
import { ClientRouter as AppBridgeClientRouter } from '@shopify/app-bridge-react';

const ClientRouter = ({ router }) => <AppBridgeClientRouter history={router} />;

export default withRouter(ClientRouter);
