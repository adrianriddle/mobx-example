import React from 'react';
import './Todos.css';
import { ITodosProps } from './models/ITodosProps';
import Todo from '../Todo/Todo';


class Todos extends React.Component<ITodosProps, {}> {
  render() {
    console.log("render: Todos", Date.now());
    const { todos = [], removeTodo } = this.props;
    return (
      <div className="todos">
        {todos.map(todo => <Todo key={todo.label} todo={todo} remove={removeTodo}/>)}
      </div>
    );
  }
}

export default Todos;
