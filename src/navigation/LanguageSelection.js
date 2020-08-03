/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './LanguageSelection.css';

/**
 * Button displayed to change website language.
 * 
 * @author Antoine Orgerit
 * @version 1.0
 */
export default function LanguageSelection() {
    const menu = <Menu>
        <Menu.Item>EN</Menu.Item>
        <Menu.Item>FR</Menu.Item>
    </Menu>;

    return <Dropdown overlay={menu} placement="bottomCenter">
        <Button id="language-selection-dropdown-btn" type="text" size="small">EN<DownOutlined /></Button>
    </Dropdown>;
}