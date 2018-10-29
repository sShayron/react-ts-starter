import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Home from './Home';
import One from './One';
import Two from './Two';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/one" component={One} />
      <Route exact path="/two" component={Two} />
    </div>
  </Router>

  , document.getElementById('root') as HTMLElement
);

registerServiceWorker();
