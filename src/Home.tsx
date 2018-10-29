
import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <div>HOME</div>
        <div><Link to='/one'>Goto Page One</Link></div>
        <div><Link to='/two'>Goto Page Two</Link></div>
      </div>);
  }
}

export default Home;
