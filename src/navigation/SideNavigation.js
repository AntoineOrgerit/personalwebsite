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

import LanguageSelection from './LanguageSelection';

import './SideNavigation.css';

const Sider = Layout.Sider;

/**
 * Side navigation displayed on small screen.
 * 
 * @author Antoine Orgerit
 * @version 1.0
 */
export default class SideNavigation extends React.Component {
    element = null;
    previousMarginRight = null;
    scrollbars = null;

    componentDidMount() {
        this.element = document.querySelector('body');
    }

    /**
     * Hanldes menu collapse status change to prevent screen scroll if necessary.
     * 
     * @param {Boolean} collasped value indicating if the menu is collapsed or not
     */
    handleOnCollaspe = collasped => {
        if (collasped) {
            this.element.style.overflowY = "scroll";
            enableBodyScroll(this.element);
        } else {
            this.element.style.overflowY = "hidden";
            disableBodyScroll(this.element);
        }
    }

    render() {
        return <Sider id="side-navigation-container" collapsible collapsedWidth={0} defaultCollapsed={true} trigger={<MenuOutlined />} width="9.5em" onCollapse={this.handleOnCollaspe}>
            <Menu mode="vertical">
                <Menu.Item><span><Link to="/experience">Experience</Link></span></Menu.Item>
                <Menu.Item><span><Link to="/">Education</Link></span></Menu.Item>
                <Menu.Item><span><Link to="/">Projects</Link></span></Menu.Item>
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