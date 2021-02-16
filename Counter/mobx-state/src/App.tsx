import React from 'react';
import { inject, observer } from 'mobx-react';
import { CounterStore } from './CounterStore';
import './App.css';

export interface IProps {
  counterStore?: CounterStore;
}

@inject("counterStore")
@observer
class App extends React.Component<IProps, {}> {
  render() {
    console.log("render: App", Date.now());
    const { counterStore } = this.props;
    if (!counterStore) {
      return null;
    }
    const { count, add, subtract } = counterStore;
    return (
      <div className="App">
        <header className="App-header">
          Mobx State
        </header>
        <section>
          Counter: {count}
        </section>
        <div className="buttons">
          <button onClick={add}>Add</button>
          <button onClick={subtract}>Subtract</button>
        </div>
      </div>
    );
  }
}

export default App;
