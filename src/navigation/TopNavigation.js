/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, Row, Col } from 'antd';

import LanguageSelection from './LanguageSelection';

import { ReactComponent as LogoMiniSVG } from './resources/img/logo-mini.svg';

import './TopNavigation.css';
import Icon from '@ant-design/icons';

const Header = Layout.Header;
const { Title } = Typography;

/**
 * Top navigation bar used on wide screens.
 * 
 * @author Antoine Orgerit
 * @version 1.0
 */
export default function TopNavigation() {
    return <Header id="top-navigation-container">
        <Row justify="space-between" align="middle">
            <Col className="top-navigation-logo-container top-navigation-element" md>
                <Link to="/"><Icon component={LogoMiniSVG} /><Title>Antoine Orger<span className="name-it-highlight">it</span></Title></Link>
            </Col>
            <Col md>
                <Row>
                    <Col className="top-navigation-element" xs><Link to="/experience">Experience</Link></Col>
                    <Col className="top-navigation-element" xs><Link to="/">Education</Link></Col>
                    <Col className="top-navigation-element" xs><Link to="/">Projects</Link></Col>
                </Row>
            </Col>
            <Col md>
                <Row>
                    <Col className="top-navigation-element" xs><Link to="/">Contact</Link></Col>
                    <Col className="top-navigation-element" xs><LanguageSelection /></Col>
                </Row>
            </Col>
        </Row>
    </Header>;
}