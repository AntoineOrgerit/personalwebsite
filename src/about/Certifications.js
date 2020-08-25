/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

import './Certifications.css';

const { Title, Paragraph } = Typography;

/**
 * Component used to represent certifications.
 * 
 * @param {Object} props the properties of the component
 * @author Antoine Orgerit
 * @version 1.0
 */
export default function Certifications(props) {
    const { certifications, icon, heading, description } = props;

    return <div className="certifications-section">
        <Title level={4}>{icon} {heading}</Title>
        <Paragraph>{description}</Paragraph>
        <Row gutter={[0, 24]}>
            <Col xs={24} sm={24} style={{ overflow: "hidden" }}>
                <Row gutter={[144, 0]} align="middle">
                    {
                        certifications.map((certification, index) => (
                            <Col xs={24} sm={24} md={12} lg={(certifications.length >= 3 ? 8 : 12)} key={index}>
                                <Row className="certification" gutter={[8, 0]}>
                                    <Col xs={22} sm={22}>{certification.title}</Col>
                                    <Col xs={2} sm={2} style={{ textAlign: "right" }}><Button type="link" href={certification.link}><LinkOutlined /></Button></Col>
                                </Row>
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>
    </div>;
}

Certifications.propTypes = {
    heading: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    certifications: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }).isRequired).isRequired
};