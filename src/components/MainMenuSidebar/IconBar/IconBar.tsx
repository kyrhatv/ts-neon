import * as React from 'react';
import { FunctionComponent } from 'react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';

import Icon from '../../Icon/Icon';
import logo from '../../../assets/TimeSphere_icon_30.svg';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import './style.css';

import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, toggleMenuSelector } from '../MainMenuSlice';
export interface NavStruct {
    struct: NavOption[];
}

export interface NavOption {
    key: string;
    link: string;
    iconName: IconName;
    children: NavItem[] | null;
}

export interface NavItem {
    key: string;
    link: string;
}
const IconBar: FunctionComponent<NavStruct> = ({ struct }) => {
    const [t, i18n] = useTranslation();
    const menuProps = useSelector(toggleMenuSelector);

    const dispatch = useDispatch();

    const changeLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('fr') : i18n.changeLanguage('en');
    };
    const nextLanguage = i18n.language === 'en' ? 'Fr' : 'En';

    const toggleMenuHandler = () => {
        dispatch(toggleMenu({ id: 'LEFT_MENU', isShown: !menuProps.isShown }));
    };

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
                    return (
                        <OverlayTrigger placement="right" overlay={<Tooltip id={module.key}>{t(module.key)}</Tooltip>}>
                            <Nav.Item>
                                <Nav.Link onClick={toggleMenuHandler}>
                                    <Icon iconName={module.iconName} size="2x" />
                                </Nav.Link>
                            </Nav.Item>
                        </OverlayTrigger>
                    );
                })}
            </Nav>
            <Nav variant="pills" className="flex-column icon-bar footer-settings ">
                <div>
                    <OverlayTrigger placement="right" overlay={<Tooltip id="ds">j</Tooltip>}>
                        <Nav.Item>
                            <Nav.Link onClick={changeLanguage}>
                                <div>{nextLanguage}</div>
                            </Nav.Link>
                        </Nav.Item>
                    </OverlayTrigger>
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
