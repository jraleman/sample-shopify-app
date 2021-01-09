import React, { useState } from 'react';
import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    TextField,
} from '@shopify/polaris';

const AnnotatedLayout = () => {
    const [fields, setFields] = useState({
        discount: '10%',
    });

    const handleSubmit = () => {
        setFields({...fields, discount});
        console.log('submission', fields);
    };

    const handleChange = (field) => (value) => setFields({ [field]: value });

    return (
        <Page>
            <Layout>
            <Layout.AnnotatedSection
                title="Default discount"
                description="Add a product to Sample App, it will automatically be discounted."
            >
                <Card sectioned>
                <Form onSubmit={handleSubmit}>
                    <FormLayout>
                    <TextField
                        value={discount}
                        onChange={handleChange('discount')}
                        label="Discount percentage"
                        type="discount"
                    />
                    <Stack distribution="trailing">
                        <Button primary submit>
                        Save
                        </Button>
                    </Stack>
                    </FormLayout>
                </Form>
                </Card>
            </Layout.AnnotatedSection>
            </Layout>
        </Page>
    );
};

export default AnnotatedLayout;
