/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
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
 * @version 1.0
 */
export default function Home() {
    return <div className="home-container">
        <FullscreenParallax backgroundImage={ProgrammingCityBackground} topOffset={0.25} bottomOffset={0.2} height={(document.body.clientHeight - 64) * 0.9}>
            <Paragraph>Antoine Orgerit</Paragraph>
            <Title level={2}>Software Engineering Graduate</Title>
        </FullscreenParallax>
        <div className="skills-carousel-container">
            <Title className="word-carousel" level={3}>
                Knowledge in: <TextLoop className="word-carousel-items" mask={true}>
                    <span>Java</span>
                    <span>JavaScript</span>
                    <span>ReactJS</span>
                </TextLoop>
            </Title>
        </div>
        <ScrollAnimation className="home-item-container" animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
            <Row gutter={[60, 0]}>
                <Col md={16}>
                    <div className="home-item-content">
                        <Title level={3}>Combining development and key values</Title>
                        <Paragraph>As a Software Engineering graduate, software development is in the heart of my everyday life point of view. From Front End to Back End, I try to put my work under sustainability, quality and reusability principles. This aims to emphasize evolution, either of the project itself or concepts and guidelines.</Paragraph>
                        <Button>See more</Button>
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
                        <Title level={3}>Varied experience and interest</Title>
                        <Paragraph>Experience is what value, through competencies and subjects. My professional experience reflects my curiousity about most topics of information technology (public or private interests, research, practices...). Still, I am mostly oriented to Full Stack stakes: data modeling, web services exposure, web or mobile front end solutions...</Paragraph>
                        <Button>See more</Button>
                    </div>
                </Col>
            </Row>
        </ScrollAnimation>
        <ScrollAnimation className="home-item-container" animateIn="animate__fadeInUp" animateOnce={true} offset={0} duration={0.8}>
            <Row gutter={[60, 0]}>
                <Col md={16}>
                    <div className="home-item-content">
                        <Title level={3}>Continuously learning, with projects</Title>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam non erat ultrices mattis ac a ex. Integer sed posuere felis. Cras nec consequat quam. Nullam efficitur tristique arcu, id lobortis ipsum commodo quis. Etiam dictum, sem ullamcorper maximus volutpat, quam magna iaculis nibh, vel pellentesque urna ex ut erat. Sed eget nunc cursus, suscipit tortor non, faucibus ante. Quisque dapibus, felis ut auctor congue, turpis erat venenatis justo, nec ultricies ipsum sapien at turpis.</Paragraph>
                        <Button>See more</Button>
                    </div>
                </Col>
                <Col md={8}>
                    <div className="home-item-img" style={{ backgroundImage: `url(${ProgrammingCityBackground})` }} />
                </Col>
            </Row>
        </ScrollAnimation>
    </div>;
}