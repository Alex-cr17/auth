import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import App from "./components/App";
import { Route, BrowserRouter } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));