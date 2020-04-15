import React from 'react';

import { FunctionComponent } from 'react';

import SideBar from '../sf-sidebar';
import IconBar from './IconBar';

import { NavStruct } from '../../app-main/utils/RootStructInterface';
import { MenuContent } from './MenuContent/MenuContent';
import { usePrevious } from '../../hs-utils/hs-hooks';

import { useSelector } from 'react-redux';

import { selectById } from '../sf-sidebar/menusSlice';
import { RootState } from '../../app-main/app/store';

import { MAIN_MENU_ID } from '../../hs-utils/constants/constants';

export const MainMenu: FunctionComponent<NavStruct> = ({ struct }) => {
    const menuState = useSelector((state: RootState) => selectById(state, MAIN_MENU_ID));
    const sidebarType = menuState.isPinned ? 'Push' : 'Over';

    const currentModule = menuState.currentModule;
    const prevModule = usePrevious(currentModule);

    const isShown = prevModule === currentModule && menuState.isShown === true ? false : menuState.isShown;

    return (
        <>
            <IconBar struct={struct}></IconBar>
            <SideBar
                id="main-menu"
                isShown={isShown}
                showBackdrop={false}
                position={'Left'}
                type={sidebarType}
                width={'250px'}>
                <MenuContent struct={struct} />
            </SideBar>
        </>
    );
};
