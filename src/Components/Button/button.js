import React from 'react';
//import './button.css';

const button = props => {
	return (
		<button className="btn" onClick={props.click}>
			generate chart
		</button>
	);
};

export default button;
