import React, { useRef } from 'react';
import { FunctionComponent } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { usePrevious } from '../../hs-utils/hs-hooks';

import './sidebar-menu.css';

export interface SidebarProps {
    id?: string;
    isShown: boolean;
    type?: 'Over' | 'Push' | 'Slide' | 'Auto';
    position?: 'Left' | 'Right';
    width?: 'auto' | string;
    showBackdrop?: boolean;
    closeOnDocumentClick?: boolean;
    children: JSX.Element;
}

const defaultProps: SidebarProps = {
    id: 'default-sidebar',
    isShown: false,
    type: 'Over',
    position: 'Left',
    width: '220px',
    showBackdrop: false,
    closeOnDocumentClick: true,
    children: <h1>hello</h1>
};

export const SideBar: FunctionComponent<SidebarProps> = ({
    id,
    isShown,
    type,
    position,
    width,
    showBackdrop,
    closeOnDocumentClick,
    children
}) => {
    const prevIsShown = usePrevious(isShown);

    const sidebarRef = useRef(null);

    const onCreate = () => {
        sidebarRef.current.element.style.visibility = visibilityValue;
    };

    const visibilityValue = isShown ? 'visible' : 'hidden';

    if (sidebarRef.current !== null && isShown !== prevIsShown) {
        sidebarRef.current.toggle();
    }

    return (
        <SidebarComponent
            id="default-sidebar"
            type={type}
            created={onCreate}
            style={{ visibility: visibilityValue }}
            position={position}
            // closeOnDocumentClick={true}
            showBackdrop={showBackdrop}
            ref={sidebarRef}
            width={width}
            target={'.content'}>
            <div className="main-menu">{children}</div>
        </SidebarComponent>
    );
};

SideBar.defaultProps = defaultProps;
