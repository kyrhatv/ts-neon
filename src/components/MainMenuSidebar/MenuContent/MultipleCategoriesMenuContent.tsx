import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { NavOption, SubCategory } from '../../../hs-interfaces/Root-Struct';
import { useTranslation } from 'react-i18next';
import { useCss } from 'react-use';
import { LinkContainer } from 'react-router-bootstrap';
import { Accordion, Card, Nav } from 'react-bootstrap';
import InlineSpace from '../../hs-component-space';

import Icon from '../../Icon/Icon';

interface MultipleCategoriesMenuContentProps {
    menu: NavOption;
    category: SubCategory;
}

export const MultipleCategoriesMenuContent: FunctionComponent<MultipleCategoriesMenuContentProps> = ({
    menu,
    category
}) => {
    const [t] = useTranslation();
    const [open, setOpen] = useState(true);

    const collapsableMenuHeader = useCss({
        height: '70px',
        backgroundColor: '#282c34',
        border: '0px transparent',
        '&:hover': {
            cursor: 'pointer'
        }
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
        <Accordion defaultActiveKey={category.categoryId} key={category.categoryId}>
            <Accordion.Toggle
                onClick={() => setOpen(!open)}
                className={collapsableMenuHeader}
                as={Card.Header}
                eventKey={category.categoryId}>
                <h6>
                    {open ? <Icon iconName="chevron-down" /> : <Icon iconName="chevron-right" />}
                    <InlineSpace />
                    {t(category.categoryId)}
                </h6>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={category.categoryId}>
                <Card.Body style={{ padding: 0 }} key={category.categoryId}>
                    {menu.children
                        .filter((child) => child.subCategoryId === category.categoryId)
                        .map((menuItem) => (
                            <LinkContainer key={menu.key + menuItem.key} to={menu.key + menuItem.link}>
                                <Nav.Link className={content}>
                                    <h6>{t(menuItem.key)}</h6>
                                </Nav.Link>
                            </LinkContainer>
                        ))}
                </Card.Body>
            </Accordion.Collapse>
        </Accordion>
    );
};
