import React from 'react';
import { FunctionComponent } from 'react';
import './sidebar-menu.css';
import SideBar from '../sf-sidebar';
import IconBar from './IconBar';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface NavStruct {
    struct: NavOption[];
}

export interface NavOption {
    key: string;
    link: string;
    iconName: IconName;
    children: NavItem[] | null;
}

export interface NavItem {
    key: string;
    link: string;
}

export const MainMenu: FunctionComponent<NavStruct> = ({ struct }) => {
    return (
        <>
            <div>
                <div className="left-icon-menu">
                    <IconBar struct={struct}></IconBar>
                </div>
                <div className="slider-menu">
                    <SideBar showBackdrop={false} position={'Left'} type={'Over'} width={'220px'}>
                        <>HELLO WORLD</>
                    </SideBar>
                </div>
            </div>
        </>
    );
};
