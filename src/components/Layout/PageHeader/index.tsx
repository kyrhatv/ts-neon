import * as React from 'react';
import { useCss } from 'react-use';
import { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CustomIcons from '../../CustomIcons/CustomIcons';

export interface IconProps {
    iconName: string;
    headerName: string;
}

const PageHeader: FunctionComponent<IconProps> = ({ iconName, headerName }) => {
    const style = useCss({
        paddingBottom: '15px',
    });

    return (
        <Container className={style} fluid>
            <Row>
                <Col md={1}>
                    <CustomIcons iconName={iconName} height={'60px'} width={'60px'} isLink={true} />
                </Col>
                <Col md={11}>
                    <h1>{headerName}</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default PageHeader;
