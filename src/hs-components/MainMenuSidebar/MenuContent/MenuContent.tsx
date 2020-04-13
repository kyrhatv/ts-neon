import React from 'react';
import { FunctionComponent } from 'react';
import { NavStruct } from '../../../app-main/utils/RootStructInterface';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getCurrentModule } from '../MainMenuSlice';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MultipleCategoriesMenuContent } from './MultipleCategoriesMenuContent';

import './style.css';

export const MenuContent: FunctionComponent<NavStruct> = ({ struct }) => {
    const [t] = useTranslation();

    const currentModule = useSelector(getCurrentModule);

    const menu = struct.find((module) => module.key === currentModule);
    if (menu === undefined) {
        return null;
    }

    return (
        <div style={{ width: '100%' }}>
            {menu.hasSubCategories ? (
                <>
                    {menu.subCategories.map((category) => {
                        return <MultipleCategoriesMenuContent category={category} menu={menu} />;
                    })}
                </>
            ) : (
                <>
                    <div className="non-collapse-menu-header card-header">
                        <h6>{t(menu.key)}</h6>
                    </div>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        {menu.children.map((menuItem) => {
                            if (menu.children == null) {
                                return (
                                    <LinkContainer key={menuItem.key} to={menuItem.link}>
                                        <Nav.Link className="menu-item-link">
                                            <h6>{t(menuItem.key)}</h6>
                                        </Nav.Link>
                                    </LinkContainer>
                                );
                            } else {
                                return (
                                    <LinkContainer key={menu.key + menuItem.key} to={menu.link + menuItem.link}>
                                        <Nav.Link className="menu-item-link">
                                            <h6>{t(menuItem.key)}</h6>
                                        </Nav.Link>
                                    </LinkContainer>
                                );
                            }
                        })}
                    </Nav>
                </>
            )}
        </div>
    );
};
