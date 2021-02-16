import React from 'react';
import { inject, observer } from 'mobx-react';
import './TodoInput.css';
import { ITodoInputProps } from './models/ITodoInputProps';
import { action, computed, makeObservable, observable } from 'mobx';
import { ITodo } from '../../models/ITodo';
import Plus from '../Icons/Plus';

@inject("todosStore")
@observer
class TodoInput extends React.Component<ITodoInputProps, {}> {
  constructor(props: ITodoInputProps) {
    super(props);
    makeObservable(this);
  }

  @observable
  label: string = "";

  @computed
  get todo(): ITodo {
    return {
      label: this.label,
      done: false
    };
  }

  @computed
  get isValid(): boolean {
    const todo = this.todo;
    const isValid = (typeof todo.label === "string" && todo.label.length > 0);
    return isValid;
  }

  @action
  handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.label = event.target.value;
  }

  @action
  handleAdd = () => {
    const { todosStore } = this.props;
    if (todosStore && this.isValid) {
      todosStore.add(this.todo);
      this.label = "";
    }
  }

  render() {
    console.log("render: TodoInput", Date.now());
    return (
      <div className="todo-input">
        <input type="text" value={this.label} onChange={this.handleLabelChange} />
        <button type="button" onClick={this.handleAdd}>
          <Plus size={16} />
        </button>
      </div>
    );
  }
}

export default TodoInput;
