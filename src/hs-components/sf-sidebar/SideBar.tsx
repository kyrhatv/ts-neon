import React, { useRef, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { Button, ButtonGroup, ButtonToolbar, ToggleButton, ToggleButtonGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './sidebar-menu.css';
import Icon from '../Icon/Icon';

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

    const pinMenuButton = (
        <Button variant="primary" onClick={onPinChanged}>
            {/* {!isPinned ? (
                <span className="fa-layers fa-fw" style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon="thumbtack" />
                    <FontAwesomeIcon icon="slash" inverse transform="shrink-6" color="white" />
                </span>
            ) : (
                <Icon iconName="thumbtack" />
                )} */}
                <Icon iconName="thumbtack" />
        </Button>
    );

    return (
        <>
            <SidebarComponent
                id={id}
                className={'sidebar'}
                type={type}
                position={position}
                enableGestures={false}
                closeOnDocumentClick={false}
                showBackdrop={showBackdrop}
                ref={sidebarRef}
                width={width}
                target={'.content'}>
                <Col>
                    <Row>{children}</Row>
                </Col>
                <Row className="footer">
                    {position === 'Left' ? (
                        <>
                            <Col md={9}></Col>
                            <Col md={3}>{pinMenuButton}</Col>
                        </>
                    ) : (
                        <>
                            <Col md={3}>
                                <Col md={3}>{pinMenuButton}</Col>
                            </Col>
                            <Col md={9}></Col>
                        </>
                    )}
                </Row>
            </SidebarComponent>
        </>
    );
};

SideBar.defaultProps = defaultProps;
