import React from 'react';
import { FunctionComponent } from 'react';
import SideBar from '../sf-sidebar';

// import { NavStruct } from '../../app-main/utils/RootStructInterface';
// import { usePrevious } from '../../hs-utils/hs-hooks';

import { useSelector, useDispatch } from 'react-redux';

import { selectById, updateMenu } from '../sf-sidebar/menusSlice';
import { RootState } from '../../app-main/app/store';

import { OPTIONS_MENU_ID } from '../../hs-utils/constants/constants';

export const ConfigSidebar: FunctionComponent = () => {
    const menuState = useSelector((state: RootState) => selectById(state, OPTIONS_MENU_ID));
    const dispatch = useDispatch();

    // const currentModule = state.currentModule;
    // const prevModule = usePrevious(currentModule);
    //    const isShown = prevModule === currentModule && menuState.isShown === true ? false : menuState.isShown;

    const isShown = menuState.isShown;
    const pinChangedHandler = () => {
        dispatch(updateMenu({ id: OPTIONS_MENU_ID, changes: { isPinned: !menuState.isPinned, isShown: false } }));
    };

    return (
        <SideBar
            id={OPTIONS_MENU_ID}
            isShown={isShown}
            showBackdrop={false}
            position={'Right'}
            type={menuState.isPinned ? 'Push' : 'Over'}
            isPinned={menuState.isPinned}
            onPinChanged={pinChangedHandler}
            closeOnDocumentClick={true}
            width={'200px'}>
            <h1>Hello</h1>
        </SideBar>
    );
};
