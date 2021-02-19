import React from 'react';
import './App.css';

interface IProps {}
interface IState {
  count: number;
}

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = { count: 0 };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  subtract = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    console.log("render: App", Date.now());
    return (
      <div className="app">
        <header className="app-header">
          React State
      </header>
        <section>
          Counter: {this.state.count}
        </section>
        <div className="buttons">
          <button onClick={this.add}>Add</button>
          <button onClick={this.subtract}>Subtract</button>
        </div>
      </div>
    );
  }
}

export default App;
