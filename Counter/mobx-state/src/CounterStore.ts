import { action, makeObservable, observable } from 'mobx';

export class CounterStore {

	constructor() {
		makeObservable(this);
	}

	@observable
	count: number = 0;

	@action
	add = () => {
		this.count += 1;
	}

	@action
	subtract = () => {
		this.count -= 1;
	}
}