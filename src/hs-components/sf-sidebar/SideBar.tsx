import React, { useRef } from 'react';
import { FunctionComponent } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { usePrevious } from '../../hs-utils/hs-hooks';
import { Button, Row, Col } from 'react-bootstrap';

// import { useDispatch, useSelector } from 'react-redux';

// import { RootState } from '../../app-main/app/store';
// import { selectById } from './menusSlice';

import './sidebar-menu.css';
import Icon from '../Icon/Icon';

export interface SidebarProps {
    id?: string;
    isShown: boolean;
    type?: 'Over' | 'Push' | 'Slide' | 'Auto';
    position?: 'Left' | 'Right';
    width?: 'auto' | string;
    showBackdrop?: boolean;
    closeOnDocumentClick?: boolean;
    children: JSX.Element;
}

const defaultProps: SidebarProps = {
    id: 'default-sidebar',
    isShown: false,
    type: 'Over',
    position: 'Left',
    width: '220px',
    showBackdrop: false,
    closeOnDocumentClick: true,
    children: <h1>hello</h1>
};

export const SideBar: FunctionComponent<SidebarProps> = ({
    id,
    isShown,
    type,
    position,
    width,
    showBackdrop,
    closeOnDocumentClick,
    children
}) => {
    // const dispatch = useDispatch();

    // const menuState = useSelector((state: RootState) => selectById(state, id));

    // const menuState = useSelector((state) => getMenu(state, id));

    const prevIsShown = usePrevious(isShown);
    const sidebarRef = useRef(null);
    const visibilityValue = isShown ? 'visible' : 'hidden';

    const onCreate = () => {
        sidebarRef.current.element.style.visibility = visibilityValue;
    };

    if (sidebarRef.current !== null && isShown !== prevIsShown) {
        sidebarRef.current.toggle();
    }

    const doThis = () => {
        // dispatch(
        //     toggleMenu({
        //         id: menuState.id,
        //         isShown: menuState.isShown,
        //         currentModule: menuState.currentModule,
        //         isPinned: !menuState.isPinned
        //     })
        // );
    };

    return (
        <>
            <SidebarComponent
                id={id}
                className={'sidebar'}
                type={'Push'}
                // type={type}
                created={onCreate}
                style={{ visibility: visibilityValue }}
                position={position}
                // closeOnDocumentClick={true}
                showBackdrop={showBackdrop}
                ref={sidebarRef}
                width={width}
                target={'.content'}>
                    <Col>
                        <Row>{children}</Row>
                    </Col>
                    <Row className="footer">
                        {position === 'Left' ? (
                            <>
                                <Col md={9}></Col>
                                <Col md={3}>
                                    <Button variant="outline-primary" onClick={doThis}>
                                        <Icon iconName="thumbtack" />
                                    </Button>
                                </Col>
                            </>
                        ) : (
                            <>
                                <Col md={3}>
                                    <Button variant="outline-primary" onClick={doThis}>
                                        <Icon iconName="thumbtack" />
                                    </Button>
                                </Col>
                                <Col md={9}></Col>
                            </>
                        )}
                    </Row>
            </SidebarComponent>
        </>
    );
};

SideBar.defaultProps = defaultProps;
