import React, { Component } from 'react';
import StartOut from './startOut';
//import './inputIn.css';

class inputIn extends Component {
	state = {
		currentType: '',
		currentTimestamp: [],
		currentSelect: [],
		currentGroup: [],
		currentBegin: '',
		currentEnd: '',
		selects: [],
		groups: [],
		inputs: []
	};

	//sets the state to the selected type of data to render the other fields accordingly
	handleChange = event => {
		this.setState({
			currentType: event.target.value
		});
	};

	//function to take the section or group input string and turn it into an array
	textToArrayHandler = event => {
		let removeQuotes = event.target.value.replace(/'/g, '');

		let removeSpaces = removeQuotes.trim().replace(/\s/g, '');

		return removeSpaces.split(',');
	};

	//function to set the state of currentSelect based on the input
	handleChangeSelect = event => {
		this.setState({
			currentSelect: this.textToArrayHandler(event)
		});
		console.log(this.state.currentSelect);
	};

	//function to set the state of currentGroup based on the input
	handleChangeGroup = event => {
		this.setState({
			currentGroup: this.textToArrayHandler(event)
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

		/* 		const data = this.state.currentSelect
        .concat(this.state.currentGroup)
        .map((sl, i) => ({
            sl:
        }
            <div key={sl + new Date().getTime()}>
                <label htmlFor={sl}>{sl}</label>
                <input type="text" name={sl} />
            </div>
        )); */

		/* const stop = {
			type: this.state.currentType,
			select: this.state.currentSelect,
			group: this.state.currentGroup
        }; */

		let change = null;

		switch (this.state.currentType) {
			case 'start':
				change = start;
				break;
			case 'span':
				change = span;
				break;
			/* 			case 'data':
				change = data;
				break; */
			default:
				break;
		}
		// set the state
		this.setState({
			inputs: [...this.state.inputs, change]
		});
		console.log(this.state.inputs);
	};

	//function to control what happens when you submmit the inputs
	onSubmitHandler = event => {
		event.preventDefault();
		console.log(event.target.value);
		this.addEventHandler();
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
					onChange={event => this.handleChangeSelect(event)}
				/>
				<label htmlFor="group">group</label>
				<input
					type="text"
					name="group"
					onChange={event => this.handleChangeGroup(event)}
				/>
			</div>
		);
		//what is to be rendered if state is span
		let span = (
			<div>
				<input type="number" name="begin" />
				<input type="number" name="end" />
			</div>
		);
		//what is to be rendered if state is data
		//currentSelect is concatenaded with currentGroup to map the product and return the labels according to the inputs from start
		let data = this.state.currentSelect
			.concat(this.state.currentGroup)
			.map((sl, i) => (
				<div key={sl + new Date().getTime()}>
					<label htmlFor={sl}>{sl}</label>
					<input type="text" name={sl} />
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
					onChange={this.handleChange}
					value={this.state.currentType}>
					<option value="type">type</option>
					<option value="start">start</option>
					<option value="span">span</option>
					<option value="data">data</option>
					<option value="stop">stop</option>
				</select>
				<h2>{JSON.stringify(this.state.inputs)}</h2>
				<label htmlFor="timestamp">timestamp</label>
				<input type="number" name="timestamp" />
				{options}
				<input type="submit" />
			</form>
		);
	}
}

export default inputIn;

/* 	handleChange2 = () => {
		this.setState({
			type: [...this.state.type, this.state.currentType]
		});
	}; */
