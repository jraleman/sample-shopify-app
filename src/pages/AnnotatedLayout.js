import React from 'react';
import { Card, Layout, Page } from '@shopify/polaris';

const AnnotatedLayout = () => (
    <Page>
        <Layout>
            <Layout.AnnotatedSection
                title="Default discount"
                description="Add a product to Sample App, it will automatically be discounted."
            >
                <Card sectioned>
                    <div>
                        Annotated layout page
                    </div>
                </Card>
            </Layout.AnnotatedSection>
        </Layout>
    </Page>
);

export default AnnotatedLayout;
