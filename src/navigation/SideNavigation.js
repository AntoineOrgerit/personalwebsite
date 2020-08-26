/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
 * @version 2.1
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
        this.handleOnCollapse(!this.state.menuCollapsed);
    }

    /**
     * Handles click events to determine if they have been performed outside of the side menu.
     * 
     * @param {Event} event the click event to analyse
     */
    handleClickOutside = event => {
        if (!this.state.menuCollapsed && this.menuRef && !this.menuRef.current.contains(event.target) && !event.target.classList.contains("language-option")) {
            this.toggleCollapsed();
        }
    }

    /**
     * Determines the active key of the side menu.
     * 
     * @param {String} pathname the current pathname of the website
     */
    getActivePathname = pathname => {
        let pathnameWithoutLeadingSlash = pathname.substring(1);
        let bookmarkCharacterIndex = pathnameWithoutLeadingSlash.indexOf("#");
        return (bookmarkCharacterIndex === -1 ? pathnameWithoutLeadingSlash : pathnameWithoutLeadingSlash.substring(0, bookmarkCharacterIndex));
    }

    render() {
        const { t, location } = this.props;

        let activeKey = this.getActivePathname(location.pathname);

        return <div id="side-navigation-container" className={this.state.menuCollapsed ? "collapsed" : ""} ref={this.menuRef}>
            <Sider collapsible collapsedWidth={0} defaultCollapsed={true} trigger={<MenuOutlined />} width="9.5em" onCollapse={this.handleOnCollapse} collapsed={this.state.menuCollapsed}>
                <Menu mode="vertical" selectedKeys={[activeKey]}>
                    <Menu.Item key="about" onClick={this.toggleCollapsed}><span><Link to="/about">{t("menu.about")}</Link></span></Menu.Item>
                    <Menu.Item key="experience" onClick={this.toggleCollapsed}><span><Link to="/experience">{t("menu.experience")}</Link></span></Menu.Item>
                    <Menu.Item key="education" onClick={this.toggleCollapsed}><span><Link to="/education">{t("menu.education")}</Link></span></Menu.Item>
                    <Menu.Item key="projects" onClick={this.toggleCollapsed}><span><Link to="/projects">{t("menu.projects")}</Link></span></Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="contact" onClick={this.toggleCollapsed} className="side-navigation-item-bottom"><span><Link to="/contact">Contact</Link></span></Menu.Item>
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

export default withRouter(withTranslation()(SideNavigation));