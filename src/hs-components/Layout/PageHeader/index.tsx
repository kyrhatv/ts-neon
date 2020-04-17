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
        <Row className="header-container" style={{ backgroundColor: '#282c34' }} noGutters>
            <Col md={11} sm={8} xs={8} className="align-self-center">
                <DynamicBreadcrumbs struct={RootStruct} folder={folderPaths} />
            </Col>
            <Col md={1} sm={4} xs={4} className="align-self-center ">
                <Button variant="outline-primary" onClick={toggleOptionsMenuhandler} style={{ float: 'right' }}>
                    <Icon iconName="sliders-h"></Icon>
                </Button>
            </Col>
        </Row>
    );
};

export default PageHeader;
