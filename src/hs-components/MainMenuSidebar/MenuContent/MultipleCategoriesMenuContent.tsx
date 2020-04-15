import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { NavOption, SubCategory } from '../../../app-main/utils/RootStructInterface';
import { useTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';
import { Accordion, Card, Nav } from 'react-bootstrap';
import InlineSpace from '../../hs-component-space';

import './style.css';

import Icon from '../../Icon/Icon';

interface MultipleCategoriesMenuContentProps {
    menu: NavOption;
    category: SubCategory;
    clickHandler: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const MultipleCategoriesMenuContent: FunctionComponent<MultipleCategoriesMenuContentProps> = ({
    menu,
    category,
    clickHandler
}) => {
    const [t] = useTranslation();
    const [open, setOpen] = useState(true);

    return (
        <Accordion style={{ width: '100%' }} defaultActiveKey={category.categoryId} key={category.categoryId}>
            <Accordion.Toggle
                onClick={() => setOpen(!open)}
                className="collapsable-menu-header"
                as={Card.Header}
                eventKey={category.categoryId}>
                <h6>
                    {open ? <Icon iconName="chevron-down" /> : <Icon iconName="chevron-right" />}
                    <InlineSpace />
                    {t(category.categoryId)}
                </h6>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={category.categoryId}>
                <Card.Body style={{ padding: 2 }} key={category.categoryId}>
                    {menu.children
                        .filter((child) => child.subCategoryId === category.categoryId)
                        .map((menuItem) => {
                            return (
                                <LinkContainer
                                    className="link-container"
                                    key={menu.key + menuItem.key}
                                    to={menu.link + menuItem.link}
                                    onClick={clickHandler}>
                                    <Nav.Link className="menu-item-link">
                                        <h6>{t(menuItem.key)}</h6>
                                    </Nav.Link>
                                </LinkContainer>
                            );
                        })}
                </Card.Body>
            </Accordion.Collapse>
        </Accordion>
    );
};
