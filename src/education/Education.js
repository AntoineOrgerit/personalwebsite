/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Typography } from 'antd';
import EducationInformation from './EducationInformation';

import './Education.css';

import education from './resources/data.json';

const { Title, Paragraph } = Typography;

export default function Education() {
    console.log(education);
    return <div id="education-container">
        <Title level={3}>Education</Title>
        {
            education.map((diploma, index) => {
                console.log(diploma);
                return <EducationInformation key={index} education={diploma} />
            })
        }
    </div>
}