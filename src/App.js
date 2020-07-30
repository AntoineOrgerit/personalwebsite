/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from 'antd';
import Experience from './experience/Experience';

import './App.css';

const Content = Layout.Content;

/**
 * Global container of the website.
 * 
 * @author Antoine Orgerit
 * @version 1.0
 */
export default function App() {
  return (
    <Router>
      <Layout id="global-container">
        {/*navbar goes here*/}
        <Content>
          <Switch>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="*">
              <p>No content yet.</p>
            </Route>
          </Switch>
        </Content>
        {/*footer goes here*/}
      </Layout>
    </Router>
  );
}
