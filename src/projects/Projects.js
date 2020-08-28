/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { GithubOutlined, GitlabOutlined } from '@ant-design/icons';

import Project from './Project';

import './Projects.css';

const { Title, Paragraph } = Typography;

/**
 * Component used as the projects web page.
 * 
 * @author Antoine Orgerit
 * @version 1.0
 */
export default function Projects() {
    const { t } = useTranslation();

    return <div id="projects-container">
        <Title level={3}>{t("projects.heading")}</Title>
        {
            t("projects.items", { returnObjects: true }).map((project, index) => (
                <Project key={index} project={project} />
            ))
        }
        <Paragraph>{t("projects.more.heading")} <a href="https://github.com/AntoineOrgerit" target="_blank" rel="noopener noreferrer"><GithubOutlined /> GitHub</a> {t("projects.more.conjunction")} <a href="https://gitlab.com/AntoineOrgerit" target="_blank" rel="noopener noreferrer"><GitlabOutlined /> GitLab</a>.</Paragraph>
    </div>;
}