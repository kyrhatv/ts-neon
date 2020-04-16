import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { NavOption, SubCategory } from '../../../app-main/utils/RootStructInterface';
import { useTranslation } from 'react-i18next';
import { LinkContainer } from 'react-router-bootstrap';
import { Accordion, Card } from 'react-bootstrap';
import InlineSpace from '../../hs-component-space';

import { useCss } from 'react-use';
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

    const linkStyle = useCss({
        backgroundColor: 'transparent',
        alignItems: 'left',
        padding: '10px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#010101'
        }
    });

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
            <>
                {menu.children
                    .filter((child) => child.subCategoryId === category.categoryId)
                    .map((menuItem) => {
                        return (
                            <Accordion.Collapse eventKey={category.categoryId}>
                                <LinkContainer
                                    key={menu.key + menuItem.key}
                                    to={menu.link + menuItem.link}
                                    onClick={clickHandler}>
                                    <Card.Body className={linkStyle} key={category.categoryId}>
                                        <h6>{t(menuItem.key)}</h6>
                                    </Card.Body>
                                </LinkContainer>
                            </Accordion.Collapse>
                        );
                    })}
            </>
        </Accordion>
    );
};
