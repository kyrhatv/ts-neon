import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Icon from '../../../../hs-components/Icon/Icon';
import TextToSpeech from '../../../../hs-components/TextToSpeech/TextToSpeech';
import { useTranslation } from 'react-i18next';

import { PageContainer, PageHeader, PageContent } from '../../../../hs-components/Layout';

export function Priest() {
    const [t] = useTranslation();

    const [isSpeaking, setIsSpeaking] = useState(false);

    return (
        <PageContainer pageName={'priest'}>
            <>
                <PageHeader headerName={t('priest')} iconName={'RELIC_SYMBOL'} />
                <PageContent pageName={'priest'}>
                    <>
                        <Button
                            onClick={() => {
                                setIsSpeaking(!isSpeaking);
                            }}>
                            <Icon iconName={'microphone'} />
                        </Button>
                        {isSpeaking ? <TextToSpeech text={'NOT DEFAULT VALUE'} rate={0.8} pitch={0.5} /> : null}
                        <Icon size={'lg'} prefix={'fas'} iconName={'coffee'} flip={'both'} isSpinning />
                    </>
                </PageContent>
            </>
        </PageContainer>
    );
}
