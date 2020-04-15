import React from 'react';
import { FunctionComponent } from 'react';
import SideBar from '../sf-sidebar';

// import { NavStruct } from '../../app-main/utils/RootStructInterface';
// import { usePrevious } from '../../hs-utils/hs-hooks';

import { useSelector } from 'react-redux';

import { selectById } from '../sf-sidebar/menusSlice';
import { RootState } from '../../app-main/app/store';

import { OPTIONS_MENU_ID } from '../../hs-utils/constants/constants';

export const ConfigSidebar: FunctionComponent = () => {
    const menuState = useSelector((state: RootState) => selectById(state, OPTIONS_MENU_ID));

    // const currentModule = state.currentModule;
    // const prevModule = usePrevious(currentModule);

    const isShown = menuState.isShown;

    return (
        <SideBar
            id={OPTIONS_MENU_ID}
            isShown={isShown}
            showBackdrop={false}
            position={'Right'}
            type={'Push'}
            width={'200px'}>
            <h1>Hello</h1>
        </SideBar>
    );
};
