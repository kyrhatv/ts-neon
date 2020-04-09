import React from 'react';

import { useTranslation } from 'react-i18next';

import { PageContainer, PageHeader, PageContent } from '../../../../hs-components/Layout';

export function Dashboard() {
    const [t] = useTranslation();

    return (
        <PageContainer pageName={'priest'}>
            <>
                <PageHeader headerName={t('priest')} iconName={'RELIC_SYMBOL'} />
                <PageContent pageName={'priest'}>
                    <>
                        <h1>HELLO </h1>
                    </>
                </PageContent>
            </>
        </PageContainer>
    );
}
