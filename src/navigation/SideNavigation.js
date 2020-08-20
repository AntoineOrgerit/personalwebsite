/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { withTranslation } from 'react-i18next';

import LanguageSelection from './LanguageSelection';

import './SideNavigation.css';

const Sider = Layout.Sider;

/**
 * Side navigation displayed on small screen.
 * 
 * @author Antoine Orgerit
 * @version 2.0
 */
class SideNavigation extends React.Component {
    element = null;
    previousMarginRight = null;
    scrollbars = null;

    componentDidMount() {
        this.element = document.querySelector('body');
    }

    /**
     * Handles menu collapse status change to prevent screen scroll if necessary.
     * 
     * @param {Boolean} collapsed value indicating if the menu is collapsed or not
     */
    handleOnCollapse = collapsed => {
        if (collapsed) {
            this.element.style.overflowY = "scroll";
            enableBodyScroll(this.element);
        } else {
            this.element.style.overflowY = "hidden";
            disableBodyScroll(this.element);
        }
    }

    render() {
        const { t } = this.props;

        return <Sider id="side-navigation-container" collapsible collapsedWidth={0} defaultCollapsed={true} trigger={<MenuOutlined />} width="9.5em" onCollapse={this.handleOnCollapse}>
            <Menu mode="vertical">
                <Menu.Item><span><Link to="/">{t("menu.about")}</Link></span></Menu.Item>
                <Menu.Item><span><Link to="/experience">{t("menu.experience")}</Link></span></Menu.Item>
                <Menu.Item><span><Link to="/education">{t("menu.education")}</Link></span></Menu.Item>
                <Menu.Item><span><Link to="/">{t("menu.projects")}</Link></span></Menu.Item>
                <Menu.Divider />
                <Menu.Item className="side-navigation-item-bottom"><span><Link to="/">Contact</Link></span></Menu.Item>
                <Menu.Item className="side-navigation-item-bottom side-navigation-language-selection-container" disabled><LanguageSelection /></Menu.Item>
            </Menu>
        </Sider>;
    }

    componentWillUnmount() {
        clearAllBodyScrollLocks();
    }
}

export default withTranslation()(SideNavigation);