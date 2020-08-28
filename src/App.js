/**
 * Copyright 2020 Antoine Orgerit. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from 'antd';

import TopNavigation from './navigation/TopNavigation';
import Home from './home/Home';
import About from './about/About';
import Experience from './experience/Experience';
import Education from './education/Education';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import SideNavigation from './navigation/SideNavigation';
import Footer from './footer/Footer';

import './App.css';
import 'animate.css/animate.min.css';

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
        <TopNavigation />
        <Layout>
          <SideNavigation />
          <Content>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/experience">
                <Experience />
              </Route>
              <Route exact path="/education">
                <Education />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </Router>
  );
}
