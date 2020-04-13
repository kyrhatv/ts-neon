import * as React from 'react';
import { useCss } from 'react-use';
import { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

export interface PageContent {
    children: JSX.Element;
}

const PageContent: FunctionComponent<PageContent> = ({ children }) => {
    const className = useCss({
        height: '100%',
        minHeight: '100%',
        marginTop: '15px'
    });

    return (
        <Container className={className} fluid>
            <div>{children}</div>
        </Container>
    );
};

export default PageContent;
