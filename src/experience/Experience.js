/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Timeline, Typography } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

import ExperienceInformation from './ExperienceInformation';

import './Experience.css';

const { Title } = Typography;

/**
 * Component used as the Experience web page.
 * 
 * @author Antoine Orgerit
 * @version 1.0
 */
export default function Experience() {
    const { t } = useTranslation();

    const experiences = t("experiences", { returnObjects: true });

    /**
     * Allows to format an experience period to correctly be responsive.
     * 
     * @param {String} period the period to format
     */
    const formatPeriod = period => {
        return period.replace(/(?<=\w\.|\w)\s(?=\d+)/g, "\xa0");
    };

    return <div id="experience-container">
        <Title level={3}>{experiences.heading}</Title>
        <Timeline mode="left">
            {
                experiences.items.map((experience, index) => (
                    <ScrollAnimation key={index} animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
                        <Timeline.Item id={experience.bookmark} label={formatPeriod(experience.period)}>
                            <ExperienceInformation experience={experience} />
                        </Timeline.Item>
                    </ScrollAnimation>
                ))
            }
        </Timeline>
    </div>;
}