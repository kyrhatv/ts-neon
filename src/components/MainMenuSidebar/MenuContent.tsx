import React, { useEffect } from 'react';
import { FunctionComponent } from 'react';
import './sidebar-menu.css';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { useSelector } from 'react-redux';
import { toggleMenuSelector } from '../MainMenuSidebar/MainMenuSlice';

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

export const MenuContent: FunctionComponent<NavStruct> = ({ struct }) => {
    const menuProps = useSelector(toggleMenuSelector);

    const currentModule = menuProps.currentModule;

    return (
        <>
            {struct
                .filter((module) => module.key === currentModule)
                .map((module) => {
                    return module.children.map((menuItems) => {
                        console.log(menuItems.key);
                        return <div>{menuItems.key.toString()}</div>;
                    });
                })}
        </>
    );
};
