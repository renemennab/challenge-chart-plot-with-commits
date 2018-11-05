import React, { Component } from 'react';
import Header from '../Components/Header/header';
import InputIn from '../Components/Input/inputIn';
import InputOut from '../Components/Input/inputOut';
import Chart from '../Components/Chart/chart';
import Button from '../Components/Button/button';

//data is the main component. it holds all the components and it is where all global state should be
class Data extends Component {
	state = {
		currentType: '', // start, span, data, stop
		currentTimestamp: 0, //number
		currentSelect: [], //array of strings ['min_response_time', 'max_response_time']
		currentGroup: [], //array of strings ['os', 'browser']
		currentBegin: 0, //number
		currentEnd: 0, //number
		currentData: [], //object with the data input responses {min_response_time: 0.1, max_response_time:0.9, os: 'mac', browser: 'chrome' }
		inputs: [], //array of objects containing all the data from each submit
		selects: [], //array of strings ['min_response_time', 'max_response_time'] so they are not lost after stop
		groups: [], //array of strings ['os', 'browser'] so they are not lost after stop
		dataForChart: null //the data that is to be sent to generate chart
	};

	//function to take the section or group input string and turn it into an array
	textToArrayHandler = event => {
		let removeQuotes = event.target.value.replace(/'/g, '');

		let removeSpaces = removeQuotes.trim().replace(/\s/g, '');

		return removeSpaces.split(',');
	};

	//function to set the state based on the input to render the other fields accordingly
	handleChange = event => {
		switch (event.target.name) {
			case 'types':
				this.setState({
					currentType: event.target.value
				});
				break;
			case 'timestamp':
				this.setState({
					currentTimestamp: Number(event.target.value)
				});
				break;
			case 'select':
				this.setState({
					currentSelect: this.textToArrayHandler(event)
				});
				break;
			case 'group':
				this.setState({
					currentGroup: this.textToArrayHandler(event)
				});
				break;
			case 'begin':
				this.setState({
					currentBegin: Number(event.target.value)
				});
				break;
			case 'end':
				this.setState({
					currentEnd: Number(event.target.value)
				});
				break;

			default:
				break;
		}
	};

	// function to take numbers in string type and turn them into number type
	getDataDataHandler = (event, name) => {
		const test = { ...this.state.currentData };
		if (isNaN(Number(event.target.value))) {
			test[name] = event.target.value;
		} else {
			test[name] = Number(event.target.value);
		}

		this.setState({
			currentData: test
		});
	};

	//function to add the events to the inputs array
	addEventHandler = () => {
		const all = {
			type: this.state.currentType,
			timestamp: this.state.currentTimestamp
		};
		const start = {
			...all,
			select: this.state.currentSelect,
			group: this.state.currentGroup
		};

		const span = {
			...all,
			begin: this.state.currentBegin,
			end: this.state.currentEnd
		};

		const data = {
			...all,
			...this.state.currentData
		};

		const stop = {
			...all
		};

		let change = null;

		switch (this.state.currentType) {
			case 'start':
				change = start;
				break;
			case 'span':
				change = span;
				break;
			case 'data':
				change = data;
				break;
			case 'stop':
				change = stop;
				break;
			default:
				break;
		}
		// set the state to add a new submitt
		this.setState({
			inputs: [...this.state.inputs, change]
		});
	};

	//function to control what happens when you submmit the inputs
	onSubmitHandler = event => {
		event.preventDefault();
		this.addEventHandler();
		if (this.state.currentType === 'start') {
			this.setState({
				currentType: '',
				groups: this.state.currentGroup,
				selects: this.state.currentSelect
			});
		} else if (this.state.currentType === 'stop') {
			this.setState({
				currentType: '',
				currentTimestamp: 0,
				currentSelect: [],
				currentGroup: [],
				currentBegin: 0,
				currentEnd: 0,
				currentData: []
			});
		} else {
			this.setState({
				currentType: ''
			});
		}
	};

	//function to filter the inputs and return only the data to activate chart
	filterDataForChartHandler = () => {
		const onlyData = [...this.state.inputs].filter(
			el => el['type'] === 'data'
		);
		this.setState({
			dataForChart: onlyData
		});
	};

	render() {
		return (
			<div className="App">
				<Header />

				<InputIn
					currentType={this.state.currentType}
					currentTimestamp={this.state.currentTimestamp}
					currentSelect={this.state.currentSelect}
					currentGroup={this.state.currentGroup}
					currentBegin={this.state.currentBegin}
					currentEnd={this.state.currentEnd}
					currentData={this.state.currentData}
					inputs={this.state.inputs}
					selects={this.state.selects}
					groups={this.state.groups}
					handleChange={event => this.handleChange(event)}
					getDataDataHandler={(event, name) =>
						this.getDataDataHandler(event, name)
					}
					onSubmitHandler={event => this.onSubmitHandler(event)}
				/>

				<InputOut inputs={this.state.inputs} />

				<Chart
					onlyData={this.state.dataForChart}
					selects={this.state.selects}
					groups={this.state.groups}
				/>

				<Button click={this.filterDataForChartHandler} />
			</div>
		);
	}
}

export default Data;
