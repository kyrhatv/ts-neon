import * as React from 'react';
import { PageContainer, PageHeader, PageContent } from '../../../components/Layout';
import { useTranslation } from 'react-i18next';

export function Mage() {
    const [t] = useTranslation();

    return (
        <PageContainer pageName={'mage'}>
            <>
                <PageHeader headerName={t('mage')} iconName={'MAGE_HAT'} />
                <PageContent pageName={'mage'}>
                    <>
                        <h1>sdlkasjdlkasj</h1>
                    </>
                </PageContent>
            </>
        </PageContainer>
    );
}
