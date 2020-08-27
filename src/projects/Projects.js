/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

export default function Projects() {
    const { t } = useTranslation();

    return <div id="projects-container">
        <Title level={3}>{t("projects.heading")}</Title>
        Nothing yet
    </div>;
}