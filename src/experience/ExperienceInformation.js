/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Col, Row, Tag, Collapse } from 'antd';
import Icon from '@ant-design/icons';

import { ReactComponent as MapPinSVG } from './resources/map-pin.svg';

import './ExperienceInformation.css';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

/**
 * Information of a given experience.
 * 
 * @param {Object} props the properties of the given component
 */
export default function ExperienceInformation(props) {
    const experience = props.experience;

    return <div className="experience-information-container">
        <Row className="experience-information-header" gutter={[16, 0]}>
            <Col flex="auto" className="experience-title"><Title level={4}>{experience.title}</Title></Col>
            <Col className="experience-company"><Text><Icon component={MapPinSVG} />&nbsp;{experience.company}, {experience.location}</Text></Col>
        </Row>
        <Paragraph>{experience.description}</Paragraph>
        <Paragraph className="experience-information-details">
            <Collapse ghost>
                <Panel header="See more">
                    {experience.description}
                </Panel>
            </Collapse>
        </Paragraph>
        <Paragraph>{experience.skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
        ))}</Paragraph>
    </div>;
}

ExperienceInformation.propTypes = {
    experience: PropTypes.shape({
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired
};