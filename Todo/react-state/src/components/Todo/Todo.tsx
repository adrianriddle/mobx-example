import React from 'react';
import './Todo.css';
import { ITodoProps } from './models/ITodoProps';
import { ITodoState } from './models/ITodoState';
import Trash from '../Icons/Trash';

class Todo extends React.Component<ITodoProps, ITodoState> {
  constructor(props: ITodoProps) {
    super(props);
    const { todo } = props;
    this.state = todo;
  }

  toggleDone = () => {
    this.setState({
      done: !this.state.done,
    });
  }

  remove = () => {
    const { todo, remove } = this.props;
    if (remove) {
      remove(todo);
    }
  }

  render() {
    console.log("render: Todo: ", this.state.label, Date.now());
    const className = [
      "todo"
    ];
    if (this.state.done) {
      className.push("todo-done");
    }
    return (
      <div className={className.join(" ")}>
        <div className="todo-actions">
          <input type="checkbox" className="toggle-button" checked={this.state.done} onChange={this.toggleDone} />
        </div>
        <label className="todo-label">{this.state.label}</label>
        <div className="todo-actions">
          <button type="button" className="remove-button" onClick={this.remove}>
            <Trash size={16}/>
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
