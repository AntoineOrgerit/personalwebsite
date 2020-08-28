/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { GitlabOutlined, MailOutlined, LinkedinOutlined, GithubOutlined, WhatsAppOutlined, MobileOutlined } from '@ant-design/icons';

import './Contact.css';

const { Title, Paragraph } = Typography;

/**
 * Component used as the contact web page.
 * 
 * @author Antoine Orgerit
 * @version 1.1
 */
export default function Contact() {
    const { t } = useTranslation();

    /**
     * Allows to correctly format text in the contact page, mainly for French syntax rules of interrogation points.
     * 
     * @param {String} text the text to format
     */
    const formatText = text => {
        return text.replace(/ \?/g, "\u00a0?");
    };

    return <div id="contact-container">
        <Title level={3}>Contact</Title>
        <Row gutter={[48, 36]}>
            <Col md={12} xs={24} sm={24}>
                <Title level={4}>{formatText(t("contact.information.heading"))}</Title>
                <Paragraph>{t("contact.information.content")}</Paragraph>
                <Paragraph type="secondary">{formatText(t("contact.information.websiteRequest"))} <a href="mailto:orgerit.antoine@gmail.com">orgerit.antoine@gmail.com</a>.</Paragraph>
            </Col>
            <Col className="links-container" md={12} xs={24} sm={24} style={{paddingBottom: "0"}}>
                <Row gutter={[0, 36]}>
                    <Col className="email-container" sm={24} xs={24}>
                        <Title level={4}>{t("contact.emailHeading")}</Title>
                        <a href="mailto:orgerit.antoine@gmail.com"><MailOutlined /> orgerit.antoine@gmail.com</a>
                    </Col>
                    <Col sm={24} xs={24} style={{paddingBottom: "0"}}>
                        <Row gutter={[24, 36]}>
                            <Col xs={24} sm={12} md={24} lg={10}>
                                <Title level={4}>{t("contact.webHeading")}</Title>
                                <Row className="web-links-container" gutter={[18, 0]}>
                                    <Col><a href="https://www.linkedin.com/in/antoine-orgerit/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a></Col>
                                    <Col><a href="https://github.com/AntoineOrgerit" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a></Col>
                                    <Col><a href="https://gitlab.com/AntoineOrgerit" target="_blank" rel="noopener noreferrer"><GitlabOutlined /></a></Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={12} md={24} lg={14} style={{paddingBottom: "0"}}>
                                <Title level={4}>{t("contact.phoneHeading")}</Title>
                                <Row className="phone-links-container" gutter={[18, 0]}>
                                    <Col className="phone-link"><a href="tel:+33678081825"><MobileOutlined /> +33 (0)6 78 08 18 25</a></Col>
                                    <Col><a href="https://wa.me/33678081825" target="_blank" rel="noopener noreferrer"><WhatsAppOutlined /></a></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>;
}