import React from 'react';
import './button.css';

const button = props => {
	return (
		<div className="back">
			<button className="btn" onClick={props.click}>
				GENERATE CHART
			</button>
		</div>
	);
};

export default button;
