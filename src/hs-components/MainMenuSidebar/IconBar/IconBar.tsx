import React, { FunctionComponent } from 'react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

import Icon from '../../Icon/Icon';
import logo from '../../../assets/TimeSphere_icon_30.svg';
import { NavStruct } from '../../../hs-interfaces/Root-Struct';

import './style.css';

import { useDispatch, useSelector } from 'react-redux';

import { toggleMenu, getMenu } from '../MainMenuSlice';

import { useCss } from 'react-use';

const IconBar: FunctionComponent<NavStruct> = ({ struct }) => {
    const [t, i18n] = useTranslation();
    const menuState = useSelector(getMenu);

    const currentModule = menuState.currentModule;

    const dispatch = useDispatch();

    const changeLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('fr') : i18n.changeLanguage('en');
    };
    const nextLanguage = i18n.language === 'en' ? 'Fr' : 'En';

    const toggleMenuHandler = (moduleKey) => {
        const response = moduleKey !== currentModule && moduleKey !== null ? true : false;
        const module = response === false ? undefined : moduleKey;
        dispatch(toggleMenu({ id: 'LEFT_MENU', isShown: response, currentModule: module }));
    };

    const currentmoduleStyle = useCss({ color: '#fff', backgroundColor: '#004085' });
    const moduleStyle = useCss({ color: '#fff', backgroundColor: '#282c34' });

    return (
        <div className="icon-bar-container">
            <Nav variant="pills" defaultActiveKey="/home" className="flex-column icon-bar">
                <LinkContainer to="/profile">
                    <Nav.Item>
                        <Nav.Link>
                            <img src={logo} alt="" height="30" className="d-inline-block align-top" />
                        </Nav.Link>
                    </Nav.Item>
                </LinkContainer>
                {struct.map((module) => {
                    let linkstyle = currentModule === module.key ? currentmoduleStyle : moduleStyle;
                    return (
                        <OverlayTrigger
                            key={module.key}
                            placement="right"
                            overlay={<Tooltip id={module.key}>{t(module.key)}</Tooltip>}>
                            <Nav.Item className={linkstyle}>
                                <Nav.Link onClick={() => toggleMenuHandler(module.key)}>
                                    <Icon iconName={module.iconName} size="2x" />
                                </Nav.Link>
                            </Nav.Item>
                        </OverlayTrigger>
                    );
                })}
            </Nav>
            <Nav variant="pills" className="flex-column icon-bar footer-settings ">
                <div>
                    <Nav.Item>
                        <Nav.Link onClick={changeLanguage}>
                            <div>{nextLanguage}</div>
                        </Nav.Link>
                    </Nav.Item>
                    <OverlayTrigger placement="right" overlay={<Tooltip id="ds">j</Tooltip>}>
                        <Nav.Item>
                            <Nav.Link onClick={changeLanguage}>
                                <Icon iconName="user-circle" size="2x" />
                            </Nav.Link>
                        </Nav.Item>
                    </OverlayTrigger>
                </div>
            </Nav>
        </div>
    );
};

export default IconBar;
