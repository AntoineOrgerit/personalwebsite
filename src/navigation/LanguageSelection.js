/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import './LanguageSelection.css';

/**
 * Button displayed to change website language.
 * 
 * @author Antoine Orgerit
 * @version 2.1
 */
export default function LanguageSelection() {
    const { i18n } = useTranslation();

    const menu = <Menu>
        <Menu.Item className="language-option" onClick={() => i18n.changeLanguage("en")}>EN</Menu.Item>
        <Menu.Item className="language-option" onClick={() => i18n.changeLanguage("fr")}>FR</Menu.Item>
    </Menu>;

    return <Dropdown overlay={menu} placement="bottomCenter" overlayClassName="language-selection-dropdown-container">
        <Button id="language-selection-dropdown-btn" type="text" size="small">{i18n.language.substr(0, 2)}<DownOutlined /></Button>
    </Dropdown>;
}