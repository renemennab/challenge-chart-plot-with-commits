import React, { Component } from 'react';
//import './inputIn.css';

class inputIn extends Component {
	render() {
		let options = null;
		//console.log('props chart data' + this.props.);
		//what is to be rendered if state is start
		let start = (
			<div>
				<label htmlFor="select">select</label>
				<input
					type="text"
					name="select"
					onChange={event => this.props.handleChange(event)}
				/>
				<label htmlFor="group">group</label>
				<input
					type="text"
					name="group"
					onChange={event => this.props.handleChange(event)}
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
					onChange={event => this.props.handleChange(event)}
				/>
				<label htmlFor="end">end</label>
				<input
					type="number"
					name="end"
					onChange={event => this.props.handleChange(event)}
				/>
			</div>
		);
		//what is to be rendered if state is data
		//currentSelect is concatenaded with currentGroup to map the product and return the labels according to the inputs from start
		let data = this.props.currentSelect
			.concat(this.props.currentGroup)
			.map((sl, i) => (
				<div key={sl + i}>
					<label htmlFor={sl}>{sl}</label>
					<input
						type="text"
						name={sl}
						onChange={event =>
							this.props.getDataDataHandler(
								event,
								event.target.name,
								i
							)
						}
					/>
				</div>
			));

		switch (this.props.currentType) {
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
			<div>
				<form className="inputIn" onSubmit={this.props.onSubmitHandler}>
					<label htmlFor="types">types</label>
					<select
						name="types"
						onChange={event => this.props.handleChange(event)}
						value={this.props.currentType}>
						<option value="type">type</option>
						<option value="start">start</option>
						<option value="span">span</option>
						<option value="data">data</option>
						<option value="stop">stop</option>
					</select>
					<label htmlFor="timestamp">timestamp</label>
					<input
						type="number"
						name="timestamp"
						onChange={event => this.props.handleChange(event)}
					/>
					{options}
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default inputIn;
