import React from 'react';
import './TodoInput.css';
import { ITodoInputProps } from './models/ITodoInputProps';
import { ITodoInputState } from './models/ITodoInputState';
import { ITodo } from '../../models/ITodo';
import Plus from '../Icons/Plus';

class TodoInput extends React.Component<ITodoInputProps, ITodoInputState> {
  constructor(props: ITodoInputProps) {
    super(props);
    this.state = { label: "" };
  }

  get todo(): ITodo {
    return {
      label: this.state.label,
      done: false
    };
  }

  get isValid(): boolean {
    const todo = this.todo;
    const isValid = (typeof todo.label === "string" && todo.label.length > 0);
    return isValid;
  }

  handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setLabelValue(event.target.value);
  }

  setLabelValue = (label: string) => {
    this.setState({ label });
  }

  handleAdd = () => {
    const { addTodo } = this.props;
    if (addTodo && this.isValid) {
      addTodo(this.todo);
      this.setLabelValue("");
    }
  }

  render() {
    console.log("render: TodoInput", Date.now());
    return (
      <div className="todo-input">
        <input type="text" value={this.state.label} onChange={this.handleLabelChange}/>
        <button type="button" onClick={this.handleAdd}>
          <Plus size={16}/>
        </button>
      </div>
    );
  }
}

export default TodoInput;
