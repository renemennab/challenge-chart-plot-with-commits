import React from 'react';
//import './button.css';

const button = props => {
	return (
		<footer>
			<button className="btn" onClick={props.click}>
				generate chart
			</button>
		</footer>
	);
};

export default button;
