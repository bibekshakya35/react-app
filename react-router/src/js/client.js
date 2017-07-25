import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, IndexRoute } from 'react-router-dom'
import Layout from './pages/Layout';
import Archived from './pages/Archived';
import Settings from './pages/Settings';
import Featured from './pages/Featured';
const app = document.getElementById('app');
ReactDOM.render(
    <HashRouter>
        <Route path="/" component={Layout} >
            <div>
                <IndexRoute component={Featured}></IndexRoute>
                <Route path="/" component={Settings} ></Route>
                <Route path="/" component={Archived} ></Route>
            </div>
        </Route>
    </HashRouter>
    , app);