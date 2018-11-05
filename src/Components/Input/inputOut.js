import React from 'react';
//import './inputOut.css';

const inputOut = props => {
	return (
		<header className="inputOut">
			<p>Input out</p>
			<h2>{JSON.stringify(props.inputs)}</h2>
		</header>
	);
};

export default inputOut;
