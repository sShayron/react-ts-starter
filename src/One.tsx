import * as React from 'react';
import { Link } from 'react-router-dom';

class One extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <div>ONE</div>
        <Link to='/'>Goto Home</Link>
      </div>
    );
  }
}

export default One;
