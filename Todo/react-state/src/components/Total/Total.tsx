import React from 'react';
import './Total.css';
import { ITotalProps } from './models/ITotalProps';

class Total extends React.Component<ITotalProps, {}> {
  render() {
    console.log("render: Total", Date.now());
    const { total } = this.props;
    return (
      <div className="total">
        Total: {total}
      </div>
    );
  }
}

export default Total;
