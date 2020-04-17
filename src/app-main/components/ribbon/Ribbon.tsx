import * as React from 'react';
import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Button, ButtonGroup, Form } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

import InlineSpace from '../../../hs-components/hs-component-space';
import './style.css';
import Icon from '../../../hs-components/Icon/Icon';

const Ribbon: FunctionComponent = () => {
    const [t] = useTranslation();

    return (
        <Row className="header-container-ribbon" noGutters>
            <Col md={5}>
                {/* {nbOfWeeks > 1 && t('week') + ' ' + positionInCycle + ' ' + t('of') + ' ' + nbOfWeeks} */}
                <Button
                    // onClick={e => {
                    //     this.props.onSelect(item.eventKey, e);
                    // }}
                    // active={this.props.selectedModule === item.eventKey}
                    size="sm"
                    variant="dark">
                    {t('ribbon.today')}
                </Button>
                <InlineSpace />
                <Button
                    // onClick={e => {
                    //     this.props.onSelect(item.eventKey, e);
                    // }}
                    // active={this.props.selectedModule === item.eventKey}
                    size="sm"
                    variant="dark">
                    {t('ribbon.planif')}
                </Button>
                <InlineSpace />
                <ButtonGroup>
                    <Button
                        // onClick={e => {
                        //     this.props.onSelect(item.eventKey, e);
                        // }}
                        // active={this.props.selectedModule === item.eventKey}
                        size="sm"
                        variant="dark">
                        <Icon iconName="chevron-left" />
                    </Button>
                    <Button
                        // onClick={e => {
                        //     this.props.onSelect(item.eventKey, e);
                        // }}
                        // active={this.props.selectedModule === item.eventKey}
                        size="sm"
                        variant="dark">
                        <Icon iconName="chevron-right" />
                    </Button>
                </ButtonGroup>
                <InlineSpace />
                <span>
                    <Icon iconName="calendar" /> <InlineSpace />1 mars 2020 - 7 mars 2020
                </span>
            </Col>
            <Col md={2}>
                <Form.Control as="select" size="sm">
                    <option>Workspace 0</option>
                </Form.Control>
            </Col>
            <Col md={5}>
                {/* onClick={onTodoClick} */}
                <Button variant="dark" size="sm" style={{ float: 'right' }}>
                    {t('ribbon.todo')}
                </Button>
                {/* {!isQuartOrderContext && hasTodo && (

                )} */}
            </Col>
        </Row>
    );
};

export default Ribbon;
