import React, { Component } from 'react';
//import Button from './dataInput';
//import './dataInput.css';

class dataInput extends Component {
	state = {
		data: []
	};

	wordCounterHandler = event => {
		this.setState({
			data: event.target.value
		});
	};

	logStateHandler = () => console.log(this.state.data);
	extractDataHandler = () => {
		//JSON.parse(this.state.data)
		const dt = this.state.data;
		const obj = JSON.parse(dt);
		console.log(obj);
	};
	//.map(dt => console.log(dt));

	render() {
		return (
			<div className="App">
				<form>
					<input
						className="dataInput"
						type="text"
						onChange={event => this.wordCounterHandler(event)}
						value={this.state.data}
					/>
					<p>{JSON.stringify(this.state.data)}</p>
					<button onClick={this.logStateHandler}>log state</button>
					<button type="button" onClick={this.extractDataHandler}>
						extract data types
					</button>
				</form>
			</div>
		);
	}
}

export default dataInput;

/* {type: 'start', timestamp: 1519780251293, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']},
{type: 'span', timestamp: 1519780251293, begin: 1519780251293, end: 1519780260201},
{type: 'stop', timestamp: 1519780251293},
{type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3} */

//{'rene':'2'}

//'{ "name":"John", "age":30, "city":"New York"}'
