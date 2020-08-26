/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, Row, Col } from 'antd';
import Icon from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import LanguageSelection from './LanguageSelection';

import { ReactComponent as LogoMiniSVG } from './resources/img/logo-mini.svg';

import './TopNavigation.css';

const Header = Layout.Header;
const { Title } = Typography;

/**
 * Top navigation bar used on wide screens.
 * 
 * @author Antoine Orgerit
 * @version 2.1
 */
export default function TopNavigation() {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const MenuItem = ({ link, title }) => {
        return <Col className={"top-navigation-element" + (pathname.includes(link) ? " active-navigation-element" : "")} xs>
            <Link to={link}>{title}</Link>
        </Col>;
    };

    return <Header id="top-navigation-container">
        <Row justify="space-between" align="middle">
            <Col className="top-navigation-logo-container top-navigation-element" md>
                <Link to="/"><Icon component={LogoMiniSVG} /><Title>Antoine Orger<span className="name-it-highlight">it</span></Title></Link>
            </Col>
            <Col md>
                <Row>
                    <MenuItem link="/about" title={t("menu.about")} />
                    <MenuItem link="/experience" title={t("menu.experience")} />
                    <MenuItem link="/education" title={t("menu.education")} />
                    <MenuItem link="/projects" title={t("menu.projects")} />
                </Row>
            </Col>
            <Col md>
                <Row>
                    <MenuItem link="/contact" title="Contact" />
                    <Col className="top-navigation-element" xs><LanguageSelection /></Col>
                </Row>
            </Col>
        </Row>
    </Header>;
}