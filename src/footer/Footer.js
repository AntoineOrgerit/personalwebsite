/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { LinkedinFilled, GithubFilled, MailOutlined, PhoneOutlined, GitlabOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import './Footer.css';

const { Text } = Typography;

/**
 * Component used as the footer of the website.
 * 
 * @author Antoine Orgerit
 * @version 2.0
 */
export default function Footer() {
    const { t } = useTranslation();

    return <Layout.Footer id="footer">
        <Text className="footer-contact-container">
            <Row justify="space-around" gutter={[16, 0]}>
                <Col className="footer-contact-item" sm><a href="https://www.linkedin.com/in/antoine-orgerit/" target="_blank" rel="noopener noreferrer"><LinkedinFilled /></a></Col>
                <Col className="footer-contact-item" sm><a href="https://github.com/AntoineOrgerit" target="_blank" rel="noopener noreferrer"><GithubFilled /></a></Col>
                <Col className="footer-contact-item" sm><a href="https://gitlab.com/AntoineOrgerit" target="_blank" rel="noopener noreferrer"><GitlabOutlined /></a></Col>
                <Col className="footer-contact-item" sm><a href="mailto:orgerit.antoine@gmail.com"><MailOutlined /></a></Col>
                <Col className="footer-contact-item" sm><a href="tel:+33678081825"><PhoneOutlined /></a></Col>
                <Col className="footer-contact-item" sm><a href="https://wa.me/33678081825" target="_blank" rel="noopener noreferrer"><WhatsAppOutlined /></a></Col>
            </Row>
        </Text>
        <Text type="secondary">&copy; {t("footer.copyright")}</Text>
    </Layout.Footer>;
}