import React from 'react';
import './inputOut.css';

const inputOut = props => {
	let renderedInputs = null;

	//a function to turn an object into a string separated by spans to make it possible to manipulate it via css
	//ids: number, key, string, boolean, null
	const syntaxHighlight = json => {
		if (typeof json != 'string') {
			json = JSON.stringify(json, undefined, 2);
		}
		json = json
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
		return json.replace(
			/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
			match => {
				let cls = 'number';
				if (/^"/.test(match)) {
					if (/:$/.test(match)) {
						cls = 'key';
					} else {
						cls = 'string';
					}
				} else if (/true|false/.test(match)) {
					cls = 'boolean';
				} else if (/null/.test(match)) {
					cls = 'null';
				}
				return '<span id="span_' + cls + '">' + match + '</span>';
			}
		);
	};

	//if statemnt to make shure it only runs after ther is an event in state.inputs
	if (props.inputs.length > 0) {
		renderedInputs = props.inputs.map((event, i) => {
			const jsxAsString = syntaxHighlight(event);
			return (
				<li
					key={event['type'] + i}
					//necessary to turn the string into jsx elements
					dangerouslySetInnerHTML={{
						__html: jsxAsString
					}}
				/>
			);
		});
	}

	return (
		<div className="inputOut">
			<ol>{renderedInputs}</ol>
		</div>
	);
};

export default inputOut;
