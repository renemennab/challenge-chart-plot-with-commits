import React from 'react';
//import './startOut.css';

const startOut = props => {
	return (
		<div className="startOut">
			type: {props.type}, timestamp: {props.timestamp}, select:{' '}
			{props.select}, group: {props.group}
		</div>
	);
};

export default startOut;
