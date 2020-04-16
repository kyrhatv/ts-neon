import * as React from 'react';
import { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

import './style.css';

export interface PageContent {
    children: JSX.Element;
}

const PageContent: FunctionComponent<PageContent> = ({ children }) => {
    return (
        <Container className="page-content" fluid>
            <div>{children}</div>
        </Container>
    );
};

export default PageContent;
