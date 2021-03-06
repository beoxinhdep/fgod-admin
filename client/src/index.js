/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

//import { createStore, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';

//import store from './store';

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0"
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Login from "layouts/Login.jsx";
import Admin from "layouts/Admin.jsx"

//MDB Datatable
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const hist = createBrowserHistory();


ReactDOM.render(
  <Router history={hist}>
    {/* <Provider store={store}> */}
    <Switch>
      <Route path="/admin" render={props => <Admin {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Redirect to="/login" />
    </Switch>
    {/* </Provider> */}
  </Router>,
  document.getElementById("root")
);
