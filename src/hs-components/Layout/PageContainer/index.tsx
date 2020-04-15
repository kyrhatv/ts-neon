import * as React from 'react';
import { useCss } from 'react-use';
import { FunctionComponent } from 'react';
import { Container } from 'react-bootstrap';

export interface PageContainerProps {
    pageName: string;
    children: JSX.Element;
}

const PageContainer: FunctionComponent<PageContainerProps> = ({ pageName, children }) => {
    const className = useCss({
        marginTop: '15px'
    });

    return (
        <Container className={className} fluid>
            {children}
        </Container>
    );
};

export default PageContainer;
