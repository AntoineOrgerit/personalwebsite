/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Collapse, Tag } from 'antd';

import './EducationInformation.css';
import { BranchesOutlined, PushpinOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

export default function EducationInformation(props) {
    const education = props.education;

    if ((education.type === "en_master" && education.detailedContent === undefined) || (education.type === "normal" && education.link === undefined)) {
        throw new Error("Missing information for education information.");
    }

    return <div className="education-item">
        <Title level={4}>{education.title}</Title>
        <Paragraph className="education-result">{education.result}</Paragraph>
        <Paragraph className="education-description">{education.description}</Paragraph>
        {
            education.type === "normal" &&
            <div className="education-diploma-link">
                <Button type="link" href={education.link}>See the diploma</Button>
            </div>
        }
        {
            education.type === "en_master" &&
            <div className="education-en-master-container">
                <h5>What does it include?</h5>
                <Collapse ghost>
                    {
                        education.detailedContent.map((detail, index) => (
                            <Panel key={index} header={detail.title}>
                                {
                                    detail.result &&
                                    <Paragraph className="education-en-master-result" type="secondary">{detail.result}</Paragraph>
                                }
                                {
                                    detail.description.map((descriptionItem, descriptionIndex) => (
                                        <Paragraph key={descriptionIndex} className={"education-en-master-description" + ((detail.linkedProjects || detail.experience) ? " is-followed" : "")}>{descriptionItem}</Paragraph>
                                    ))
                                }
                                {
                                    detail.linkedProjects &&
                                    <Paragraph className={"education-en-master-projects" + (detail.experience ? " is-followed" : "")}><BranchesOutlined /> Linked projects:&nbsp;&nbsp;
                                        {
                                            detail.linkedProjects.map((project, pIndex) => (
                                                <Tag key={pIndex} type="link" size="small"><a href={project.link}>{project.title}</a></Tag>
                                            ))
                                        }
                                    </Paragraph>
                                }
                                {
                                    detail.experience &&
                                    <Paragraph className="education-en-master-experience"><PushpinOutlined /> Internships:&nbsp;&nbsp;
                                        {
                                            detail.experience.map((internship, internshipIndex) => (
                                                <Tag key={internshipIndex} type="link" size="small"><a href={internship.link}>{internship.title}</a></Tag>
                                            ))
                                        }
                                    </Paragraph>
                                }
                                {
                                    detail.link &&
                                    <div className="education-diploma-link">
                                        <Button type="link" href={detail.link}>See the diploma</Button>
                                    </div>
                                }
                            </Panel>
                        ))
                    }
                </Collapse>
            </div>
        }
    </div>;
}

EducationInformation.propTypes = {
    education: PropTypes.shape({
        title: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        link: PropTypes.string,
        detailedContent: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            result: PropTypes.string,
            description: PropTypes.string.isRequired,
            link: PropTypes.string
        }).isRequired)
    }).isRequired
};