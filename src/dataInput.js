import React, { Component } from 'react';
//import Button from './dataInput';
//import './dataInput.css';

class dataInput extends Component {
	state = {
		data: { rene: 2 },
		data2: ['rene', 2, { rene: 2 }]
	};

	wordCounterHandler = event => {
		this.setState({
			//numOfCar: event.target.value.length,
			data: event.target.value
		});
	};

	render() {
		return (
			<div className="App">
				<input
					type="text"
					onChange={event => this.wordCounterHandler(event)}
					value={this.state.data}
				/>
				<p>{JSON.stringify(this.state.data)}</p>
			</div>
		);
	}
}

//<Button/>
export default dataInput;

//{JSON.stringify(this.state.data)}
