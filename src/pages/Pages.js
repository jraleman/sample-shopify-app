import { 
    EmptyState,
    Layout,
    Page,
    TextStyle
} from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
const action = {
    content: 'Select products',
    onAction: () => console.log('clicked'),
};
const titlePrimaryAction = { content: 'Select products' };

const Pages = () => (
    <Page>
        <TitleBar
            title="Sample App"
            primaryAction={titlePrimaryAction}
        />
        <Layout>
            <TextStyle variation="positive">
                Sample app using React and Next.js
            </TextStyle>
            <EmptyState
                heading="Discount your products temporarily"
                action={action}
                image={img}
            >
                <p>Select products to change their price temporarily.</p>
            </EmptyState>
        </Layout>
    </Page>
);

export default Pages;
