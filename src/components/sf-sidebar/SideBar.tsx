import React, { useRef, Ref } from 'react';
import { FunctionComponent } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';

import { useSelector } from 'react-redux';
import { toggleMenuSelector } from '../MainMenuSidebar/MainMenuSlice';

import './sidebar-menu.css';

export interface SidebarProps {
    id?: string;
    type?: 'Over' | 'Push' | 'Slide' | 'Auto';
    position?: 'Left' | 'Right';
    width?: 'auto' | string;
    showBackdrop?: boolean;
    closeOnDocumentClick?: boolean;
    children: JSX.Element;
}

const defaultProps: SidebarProps = {
    id: 'default-sidebar',
    type: 'Over',
    position: 'Left',
    width: '220px',
    showBackdrop: false,
    closeOnDocumentClick: true,
    children: <h1>hello</h1>
};

export const SideBar: FunctionComponent<SidebarProps> = ({
    id,
    type,
    position,
    width,
    showBackdrop,
    closeOnDocumentClick,
    children
}) => {
    const menuProps = useSelector(toggleMenuSelector);

    const sidebarRef = useRef(null);

    const onCreate = () => {
        sidebarRef.current.element.style.visibility = visibilityValue;
    };

    const visibilityValue = menuProps.isShown ? 'visible' : 'hidden';
    if (sidebarRef.current !== null) {
        sidebarRef.current.toggle();
    }

    return (
        <>
            <div className="slider-menu">
                <SidebarComponent
                    id="default-sidebar"
                    type={type}
                    created={onCreate}
                    style={{ visibility: visibilityValue }}
                    position={position}
                    showBackdrop={showBackdrop}
                    ref={sidebarRef}
                    width={width}
                    target={'.content'}>
                    <div className="main-menu">{children}</div>
                </SidebarComponent>
            </div>
        </>
    );
};

SideBar.defaultProps = defaultProps;
