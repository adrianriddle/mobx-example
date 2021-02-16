import React from 'react';
import { inject, observer } from 'mobx-react';
import './Total.css';
import { ITotalProps } from './models/ITotalProps';

@inject("todosStore")
@observer
class Total extends React.Component<ITotalProps, {}> {
	render() {
		console.log("render: Total", Date.now());
		const { todosStore } = this.props;
		if (!todosStore) {
			return null;
		}
		const { total } = todosStore;
		return (
			<div className="total">
				Total: {total}
			</div>
		);
	}
}

export default Total;
