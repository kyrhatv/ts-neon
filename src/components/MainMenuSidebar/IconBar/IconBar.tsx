import * as React from 'react';
import { FunctionComponent } from 'react';
import Icon from '../../Icon/Icon';
import { Nav, OverlayTrigger, Tooltip, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/TimeSphere_icon_30.svg';

import './style.css';

const IconBar: FunctionComponent = ({}) => {
    const [t, i18n] = useTranslation();

    const changeLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('fr') : i18n.changeLanguage('en');
    };
    const nextLanguage = i18n.language === 'en' ? 'Fr' : 'En';

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
                <OverlayTrigger placement="right" overlay={<Tooltip id="ds">Tooltip</Tooltip>}>
                    <Nav.Item>
                        <Nav.Link href="/home">
                            <Icon iconName="home" size="2x" />
                        </Nav.Link>
                    </Nav.Item>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="ds">Tooltip</Tooltip>}>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">
                            <Icon iconName="calendar" size="2x" />
                        </Nav.Link>
                    </Nav.Item>
                </OverlayTrigger>
                <OverlayTrigger placement="right" overlay={<Tooltip id="ds">Tooltip</Tooltip>}>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" disabled>
                            <Icon iconName="home" size="2x" />
                        </Nav.Link>
                    </Nav.Item>
                </OverlayTrigger>
            </Nav>
            <Nav className="footer-settings">
                <div>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" onClick={changeLanguage}>
                            <div>{nextLanguage}</div>
                        </Nav.Link>
                    </Nav.Item>
                    <OverlayTrigger placement="right" overlay={<Tooltip id="ds">{t('profile')}</Tooltip>}>
                        <LinkContainer to="/profile">
                            <Nav.Link>
                                <Icon iconName="user-circle" size="2x" />
                            </Nav.Link>
                        </LinkContainer>
                    </OverlayTrigger>
                </div>
            </Nav>
        </div>
    );
};

export default IconBar;
