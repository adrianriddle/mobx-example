import React from 'react';
import { inject, observer } from 'mobx-react';
import './Todo.css';
import { ITodoProps } from './models/ITodoProps';
import { action, makeObservable, observable } from 'mobx';
import Trash from '../Icons/Trash';

@inject("todosStore")
@observer
class Todo extends React.Component<ITodoProps, {}> {
  @observable
  done = false;

  @observable
  label: string;

  constructor(props: ITodoProps) {
    super(props);
    const { todo } = props;
    this.done = !!todo.done;
    this.label = todo.label;
    makeObservable(this);
  }

  @action
  toggleDone = () => {
    this.done = !this.done;
  }

  @action
  remove = () => {
    const { todosStore, todo } = this.props;
    if (todosStore) {
      todosStore.remove(todo);
    }
  }

  render() {
    console.log("render: Todo: ", this.label, Date.now());
    const className = [
      "todo"
    ];
    if (this.done) {
      className.push("todo-done");
    }
    return (
      <div className={className.join(" ")}>
        <div className="todo-actions">
          <input type="checkbox" className="toggle-button" checked={this.done} onChange={this.toggleDone} />
        </div>
        <label className="todo-label">{this.label}</label>
        <div className="todo-actions">
          <button type="button" className="remove-button" onClick={this.remove}>
            <Trash size={16} />
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
