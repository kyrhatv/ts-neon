import React from 'react';

// , { useState, useEffect } 
import { FunctionComponent } from 'react';
import SideBar from '../sf-sidebar';
import IconBar from './IconBar';
import { NavStruct } from '../../app-main/utils/RootStructInterface';
import { MenuContent } from './MenuContent/MenuContent';
import { usePrevious } from '../../hs-utils/hs-hooks';

import { useSelector } from 'react-redux';
import { getCurrentModule, getIsShown, getIsPinned } from './MainMenuSlice';

export const MainMenu: FunctionComponent<NavStruct> = ({ struct }) => {
    const isShownfromstate = useSelector(getIsShown);
    const isPinned = useSelector(getIsPinned);

    // const [state, setstate] = useState('Over');

    const sidebarType = isPinned ? 'Over' : 'Push';

    // useEffect(() => {
    //     sidebarType = isPinned ? "Over" : "Push";
    // }, [isPinned]);

    const currentModule = useSelector(getCurrentModule);
    const prevModule = usePrevious(currentModule);

    const isShown = prevModule === currentModule && isShownfromstate === true ? false : isShownfromstate;

    return (
        <>
            <IconBar struct={struct}></IconBar>
            <SideBar
                id="main-menu"
                isShown={isShown}
                showBackdrop={false}
                position={'Left'}
                type={sidebarType}
                width={'300px'}>
                <MenuContent struct={struct} />
            </SideBar>
        </>
    );
};
