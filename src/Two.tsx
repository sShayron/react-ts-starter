import * as React from 'react';
import { Link } from 'react-router-dom';

class Two extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <div>TWO</div>
        <Link to='/'>Goto Home</Link>
      </div>
    );
  }
}

export default Two;
