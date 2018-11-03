import React, { Component } from 'react';
//import StartOut from './startOut';
//import './inputIn.css';

class inputIn extends Component {
	state = {
		currentType: '',
		currentTimestamp: 0,
		currentSelect: [],
		currentGroup: [],
		currentBegin: 0,
		currentEnd: 0,
		currentData: [],
		inputs: []
	};

	//sets the state to the selected type of data to render the other fields accordingly

	//function to take the section or group input string and turn it into an array
	textToArrayHandler = event => {
		let removeQuotes = event.target.value.replace(/'/g, '');

		let removeSpaces = removeQuotes.trim().replace(/\s/g, '');

		return removeSpaces.split(',');
	};

	//function to set the state based on the input
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

	getDataDataHandler = (event, name, index) => {
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
		console.log(this.state.inputs);
	};

	//function to control what happens when you submmit the inputs
	onSubmitHandler = event => {
		event.preventDefault();
		this.addEventHandler();
		this.setState({
			currentType: ''
		});
		if (this.state.currentType === 'stop') {
			this.setState({
				currentType: '',
				currentTimestamp: 0,
				currentSelect: [],
				currentGroup: [],
				currentBegin: 0,
				currentEnd: 0,
				currentData: []
			});
		}
	};

	render() {
		let options = null;

		//what is to be rendered if state is start
		let start = (
			<div>
				<label htmlFor="select">select</label>
				<input
					type="text"
					name="select"
					onChange={event => this.handleChange(event)}
				/>
				<label htmlFor="group">group</label>
				<input
					type="text"
					name="group"
					onChange={event => this.handleChange(event)}
				/>
			</div>
		);
		//what is to be rendered if state is span
		let span = (
			<div>
				<label htmlFor="begin">begin</label>
				<input
					type="number"
					name="begin"
					onChange={event => this.handleChange(event)}
				/>
				<label htmlFor="end">end</label>
				<input
					type="number"
					name="end"
					onChange={event => this.handleChange(event)}
				/>
			</div>
		);
		//what is to be rendered if state is data
		//currentSelect is concatenaded with currentGroup to map the product and return the labels according to the inputs from start
		let data = this.state.currentSelect
			.concat(this.state.currentGroup)
			.map((sl, i) => (
				<div key={sl + i}>
					<label htmlFor={sl}>{sl}</label>
					<input
						type="text"
						name={sl}
						onChange={event =>
							this.getDataDataHandler(event, event.target.name, i)
						}
					/>
				</div>
			));

		switch (this.state.currentType) {
			case 'start':
				options = start;
				break;
			case 'span':
				options = span;
				break;
			case 'data':
				options = data;
				break;
			default:
				break;
		}

		return (
			<form className="inputIn" onSubmit={this.onSubmitHandler}>
				<label htmlFor="types">types</label>
				<select
					name="types"
					onChange={event => this.handleChange(event)}
					value={this.state.currentType}>
					<option value="type">type</option>
					<option value="start">start</option>
					<option value="span">span</option>
					<option value="data">data</option>
					<option value="stop">stop</option>
				</select>
				<h2>{JSON.stringify(this.state.inputs)}</h2>
				<label htmlFor="timestamp">timestamp</label>
				<input
					type="number"
					name="timestamp"
					onChange={event => this.handleChange(event)}
				/>
				{options}
				<input type="submit" />
			</form>
		);
	}
}

export default inputIn;
