/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Typography } from 'antd';
import EducationInformation from './EducationInformation';
import { useTranslation } from 'react-i18next';

import './Education.css';

const { Title } = Typography;

export default function Education() {
    const { t } = useTranslation();

    const education = t("education", { returnObjects: true });

    return <div id="education-container">
        <Title level={3}>{education.heading}</Title>
        {
            education.items.map((diploma, index) => {
                return <EducationInformation key={index} education={diploma} />
            })
        }
    </div>
}