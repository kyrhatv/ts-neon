import * as React from 'react';
import { FunctionComponent } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useTranslation } from 'react-i18next';
import { NavStruct } from '../../app-main/utils/RootStructInterface';
import logo from '../../assets/TimeSphere_icon_30.svg';
import { useCss } from 'react-use';

export const DynamicNavbar: FunctionComponent<NavStruct> = ({ struct }) => {
    const [t, i18n] = useTranslation();

    const style = useCss({
        backgroundColor: '#000000',
        color: 'white'
    });

    return (
        <>
            <Navbar style={{ zIndex: 10000 }} collapseOnSelect expand="lg" className={style} variant="dark">
                <Navbar.Brand href="/">
                    <img src={logo} alt="" height="50" className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {struct.map((navOption) => {
                            if (navOption.children === null) {
                                return (
                                    <LinkContainer key={navOption.key} to={navOption.link}>
                                        <Nav.Link>{t(navOption.key)}</Nav.Link>
                                    </LinkContainer>
                                );
                            } else {
                                return (
                                    <NavDropdown key={navOption.key} title={t(navOption.key)} id={navOption.link}>
                                        {navOption.children?.map((navItem) => (
                                            <LinkContainer
                                                key={navOption.key + navItem.key}
                                                to={navOption.link + navItem.link}>
                                                <NavDropdown.Item>{t(navItem.key)}</NavDropdown.Item>
                                            </LinkContainer>
                                        ))}
                                    </NavDropdown>
                                );
                            }
                        })}
                    </Nav>
                    <Nav>
                        <LinkContainer to="/profile">
                            <Nav.Link>{t('profile')}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>{t('about')}</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title={t('language')} id="language">
                            <NavDropdown.Item onClick={() => i18n.changeLanguage('fr')}>Français</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>English</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
