import React, { Component } from 'react';
//import Button from './dataInput';
//import './dataInput.css';

class dataInput extends Component {
	state = {
		data: []
	};

	wordCounterHandler = event => {
		this.setState({
			//numOfCar: event.target.value.length,
			data: event.target.value
		});
	};

	logStateHandler = () => console.log(this.state);

	render() {
		return (
			<div className="App">
				<input
					type="text"
					onChange={event => this.wordCounterHandler(event)}
					value={this.state.data}
				/>
				<p>{JSON.stringify(this.state.data)}</p>
				<button onClick={this.logStateHandler}>log state</button>
			</div>
		);
	}
}

//<Button/>
export default dataInput;

//{JSON.stringify(this.state.data)}
