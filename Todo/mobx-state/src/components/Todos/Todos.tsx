import React from 'react';
import { inject, observer } from 'mobx-react';
import './Todos.css';
import { ITodosProps } from './models/ITodosProps';
import Todo from '../Todo/Todo';

@inject("todosStore")
@observer
class Todos extends React.Component<ITodosProps, {}> {
  render() {
    console.log("render: Todos", Date.now());
    const { todosStore } = this.props;
    if (!todosStore) {
      return null;
    }
    const { todos = [] } = todosStore;
    return (
      <div className="todos">
        {todos.map(todo => <Todo key={todo.label} todo={todo} />)}
      </div>
    );
  }
}

export default Todos;
