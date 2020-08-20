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

    constructor(props) {
        super(props);
        this.state = {
            menuCollapsed: true
        };

        this.menuRef = React.createRef();
    }

    componentDidMount() {
        this.element = document.querySelector('body');
        document.addEventListener('click', this.handleClickOutside);
    }

    /**
     * Handles menu collapse status change to prevent screen scroll if necessary.
     * 
     * @param {Boolean} collapsed value indicating if the menu is collapsed or not
     */
    handleOnCollapse = collapsed => {
        this.setState({ menuCollapsed: collapsed });
        if (collapsed) {
            this.element.style.overflowY = "scroll";
            enableBodyScroll(this.element);
        } else {
            this.element.style.overflowY = "hidden";
            disableBodyScroll(this.element);
        }
    }

    /**
     * Allows to toggle the collapse state of the side menu.
     */
    toggleCollapsed = _ => {
        this.setState({ menuCollapsed: !this.state.menuCollapsed });
    }

    handleClickOutside = event => {
        if (!this.state.menuCollapsed && this.menuRef && !this.menuRef.current.contains(event.target) && !event.target.classList.contains("language-option")) {
            this.toggleCollapsed();
        }
    }

    render() {
        const { t } = this.props;

        return <div id="side-navigation-container" className={this.state.menuCollapsed ? "collapsed" : ""} ref={this.menuRef}>
            <Sider collapsible collapsedWidth={0} defaultCollapsed={true} trigger={<MenuOutlined />} width="9.5em" onCollapse={this.handleOnCollapse} collapsed={this.state.menuCollapsed}>
                <Menu mode="vertical">
                    <Menu.Item onClick={this.toggleCollapsed}><span><Link to="/">{t("menu.about")}</Link></span></Menu.Item>
                    <Menu.Item onClick={this.toggleCollapsed}><span><Link to="/experience">{t("menu.experience")}</Link></span></Menu.Item>
                    <Menu.Item onClick={this.toggleCollapsed}><span><Link to="/education">{t("menu.education")}</Link></span></Menu.Item>
                    <Menu.Item onClick={this.toggleCollapsed}><span><Link to="/">{t("menu.projects")}</Link></span></Menu.Item>
                    <Menu.Divider />
                    <Menu.Item onClick={this.toggleCollapsed} className="side-navigation-item-bottom"><span><Link to="/">Contact</Link></span></Menu.Item>
                    <Menu.Item className="side-navigation-item-bottom side-navigation-language-selection-container" disabled><LanguageSelection /></Menu.Item>
                </Menu>
            </Sider>
        </div>;
    }

    componentWillUnmount() {
        clearAllBodyScrollLocks();
        document.removeEventListener('click', this.handleClickOutside);
    }
}

export default withTranslation()(SideNavigation);