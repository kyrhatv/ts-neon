import React, { useState, useRef } from 'react';
import { FunctionComponent } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/TimeSphere_icon_30.svg';
import { useCss } from 'react-use';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import './sidebar-menu.css';
import { Button } from 'react-bootstrap';

// export interface NavStruct {
//     struct: NavOption[];
// }

// export interface NavOption {
//     key: string;
//     link: string;
//     children: NavItem[] | null;
// }

// export interface NavItem {
//     key: string;
//     link: string;
// }

export const Sidebar: FunctionComponent = ({  }) => {
    const [t, i18n] = useTranslation();
    const [showMenu, setshowMenu] = useState(false);
    const style = useCss({
        backgroundColor: '#000000',
        color: 'white'
    });

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
        },
        {
            text: 'Images',
            iconCss: 'icon-picture icon',
            items: [{ text: 'Add Name' }, { text: 'Add Mobile Number' }, { text: 'Add Imaage' }]
        },
        {
            text: 'Users ',
            iconCss: 'icon-user icon',
            items: [{ text: 'Mobile1' }, { text: 'Mobile2' }, { text: 'Telephone' }]
        },
        {
            text: 'Settings',
            iconCss: 'icon-eye icon',
            items: [{ text: 'Change Profile' }, { text: 'Add Name' }, { text: 'Add Details' }]
        },
        {
            text: 'Info',
            iconCss: 'icon-tag icon',
            items: [{ text: 'Facebook' }, { text: 'Mobile' }]
        }
    ];

    const mediaQuery = '(min-width: 600px)';

    const AccountMenuItem = [
        {
            text: 'Account',
            items: [{ text: 'Profile' }, { text: 'Sign out' }]
        }
    ];
    const enableDock = true;
    const dockSize = '52px';
    const width = '220px';
    const target = '.main-content';

    const sidebarRef = useRef(null);

    //open the sidebar
    const openClick = () => {
        sidebarRef.current.toggle();
    };

    return (
        <SidebarComponent
            id="sidebar-menu"
            ref={sidebarRef}
            position="Right"
            enableDock={enableDock}
            mediaQuery={mediaQuery}
            dockSize={dockSize}
            width={width}
            target={target}>
            <div className="main-menu">
                <p className="main-menu-header">MAIN</p>
                <MenuComponent items={menuItems} orientation="Vertical" cssClass="dock-menu"></MenuComponent>
            </div>
            <div className="action">
                <p className="main-menu-header">ACTION</p>
                <button className="e-btn action-btn" id="action-button">
                    + Button
                </button>
            </div>
        </SidebarComponent>
    );
};
