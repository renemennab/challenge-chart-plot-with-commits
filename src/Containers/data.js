import React, { Component } from 'react';
import Header from '../Components/Header/header';
import InputIn from '../Components/Input/inputIn';
import InputOut from '../Components/Input/inputOut';
import Chart from '../Components/Chart/chart';

class Data extends Component {
	state = {
		inputs: [], //array of objects containing all the data from each submit
		selects: [], //array of strings ['min_response_time', 'max_response_time']
		groups: [] //array of strings ['os', 'browser']
	};

	render() {
		return (
			<div className="App">
				<Header />
				<InputIn />
				<InputOut inputs={this.state.inputs} />
				<Chart
					inputs={this.state.inputs} //array of objects containing all the data from each submit
					selects={this.state.selects} //array of strings ['min_response_time', 'max_response_time']
					groups={this.state.groups}
				/>
			</div>
		);
	}
}

export default Data;
