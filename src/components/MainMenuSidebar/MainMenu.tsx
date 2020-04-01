import React, { useRef } from 'react';
import { FunctionComponent } from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import './sidebar-menu.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Sidebar } from '../Sidebar/Sidebar';
import Icon from '../Icon/Icon';
import IconBar from '../IconBar';

export interface NavStruct {
    struct: NavOption[];
}

export interface NavOption {
    key: string;
    link: string;
    children: NavItem[] | null;
}

export interface NavItem {
    key: string;
    link: string;
}

export const MainMenu: FunctionComponent<NavStruct> = ({ struct }) => {
    const menuItems = [
        {
            text: 'Overview',
            iconCss: 'icon-globe icon',
            items: [{ text: 'All Data' }, { text: 'Category2' }, { text: 'Category3' }]
        },
        {
            text: 'Notification',
            iconCss: 'icon-bell-alt icon',
            items: [{ text: 'Message' }, { text: 'Facebook' }, { text: 'Twitter' }]
        },
        {
            text: 'Comments',
            iconCss: 'icon-comment-inv-alt2 icon',
            items: [{ text: 'Category1' }, { text: 'Category2' }, { text: 'Category3' }]
        },
        {
            text: 'Bookmarks',
            iconCss: 'icon-bookmark icon',
            items: [{ text: 'All Comments' }, { text: 'Add Comments' }, { text: 'Delete Comments' }]
        }
    ];

    const mediaQuery = '(min-width: 600px)';

    const enableDock = true;
    const dockSize = '52px';
    const width = '220px';
    const target = '.main-content';

    const sidebarRef = useRef(null);

    const openClick = () => {
        sidebarRef.current.toggle();
    };

    return (
        <>

        <IconBar></IconBar>
            <Row>
                <Col md={10}></Col>
                <Col md={2}>
                    <Button onClick={openClick}>
                        <Icon iconName="sliders-h"></Icon>
                    </Button>
                </Col>
            </Row>

            {/* <SidebarComponent
                id="sidebar-menu"
                ref={sidebarRef}
                enableDock={enableDock}
                mediaQuery={mediaQuery}
                dockSize={dockSize}
                width={width}
                target={target}>
                <div className="main-menu">
                    <MenuComponent items={menuItems} orientation="Vertical" cssClass="dock-menu"></MenuComponent>
                </div>
            </SidebarComponent>

            <Sidebar></Sidebar> */}
        </>
    );
};
