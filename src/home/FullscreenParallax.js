/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';

import './FullscreenParallax.css';

/**
 * Parallax component used as a full screen display.
 * 
 * @param {Object} props the properties used by the parallax
 * 
 * @author Antoine Orgerit
 * @version 1.1
 */
export default function FullscreenParallax(props) {
    const topOffset = Math.abs(props.topOffset) * -1 * 100;
    const bottomOffset = Math.abs(props.topOffset) * 100;

    const [style, setStyle] = useState((props.height ?
        {
            height: props.height + "px"
        } : {
            height: "100vh"
        }));

    useEffect(() => {
        if (props.height && ((props.height + "px") !== style.height)) {
            setStyle({
                height: props.height + "px"
            });
        }
    }, [props.height, style.height]);

    return <div className="fullscreen-parallax" style={style}>
        <Parallax className="fullscreen-parallax-container" y={[(topOffset + "%"), (bottomOffset + "%")]}>
            <div style={{ backgroundImage: `url(${props.backgroundImage})`, top: (topOffset + "%"), bottom: ((bottomOffset * -1) + "%") }}>
                <div className="fullscreen-parallax-content">
                    {props.children}
                </div>
            </div>
        </Parallax>
        <div className="temp" />
    </div>;
}

FullscreenParallax.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    topOffset: PropTypes.number.isRequired,
    bottomOffset: PropTypes.number.isRequired,
    height: PropTypes.number
};