/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Collapse, Tag } from 'antd';
import { BranchesOutlined, LaptopOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './EducationInformation.css';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

/**
 * Component used as the description of education.
 * 
 * @param {Object} props the properties of the component
 * 
 * @author Antoine Orgerit
 * @version 2.0
 */
export default function EducationInformation(props) {
    console.log(window.location.origin);

    const education = props.education;

    const { t } = useTranslation();

    if (education.type !== "complementary" && ((education.type === "en_master" && education.detailedContent === undefined) || (education.type === "normal" && education.link === undefined))) {
        throw new Error("Missing information for education information.");
    }

    return <div className="education-item">
        <Title level={4}>{education.title}</Title>
        <Paragraph className="education-result">{education.result}</Paragraph>
        {
            education.description.map((description, descriptionIndex) => (
                <Paragraph key={descriptionIndex} className="education-description">{description}</Paragraph>
            ))
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
                                    <Paragraph className={"education-projects" + (detail.experience ? " is-followed" : "")}><BranchesOutlined /> {t("education.projectsHeading")}:&nbsp;&nbsp;
                                        {
                                            detail.linkedProjects.map((project, pIndex) => (
                                                <Tag key={pIndex} type="link" size="small"><Link to={project.link}>{project.title}</Link></Tag>
                                            ))
                                        }
                                    </Paragraph>
                                }
                                {
                                    detail.experience &&
                                    <Paragraph className="education-experience"><LaptopOutlined /> {t("education.experienceHeading")}:&nbsp;&nbsp;
                                        {
                                            detail.experience.map((internship, internshipIndex) => (
                                                <Tag key={internshipIndex} type="link" size="small"><Link to={internship.link}>{internship.title}</Link></Tag>
                                            ))
                                        }
                                    </Paragraph>
                                }
                                {
                                    detail.link &&
                                    <div className="education-diploma-link">
                                        <Button type="link" href={detail.link} target="_blank" rel="noopener noreferrer">{t("education.diplomaButton")}</Button>
                                    </div>
                                }
                            </Panel>
                        ))
                    }
                </Collapse>
            </div>
        }
        {
            education.linkedProjects &&
            <Paragraph className={"education-projects" + (education.experience ? " is-followed" : "")}><BranchesOutlined /> {t("education.projectsHeading")}:&nbsp;&nbsp;
                                        {
                    education.linkedProjects.map((project, pIndex) => (
                        <Tag key={pIndex} type="link" size="small"><Link to={project.link}>{project.title}</Link></Tag>
                    ))
                }
            </Paragraph>
        }
        {
            education.experience &&
            <Paragraph className="education-experience"><LaptopOutlined /> {t("education.experienceHeading")}:&nbsp;&nbsp;
                                        {
                    education.experience.map((internship, internshipIndex) => (
                        <Tag key={internshipIndex} type="link" size="small"><Link to={internship.link}>{internship.title}</Link></Tag>
                    ))
                }
            </Paragraph>
        }
        {
            education.type === "normal" &&
            <div className="education-diploma-link">
                <Button type="link" href={education.link} target="_blank" rel="noopener noreferrer">{t("education.diplomaButton")}</Button>
            </div>
        }
    </div>;
}

EducationInformation.propTypes = {
    education: PropTypes.shape({
        title: PropTypes.string.isRequired,
        result: PropTypes.string,
        description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        type: PropTypes.string.isRequired,
        link: PropTypes.string,
        detailedContent: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            result: PropTypes.string,
            description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            linkedProjects: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired),
            experience: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired),
            link: PropTypes.string
        }).isRequired),
        linkedProjects: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        }).isRequired),
        experience: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        }).isRequired),
    }).isRequired
};