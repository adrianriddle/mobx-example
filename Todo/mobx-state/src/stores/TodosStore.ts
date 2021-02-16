import { action, computed, makeObservable, observable } from 'mobx';
import { ITodo } from '../models/ITodo';

export class TodosStore {

	constructor() {
		makeObservable(this);
	}

	@observable.shallow
	todos: ITodo[] = [
		{
			label: 'test 1',
			done: false
		},
		{
			label: 'test 2',
			done: false
		}
	];

	@action
	add = (todo: ITodo) => {
		this.todos.push(todo);
	}

	@action
	remove = (todo: ITodo) => {
		this.todos = this.todos.filter(t => t.label !== todo.label);
	}

	@computed
	get total() {
		return (this.todos || []).length;
	}
}