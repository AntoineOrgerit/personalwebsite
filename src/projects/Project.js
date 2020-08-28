/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col, Typography, Tag } from 'antd';
import { TeamOutlined, IdcardOutlined, MobileOutlined, LaptopOutlined, DeploymentUnitOutlined, GlobalOutlined, FileTextOutlined } from '@ant-design/icons';

import './Project.css';

const { Title, Paragraph, Text } = Typography;

/**
 * Information about a project.
 * 
 * @param {Object} props the properties of the given component
 * 
 * @author Antoine Orgerit
 * @version 1.0
 */
export default function Project(props) {
    const project = props.project;

    /**
     * Allows to retrieve an icon corresponding to the type of the project.
     * 
     * @param {String} type the type of the project for which to attribute an icon
     */
    const getProjectIcon = type => {
        switch (type) {
            case "mobile":
                return <MobileOutlined />;
            case "desktop":
                return <LaptopOutlined />;
            case "web":
                return <GlobalOutlined />;
            case "global-solution":
                return <DeploymentUnitOutlined />;
            case "paper":
                return <FileTextOutlined />;
            default:
                return <DeploymentUnitOutlined />;
        }
    };

    return <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
        <div id={project.bookmark} className="project-information-container">
            <Row className="project-information-header" gutter={[36, 0]}>
                <Col flex="auto">
                    <Title level={4}>
                        {getProjectIcon(project.type)}{project.title}
                    </Title>
                </Col>
                <Col className="project-additional-information">
                    <Text>{project.numberPeople && (<span><TeamOutlined />&nbsp;{project.numberPeople}</span>)}{project.endUser && (<span><IdcardOutlined />&nbsp;{project.endUser}</span>)}</Text>
                </Col>
            </Row>
            <Paragraph className="project-description">
                {project.description}
            </Paragraph>
            <Paragraph className="project-skills">{project.skills.map((skill, index) => (
                <Tag key={index}>{skill}</Tag>
            ))}</Paragraph>
        </div>
    </ScrollAnimation>;
}

Project.propTypes = {
    project: PropTypes.shape({
        bookmark: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        numberPeople: PropTypes.number,
        endUser: PropTypes.string,
        type: PropTypes.string.isRequired,
        link: PropTypes.string,
        description: PropTypes.string.isRequired
    }).isRequired
};