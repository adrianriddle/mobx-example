import React from 'react';
import './App.css';
import TodoInput from '../TodoInput/TodoInput';
import Todos from '../Todos/Todos';
import Total from '../Total/Total';
import { IAppProps } from './models/IAppProps';
import { IAppState } from './models/IAppState';
import { ITodo } from '../../models/ITodo';

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      todos: [
        {
          label: 'test 1',
          done: false
        },
        {
          label: 'test 2',
          done: false
        }
      ],
    }
  }
  addTodo = (todo: ITodo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }
  removeTodo = (todo: ITodo) => {
    this.setState({
      todos: this.state.todos.filter(t => t.label !== todo.label)
    });
  }
  render() {
    console.log("render: App", Date.now());
    const { todos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Todo</h1>
        </header>
        <section>
          <TodoInput addTodo={this.addTodo} />
          <Todos todos={todos} removeTodo={this.removeTodo} />
          <Total total={todos.length}/>
        </section>
      </div>
    );

  }
}

export default App;
