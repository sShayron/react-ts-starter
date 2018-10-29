
import * as React from 'react';
import  { Router, Link } from 'react-router-dom';
import  createBrowserHistory from 'history/createBrowserHistory';
const   customHistory = createBrowserHistory();

class Home extends React.Component<any, any> {
  public render() {
    return (
      <Router history={customHistory}>
        <div>
          <div>HOME</div>
          <div><Link to='/one'>Goto Page One</Link></div>
          <div><Link to='/two'>Goto Page Two</Link></div>
        </div>
      </Router>
    );
  }
}

export default Home;
