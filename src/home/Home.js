/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Button, Row, Col } from 'antd';
import TextLoop from "react-text-loop";
import ScrollAnimation from 'react-animate-on-scroll';

import FullscreenParallax from './FullscreenParallax';

import ProgrammingCityBackground from './resources/img/programming_city_edit.jpg';

import './Home.css';

const { Paragraph, Title } = Typography;

/**
 * Home page of the website.
 * 
 * @author Antoine Orgerit
 * @version 2.0
 */
export default function Home() {
    const { t } = useTranslation();

    /**
     * Shuffles an array using the Durstenfled algorithm.
     * 
     * @param {Array} array the array to shuffle
     */
    const durstenfledShuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    return <div className="home-container">
        <FullscreenParallax backgroundImage={ProgrammingCityBackground} topOffset={0.25} bottomOffset={0.2} height={(document.body.clientHeight - 64) * 0.9}>
            <Paragraph>Antoine Orgerit</Paragraph>
            <Title level={2}>{t("home.title")}</Title>
        </FullscreenParallax>
        <div className="skills-carousel-container">
            <Title className="word-carousel" level={3}>
                {t("home.skillsHighlight.heading")} <TextLoop className="word-carousel-items" mask={true}>
                    {
                        durstenfledShuffle(t("home.skillsHighlight.items", { returnObjects: true })).map((skill, index) => (
                            <span key={index}>{skill}</span>
                        ))
                    }
                </TextLoop>
            </Title>
        </div>
        <ScrollAnimation className="home-item-container" animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
            <Row gutter={[60, 0]}>
                <Col md={16}>
                    <div className="home-item-content">
                        <Title level={3}>{t("home.developerSection.heading")}</Title>
                        <Paragraph>{t("home.developerSection.content")}</Paragraph>
                        <div className="link-container">
                            <Button href="/about">{t("home.developerSection.button")}</Button>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="home-item-img" style={{ backgroundImage: `url(${ProgrammingCityBackground})` }} />
                </Col>
            </Row>
        </ScrollAnimation>
        <ScrollAnimation className="home-item-container" animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
            <Row gutter={[60, 0]}>
                <Col md={8}>
                    <div className="home-item-img" style={{ backgroundImage: `url(${ProgrammingCityBackground})` }} />
                </Col>
                <Col md={16}>
                    <div className="home-item-content">
                        <Title level={3}>{t("home.experienceSection.heading")}</Title>
                        <Paragraph>{t("home.experienceSection.content")}</Paragraph>
                        <div className="link-container">
                            <Button href="/experience">{t("home.experienceSection.button")}</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </ScrollAnimation>
        <ScrollAnimation className="home-item-container" animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
            <Row gutter={[60, 0]}>
                <Col md={16}>
                    <div className="home-item-content">
                        <Title level={3}>{t("home.projectsSection.heading")}</Title>
                        <Paragraph>{t("home.projectsSection.content")}</Paragraph>
                        <div className="link-container">
                            <Button href="/projects">{t("home.projectsSection.button")}</Button>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="home-item-img" style={{ backgroundImage: `url(${ProgrammingCityBackground})` }} />
                </Col>
            </Row>
        </ScrollAnimation>
    </div>;
}