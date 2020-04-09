import React from 'react';
import { FunctionComponent } from 'react';
import SideBar from '../sf-sidebar';
import IconBar from './IconBar';
import { NavStruct } from '../../app-main/utils/RootStructInterface';
import { MenuContent } from './MenuContent/MenuContent';
import { usePrevious } from '../../hs-utils/hs-hooks';

import { useSelector } from 'react-redux';
import { getCurrentModule, getIsShown } from './MainMenuSlice';

export const MainMenu: FunctionComponent<NavStruct> = ({ struct }) => {
    const isShownfromstate = useSelector(getIsShown);
    const currentModule = useSelector(getCurrentModule);
    const prevModule = usePrevious(currentModule);

    const isShown = prevModule === currentModule && isShownfromstate === true ? false : isShownfromstate;

    return (
        <>
            <div className="left-icon-menu">
                <IconBar struct={struct}></IconBar>
            </div>
            <div className="slider-menu">
                <SideBar isShown={isShown} showBackdrop={false} position={'Left'} type={'Push'} width={'250px'}>
                    <MenuContent struct={struct} />
                </SideBar>
            </div>
        </>
    );
};
