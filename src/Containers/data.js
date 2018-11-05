import React, { Component } from 'react';
import Header from '../Components/Header/header';
import InputIn from '../Components/Input/inputIn';
import Chart from '../Components/Chart/chart';

class Data extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<InputIn />
				<Chart />
			</div>
		);
	}
}

export default Data;
