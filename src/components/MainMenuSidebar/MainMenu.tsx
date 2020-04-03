import React, { useRef } from 'react';
import { FunctionComponent } from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import './sidebar-menu.css';
import { Button, Col, Row } from 'react-bootstrap';
import SideBar from '../sf-sidebar';
import Icon from '../Icon/Icon';
import IconBar from './IconBar';
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

    const width = '220px';
    const target = '.content';

    const sidebarRef = useRef(null);

    const onCreate = () => {
        sidebarRef.current.element.style.visibility = '';
    };

    const openClick = () => {
        sidebarRef.current.toggle();
    };

    return (
        <>
            <Button onClick={openClick}>
                <Icon iconName="sliders-h"></Icon>
            </Button>
            <div>
                <div className="left-icon-menu">
                    <IconBar></IconBar>
                </div>
                <div className="slider-menu">
                    {/* ref={sidebarRef} */}
                    {/* <SideBar>
                        <>HELLO WORLD</>
                    </SideBar> */}
                    <SidebarComponent
                        id="default-sidebar"
                        type="Push"
                        created={onCreate}
                        style={{ visibility: 'hidden' }}
                        ref={sidebarRef}
                        width={width}
                        target={target}>
                        <div className="main-menu">
                            <span>ds</span>
                        </div>
                    </SidebarComponent>
                </div>
            </div>
        </>
    );
};
