import React, { useRef } from 'react';
import { FunctionComponent } from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import './sidebar-menu.css';

export const Sidebar: FunctionComponent = ({}) => {
    const menuItems = [
        {
            text: 'Overview',
            iconCss: 'icon-globe icon',
            items: [{ text: 'All Data' }, { text: 'Category2' }, { text: 'Category3' }]
        }
    ];

    const mediaQuery = '(min-width: 600px)';
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
        </SidebarComponent>
    );
};
