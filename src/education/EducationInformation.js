/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from 'antd';

import './EducationInformation.css';

const { Title, Paragraph } = Typography;

export default function EducationInformation(props) {
    const education = props.education;

    return <div className="education-item">
        <Title level={4}>{education.title}</Title>
        <Paragraph className="education-result">{education.result}</Paragraph>
        <Paragraph className="education-description">{education.description}</Paragraph>
        <Button className="education-diploma-link" type="link" href={education.link}>See the diploma</Button>
    </div>;
}

EducationInformation.propTypes = {
    education: PropTypes.shape({
        title: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }).isRequired
};