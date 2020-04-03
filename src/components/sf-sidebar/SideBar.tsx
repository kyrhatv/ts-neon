import React, { useRef, Ref } from 'react';
import { FunctionComponent } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import './sidebar-menu.css';

export interface NavStruct {
    children: JSX.Element;
}

export const SideBar: FunctionComponent<NavStruct> = React.forwardRef(({ children }, reff) => {
    const width = '220px';
    const target = '.content';
    const sidebarRef = useRef(null);

    const onCreate = () => {
        sidebarRef.current.element.style.visibility = '';
    };
    const openClick = () => {
        sidebarRef.current.toggle();
    };

    return (
        <>
            <div className="slider-menu">
                <SidebarComponent
                    id="default-sidebar"
                    type="Push"
                    created={onCreate}
                    // style={{ visibility: 'hidden' }}
                    // ref={ref}
                    width={width}
                    target={target}>
                    <div className="main-menu">{children}</div>
                </SidebarComponent>
            </div>
        </>
    );
});
