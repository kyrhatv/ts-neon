import React from 'react';
import { FunctionComponent } from 'react';
import './sidebar-menu.css';
import SideBar from '../sf-sidebar';
import IconBar from './IconBar';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { MenuContent } from './MenuContent';
import { usePrevious } from '../../utils/hs-hooks';

import { useSelector } from 'react-redux';
import { getCurrentModule, getIsShown } from '../MainMenuSidebar/MainMenuSlice';

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
    const isShownfromstate = useSelector(getIsShown);
    const currentModule = useSelector(getCurrentModule);
    const prevModule = usePrevious(currentModule);

    const isShown = prevModule === currentModule && isShownfromstate === true ? false : isShownfromstate;

    return (
        <div>
            <div className="left-icon-menu">
                <IconBar struct={struct}></IconBar>
            </div>
            <div className="slider-menu">
                <SideBar isShown={isShown} showBackdrop={false} position={'Left'} type={'Over'} width={'220px'}>
                    <MenuContent struct={struct} />
                </SideBar>
            </div>
        </div>
    );
};
