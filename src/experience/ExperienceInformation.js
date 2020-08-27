/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Col, Row, Tag, Collapse } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

import './ExperienceInformation.css';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

/**
 * Information of a given experience.
 * 
 * @param {Object} props the properties of the given component
 * 
 * @author Antoine Orgerit
 * @version 2.0
 */
export default function ExperienceInformation(props) {
    const experience = props.experience;

    return <div id={experience.bookmark} className="experience-information-container">
        <Row className="experience-information-header" gutter={[16, 0]}>
            <Col flex="auto" className="experience-title"><Title level={4}>{experience.title}</Title></Col>
            <Col className="experience-company"><Text><EnvironmentOutlined />&nbsp;{experience.company}, {experience.location}</Text></Col>
        </Row>
        <Paragraph className="experience-information-description">{experience.description}</Paragraph>
        <Paragraph className="experience-information-details">
            <Collapse ghost>
                <Panel header="See more">
                    {experience.details.map((detail, index) => {
                        return <Paragraph key={index}>{detail}</Paragraph>;
                    })}
                </Panel>
            </Collapse>
        </Paragraph>
        <Paragraph className="experience-information-skills">{experience.skills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
        ))}</Paragraph>
    </div>;
}

ExperienceInformation.propTypes = {
    experience: PropTypes.shape({
        bookmark: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired
};