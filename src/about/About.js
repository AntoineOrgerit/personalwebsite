/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Typography, Row, Col, Tag, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { CommentOutlined, FileDoneOutlined, CodeOutlined, PushpinOutlined } from '@ant-design/icons';
import ScrollAnimation from 'react-animate-on-scroll';

import Certifications from './Certifications';

import './About.css';

const { Title, Paragraph } = Typography;

/**
 * Component used as the About web page.
 * 
 * @author Antoine Orgerit
 * @version 1.0
 */
export default function About() {
    const { t } = useTranslation();

    return <div id="about-container">
        <Title level={3}>{t("about.heading")}</Title>
        <Row gutter={[48, 0]}>
            <Col md={8} sm={24} xs={24}>
                <div style={{ border: "1px solid white", minHeight: "30vh", height: "100%", textAlign: "center" }}>This is where my photo should be</div>
            </Col>
            <Col className="presentation-container" md={16}>
                <Title level={4}><PushpinOutlined /> {t("about.presentation.heading")}</Title>
                <Paragraph>{t("about.presentation.content")}</Paragraph>
                <Button className="resume-download" href={process.env.PUBLIC_URL + "/resume/resume_antoine_orgerit.pdf"} target="_blank">{t("about.presentation.resumeButton")}</Button>
            </Col>
        </Row>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
            <Row className="skills-section">
                <Col>
                    <Title level={4}><CodeOutlined /> {t("about.knowledge.heading")}</Title>
                    <Paragraph>{t("about.knowledge.content")}</Paragraph>
                    <Paragraph>{t("about.knowledge.skills.soft", { returnObjects: true }).map((skill, index) =>
                        <Tag key={index}>{skill}</Tag>
                    )}</Paragraph>
                    <Paragraph>{t("about.knowledge.skills.hard", { returnObjects: true }).map((skill, index) =>
                        <Tag key={index}>{skill}</Tag>
                    )}</Paragraph>
                </Col>
            </Row>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
            <Certifications icon={<FileDoneOutlined />} heading={t("about.itCertifications.heading")} description={t("about.itCertifications.description")} certifications={t("about.itCertifications.certifications", { returnObjects: true })} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
            <Certifications icon={<CommentOutlined />} heading={t("about.languagesCertifications.heading")} description={t("about.languagesCertifications.description")} certifications={t("about.languagesCertifications.certifications", { returnObjects: true })} />
        </ScrollAnimation>
    </div >;
}