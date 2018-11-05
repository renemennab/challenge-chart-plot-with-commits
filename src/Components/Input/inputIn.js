import React, { Component } from 'react';
import './inputIn.css';

import NoDivWraper from '../HOC/noDivWraper';

class inputIn extends Component {
	render() {
		let options = null;

		//what is to be rendered if currentType is start
		let start = (
			<NoDivWraper>
				<label htmlFor="select">
					{','} select
					{':['}
				</label>
				<input
					type="text"
					name="select"
					onChange={event => this.props.handleChange(event)}
				/>
				<label htmlFor="group">
					{'],'} group
					{':['}
				</label>
				<input
					type="text"
					name="group"
					onChange={event => this.props.handleChange(event)}
				/>
				{']'}
			</NoDivWraper>
		);

		//what is to be rendered if currentType is span
		let span = (
			<NoDivWraper>
				<label htmlFor="begin">
					{','} begin
					{':'}
				</label>
				<input
					type="number"
					name="begin"
					onChange={event => this.props.handleChange(event)}
				/>
				<label htmlFor="end">
					{','} end
					{':'}
				</label>
				<input
					type="number"
					name="end"
					onChange={event => this.props.handleChange(event)}
				/>
			</NoDivWraper>
		);
		//what is to be rendered if currentType is data
		//currentSelect is concatenaded with currentGroup to map the product and return the labels according to the inputs from start
		let data = this.props.currentSelect
			.concat(this.props.currentGroup)
			.map((sl, i) => (
				<NoDivWraper key={sl + i}>
					<label htmlFor={sl}>
						{','} {sl}
						{':'}
					</label>
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
				</NoDivWraper>
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
			<div className="inputIn">
				<form className="inputIn" onSubmit={this.props.onSubmitHandler}>
					<label htmlFor="types">
						{'{'}
						type:
					</label>
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
					<label htmlFor="timestamp">, timestamp:</label>
					<input
						type="number"
						name="timestamp"
						onChange={event => this.props.handleChange(event)}
					/>
					{options}
					<span>{'}'}</span>
					<input type="submit" className="submitBtn" />
				</form>
			</div>
		);
	}
}

export default inputIn;
