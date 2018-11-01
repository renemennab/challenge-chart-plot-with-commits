import React, { Component } from 'react';
import Header from './header';
import DataInput from './dataInput';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<DataInput />
			</div>
		);
	}
}

export default App;
