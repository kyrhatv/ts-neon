import * as React from 'react';
import { useCss } from 'react-use';
import { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

export interface PageContent {
    pageName: string;
    children: JSX.Element;
}

const PageContent: FunctionComponent<PageContent> = ({ pageName, children }) => {
    const className = useCss({
        height: '100%',
        minHeight: '100%'
    });

    return (
        <Container className={className} fluid>
            {children}
        </Container>
    );
};

export default PageContent;
