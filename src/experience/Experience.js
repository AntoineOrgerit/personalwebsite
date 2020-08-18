/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Timeline, Typography } from 'antd';

import ExperienceInformation from './ExperienceInformation';

import './Experience.css';

import experiences from './resources/data.json';
import ScrollAnimation from 'react-animate-on-scroll';

const { Title } = Typography;

/**
 * Component used as the Experience web page.
 * 
 * @author Antoine Orgerit
 * @version 1.0
 */
export default function Experience() {

    /**
     * Allows to format an experience period to correctly be responsive.
     * 
     * @param {String} period the period to format
     */
    const formatPeriod = period => {
        return period.replace(/\. /g, ".\xa0");
    };

    return <div id="experience-container">
        <Title level={3}>Experience</Title>
        <Timeline mode="left">
            {
                experiences.map((experience, index) => (
                    <ScrollAnimation key={index} animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
                        <Timeline.Item label={formatPeriod(experience.period)}>
                            <ExperienceInformation experience={experience} />
                        </Timeline.Item>
                    </ScrollAnimation>
                ))
            }
        </Timeline>
    </div>;
}