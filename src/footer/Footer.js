/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

import './Footer.css';
import { LinkedinFilled, GithubFilled, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function Footer() {
    return <Layout.Footer id="footer">
        <Text className="footer-contact-container"><Row justify="space-around" gutter={[16, 0]}>
            <Col className="footer-contact-item" sm><a href="https://www.linkedin.com/in/antoine-orgerit/" target="_blank" rel="noopener noreferrer"><LinkedinFilled />&nbsp;antoine-orgerit</a></Col>
            <Col className="footer-contact-item" sm><a href="https://github.com/AntoineOrgerit" target="_blank" rel="noopener noreferrer"><GithubFilled />&nbsp;AntoineOrgerit</a></Col>
            <Col className="footer-contact-item" sm><a href="mailto:orgerit.antoine@gmail.com"><MailOutlined />&nbsp;orgerit.antoine@gmail.com</a></Col>
            <Col className="footer-contact-item" sm><a href="tel:+33678081825"><PhoneOutlined />&nbsp;+33&nbsp;(0)6&nbsp;78&nbsp;08&nbsp;18&nbsp;25</a></Col>
        </Row></Text>
        <Text type="secondary">&copy; Antoine Orgerit, 2020. All rights reserved.</Text>
    </Layout.Footer>;
}