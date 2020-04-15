import * as React from 'react';
import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { DynamicBreadcrumbs } from '../../DynamicBreadcrumbs/DynamicBreadcrumbs';
import { Row, Col, Button } from 'react-bootstrap';
import { RootStruct } from '../../../app-main/app/RootStruct';
import { useDispatch, useSelector } from 'react-redux';

import { selectById, updateMenu } from '../../sf-sidebar/menusSlice';
import { RootState } from '../../../app-main/app/store';
import { OPTIONS_MENU_ID } from '../../../hs-utils/constants/constants';

import './style.css';
import Icon from '../../Icon/Icon';

const PageHeader: FunctionComponent = () => {
    let location = useLocation();
    let folderPaths = location.pathname.split('/').filter((el) => el !== '');
    const dispatch = useDispatch();

    const menuState = useSelector((state: RootState) => selectById(state, OPTIONS_MENU_ID));

    const toggleOptionsMenuhandler = () => {
        dispatch(updateMenu({ id: OPTIONS_MENU_ID, changes: { isShown: !menuState.isShown } }));
    };
    return (
        // <div ref={ref} style={{ position: 'relative' }}>
        //     <p style={{ textAlign: 'center', color: isSliding ? 'red' : 'green' }}>{Math.round(state.value * 100)}%</p>
        //     <div style={{ position: 'absolute', left: pos }}>🎚</div>
        // </div>
        <div id="myHeader" className="header-container">
            <Row className="align-items-center">
                <Col md={11}>
                    <DynamicBreadcrumbs struct={RootStruct} folder={folderPaths} />
                </Col>
                <Col md={1}>
                    <Button variant="outline-primary" onClick={toggleOptionsMenuhandler}>
                        <Icon iconName="sliders-h"></Icon>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default PageHeader;
