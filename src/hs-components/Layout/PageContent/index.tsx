import * as React from 'react';
import { useCss } from 'react-use';
import { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

export interface PageContent {
    children: JSX.Element;
}

const PageContent: FunctionComponent<PageContent> = ({ children }) => {
    const className = useCss({
        display: 'inline-block',
        verticalAlign: 'top',
        overflowY: 'scroll',
        paddingTop: '15px',
        height: '95%',
        minHeight: '95%'
    });

    return (
        <Container className={className} fluid>
            <div>{children}</div>
        </Container>
    );
};

export default PageContent;
