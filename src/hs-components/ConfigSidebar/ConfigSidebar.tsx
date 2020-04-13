import React from 'react';
import { FunctionComponent } from 'react';
import SideBar from '../sf-sidebar';
// import { NavStruct } from '../../app-main/utils/RootStructInterface';
// import { usePrevious } from '../../hs-utils/hs-hooks';

import { useSelector } from 'react-redux';
import { getOptionMenu } from './ConfigSidebarSlice';

export const ConfigSidebar: FunctionComponent = () => {
    const state = useSelector(getOptionMenu);

    // const currentModule = state.currentModule;
    // const prevModule = usePrevious(currentModule);

    const isShown = state.isShown;

    return (
        <SideBar
            id="config-menu"
            isShown={isShown}
            showBackdrop={false}
            position={'Right'}
            type={'Push'}
            width={'200px'}>
            <h1>Hello</h1>
        </SideBar>
    );
};
