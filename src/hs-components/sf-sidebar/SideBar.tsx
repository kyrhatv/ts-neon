import React, { useRef, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Icon from '../Icon/Icon';
import InlineSpace from '../hs-component-space';
import './sidebar-menu.css';

export interface SidebarProps {
    id?: string;
    isShown: boolean;
    type?: 'Over' | 'Push' | 'Slide' | 'Auto';
    position?: 'Left' | 'Right';
    width?: 'auto' | string;
    showBackdrop?: boolean;
    isPinned: boolean;
    closeOnDocumentClick?: boolean;
    children: JSX.Element;
    onPinChanged: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const defaultProps: SidebarProps = {
    id: 'default-sidebar',
    isShown: false,
    type: 'Over',
    position: 'Left',
    width: '220px',
    showBackdrop: false,
    isPinned: false,
    closeOnDocumentClick: true,
    children: <h1>hello</h1>,
    onPinChanged: () => {
        console.log('hello');
    }
};

export const SideBar: FunctionComponent<SidebarProps> = ({
    id,
    isShown,
    type,
    position,
    width,
    showBackdrop,
    isPinned,
    closeOnDocumentClick,
    onPinChanged,
    children
}) => {
    const sidebarRef = useRef(null);
    const [t] = useTranslation();

    useEffect(() => {
        if (sidebarRef.current !== null && sidebarRef.current.isRendered) {
            sidebarRef.current.toggle();
        }
    }, [isShown]);

    useEffect(() => {
        if (sidebarRef.current !== null && sidebarRef.current.isRendered) {
            sidebarRef.current.properties.type = type;
            sidebarRef.current.toggle();
        }
    }, [type]);

    useEffect(() => {
        if (sidebarRef.current !== null && sidebarRef.current.isRendered) {
            sidebarRef.current.properties.closeOnDocumentClick = closeOnDocumentClick;
        }
    }, [closeOnDocumentClick]);

    return (
        <SidebarComponent
            id={id}
            className={'sidebar'}
            type={type}
            position={position}
            enableGestures={false}
            closeOnDocumentClick={closeOnDocumentClick}
            showBackdrop={showBackdrop}
            ref={sidebarRef}
            width={width}
            target={'.content'}>
            <Col>
                <Row>{children}</Row>
            </Col>
            <Container fluid>
                <Row className="footer">
                    <Col md={12}>
                        <Button variant="primary" onClick={onPinChanged} block>
                            <Icon iconName="thumbtack" />
                            <InlineSpace />
                            {isPinned ? t('menus.unpin') : t('menus.pin')}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </SidebarComponent>
    );
};

SideBar.defaultProps = defaultProps;
