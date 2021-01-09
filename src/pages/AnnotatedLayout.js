import React, { useState } from 'react';
import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    SettingToggle,
    Stack,
    TextField,
    TextStyle,
} from '@shopify/polaris';

const initialState = {
    discount: '10%',
    enabled: false,
};

const AnnotatedLayout = () => {
    const [fields, setFields] = useState(initialState);

    const handleSubmit = () => {
        setFields({...fields, discount});
        console.log('submission', fields);
    };
    const handleChange = (field) => (value) => setFields({ [field]: value });
    const handleToggle = () => setFields({...fields, enabled: !fields.enabled });

    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';
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
                <Layout.AnnotatedSection
                    title="Price updates"
                    description="Temporarily disable all Sample App price updates"
                >
                    <SettingToggle
                        action={{
                            content: contentStatus,
                            onAction: handleToggle,
                        }}
                        enabled={enabled}
                        >
                            This setting is{' '}
                        <TextStyle variation="strong">{textStatus}</TextStyle>.
                    </SettingToggle>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    );
};

export default AnnotatedLayout;
