/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Typography } from 'antd';
import EducationInformation from './EducationInformation';
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';

import './Education.css';

const { Title } = Typography;

export default function Education() {
    const { t } = useTranslation();

    const education = t("education", { returnObjects: true });

    return <div id="education-container">
        <Title level={3}>{education.heading}</Title>
        {
            education.items.map((diploma, index) => {
                return <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
                    <EducationInformation key={index} education={diploma} />
                </ScrollAnimation>;
            })
        }
    </div>
}