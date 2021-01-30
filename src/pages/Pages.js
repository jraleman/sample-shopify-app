import React, { useState } from 'react';
import { 
    EmptyState,
    Layout,
    Page,
    TextStyle
} from '@shopify/polaris';
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';

const Pages = () => {
    const [isResourceOpen, setIsResourceOpen] = useState(false);
    
    const openResource = () => setIsResourceOpen(true);
    const closeResource = () => setIsResourceOpen(false);
    const toggleResource = () => setIsResourceOpen(r => !r);
    const handleResourceSelection = (r) => {
        const idsFromResources = r && r.selection.map(({ id }) => id);
        console.log('resource: ', r);
        console.log('idsFromResources: ', idsFromResources);
        closeResource();
    };

    const action = {
        content: 'Select products',
        onAction: openResource,
    };
    const titlePrimaryAction = { content: 'Select products' };
    const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
    return (
        <Page>
            <TitleBar
                title="Sample App"
                primaryAction={titlePrimaryAction}
            />
            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={isResourceOpen}
                onSelection={handleResourceSelection}
                onCancel={closeResource}
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
};

export default Pages;
