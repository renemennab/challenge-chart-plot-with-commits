import React, { Component } from 'react';
//import './inputIn.css';

class inputIn extends Component {
	state = {
		temporaryType: '',
		currentSelect: [],
		currentGroup: [],
		type: [],
		selects: [],
		groups: []
	};

	//sets the state to the selected type of data to render the other fields accordingly
	handleChange = event => {
		this.setState({
			temporaryType: event.target.value
		});
	};

	//function to take the section input string and turn it into an array
	handleChangeSection = event => {
		let removeQuotes = event.target.value.replace(/'/g, '');

		let clearedSpaces = removeQuotes.trim().replace(/\s/g, '');

		let textToArray = clearedSpaces.split(',');

		this.setState({
			currentSelect: textToArray
		});
	};

	handleChangeGroup = event => {
		let removeQuotes = event.target.value.replace(/'/g, '');

		let clearedSpaces = removeQuotes.trim().replace(/\s/g, '');

		let textToArray = clearedSpaces.split(',');

		this.setState({
			currentGroup: textToArray
		});
	};

	onSubmitHandler = event => {
		event.preventDefault();
		console.log(this.state.currentSelect);
	};

	handleChange2 = () => {
		this.setState({
			type: [...this.state.type, this.state.temporaryType]
		});
	};

	render() {
		let options = null;
		// create function to separate by commas and get the array elements

		//what is to be rendered if state is start
		let start = (
			<div>
				<label htmlFor="select">select</label>
				<input
					type="text"
					name="select"
					onChange={event => this.handleChangeSection(event)}
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
				<h2>i am span</h2>
				<input type="text" name="begin" />
				<input type="text" name="end" />
			</div>
		);
		//what is to be rendered if state is data
		let data = this.state.currentSelect.map(sl => (
			<div>
				<label htmlFor={sl}>{sl}</label>
				<input type="text" name={sl} />
			</div>
		));

		switch (this.state.temporaryType) {
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
					value={this.state.type}>
					<option value="type">type</option>
					<option value="start">start</option>
					<option value="span">span</option>
					<option value="data">data</option>
					<option value="stop">stop</option>
				</select>
				<h2>{this.state.type}</h2>
				<label htmlFor="timestamp">timestamp</label>
				<input type="number" name="timestamp" />
				{options}
				<input type="submit" />
			</form>
		);
	}
}

export default inputIn;
