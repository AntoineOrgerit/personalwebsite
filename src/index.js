/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ParallaxProvider, useController } from 'react-scroll-parallax';

import './reset.css';
import './normalize.css';
import './index.css';
import './theme/theme.css';

/**
 * Helps to prevent weird behaviour for parallax elements by restoring scrolling
 * starting point at right position on page reload.
 */
const ParallaxCache = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener('load', handler);
    window.addEventListener('resize', handler);
    return () =>  {
      window.removeEventListener('load', handler);
      window.removeEventListener('resize', handler);
    }
  }, [parallaxController]);

  return null;
};

ReactDOM.render(
  <ParallaxProvider>
    <ParallaxCache />
    <App />
  </ParallaxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
