import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
import TodoInput from '../TodoInput/TodoInput';
import Todos from '../Todos/Todos';
import Total from '../Total/Total';
import { IAppProps } from './models/IAppProps';

@observer
class App extends React.Component<IAppProps, {}> {
  render() {
    console.log("render: App", Date.now());
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mobx Todo</h1>
        </header>
        <section>
          <TodoInput />
          <Todos />
          <Total />
        </section>
      </div>
    );

  }
}

export default App;
