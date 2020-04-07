import React from 'react';
import { FunctionComponent } from 'react';
import './sidebar-menu.css';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { getCurrentModule } from '../MainMenuSidebar/MainMenuSlice';

import { useCss } from 'react-use';
import { Col, Nav } from 'react-bootstrap';

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

export const MenuContent: FunctionComponent<NavStruct> = ({ struct }) => {
    const [t, i18n] = useTranslation();

    const currentModule = useSelector(getCurrentModule);

    const sideMenuHeader = useCss({
        height: '50px',
        backgroundColor: '#282c34',
        paddingTop: '10px',

        width: '220px'
    });

    const content = useCss({
        paddingLeft: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '100%',
        alignItems: 'left',
        alignContent: 'left',
        justifyContent: 'left',
        color: '#fff',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#010101'
        }
    });

    return (
        <div>
            {struct
                .filter((module) => module.key === currentModule)
                .map((module) => {
                    return (
                        <Col md={12} className={sideMenuHeader}>
                            <h3>{t(module.key)}</h3>
                        </Col>
                    );
                })}

            <Nav defaultActiveKey="/home" className="flex-column">
                {struct
                    .filter((module) => module.key === currentModule)
                    .map((module) => {
                        return module.children.map((menuItems) => {
                            return (
                                <Nav.Link className={content} href="#">
                                    <h6>{t(menuItems.key)}</h6>
                                </Nav.Link>
                            );
                        });
                    })}
            </Nav>
        </div>
    );
};
