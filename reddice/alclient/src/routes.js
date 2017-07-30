import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import App from './components/App';
import Greeting from './components/Greeting';
import Signup from './components/signup/Signup';
export default(
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route exact path="/greet" component={Greeting} />
            <Route path="/signup" component={Signup} />
        </div>
    </Router>
);