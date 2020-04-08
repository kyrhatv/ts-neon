import React from 'react';
import { FunctionComponent } from 'react';
import { NavStruct } from '../../../hs-interfaces/Root-Struct';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getCurrentModule } from '../MainMenuSlice';
import { useCss } from 'react-use';
import { Col, Nav } from 'react-bootstrap';
import { MultipleCategoriesMenuContent } from './MultipleCategoriesMenuContent';

export const MenuContent: FunctionComponent<NavStruct> = ({ struct }) => {
    const [t] = useTranslation();

    const currentModule = useSelector(getCurrentModule);

    const sideMenuHeader = useCss({
        height: '70px',
        backgroundColor: '#282c34',
        paddingTop: '10px',
        width: '100%',
        verticalAlign: 'center'
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

    const menu = struct.find((module) => module.key === currentModule);

    if (menu === undefined) {
        return null;
    }

    return (
        <div>
            {menu.hasSubCategories ? (
                <div>
                    {menu.subCategories.map((category) => {
                        return <MultipleCategoriesMenuContent category={category} menu={menu} />;
                    })}
                </div>
            ) : (
                <>
                    <Col md={12} className={sideMenuHeader}>
                        <h6>{t(menu.key)}</h6>
                    </Col>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        {menu.children.map((menuItems) => {
                            return (
                                <Nav.Link className={content} href="#">
                                    <h6>{t(menuItems.key)}</h6>
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                </>
            )}
        </div>
    );
};
