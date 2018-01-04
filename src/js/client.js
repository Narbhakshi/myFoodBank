import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";



import Layout from "./components/Layout";
import LoginPage from "./components/landingPage/LoginPage";
import Dashboard from "./components/dashboard/DashboardMain";
import TestChart from "./components/charts/TestChart";
import NotificationTest from "./components/test/NotificationTest";


const app = document.getElementById('app');





ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={NotificationTest}></Route>
    <Route path="dashboard" name="dashboard" component={Dashboard}></Route>
    <Route path="testChart" name="testChart" component={TestChart}></Route>
  </Router>




  , app);
