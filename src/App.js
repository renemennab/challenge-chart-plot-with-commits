import React, { Component } from 'react';
import Data from './Containers/data';

class App extends Component {
	render() {
		const inputs = [
			{
				type: 'start',
				timestamp: 1,
				select: ['min_response_time', 'max_response_time'],
				group: ['os', 'browser']
			},
			{ type: 'span', timestamp: 1, begin: 2, end: 3 },
			{
				type: 'data',
				timestamp: 1,
				min_response_time: 7,
				max_response_time: 8,
				os: 'mac',
				browser: 'chrome'
			},
			{
				type: 'data',
				timestamp: 1,
				min_response_time: 4,
				max_response_time: 9,
				os: 'mac',
				browser: 'chrome'
			},
			{
				type: 'data',
				timestamp: 1,
				min_response_time: 7,
				max_response_time: 8,
				os: 'mac',
				browser: 'safari'
			},
			{
				type: 'data',
				timestamp: 1,
				min_response_time: 7,
				max_response_time: 8,
				os: 'mac',
				browser: 'safari'
			},
			{ type: 'stop', timestamp: 1 }
		];

		//const selects = ['min_response_time', 'max_response_time'];
		const groups = ['os', 'browser'];

		//function to filter the inputs and return only the data to generate chart
		const onlyData = [...inputs].filter(el => el['type'] === 'data');
		console.log(inputs);
		console.log(onlyData);

		//function that maps through an object and outputs the groupset [mac, chrome]
		const extractGroupset = obj => {
			const arr1 = [];
			groups.map(g => {
				if (obj[g]) {
					return arr1.push(obj[g]);
				}
				console.log('push1');
				console.log(arr1);
			});
			return (obj['groups'] = arr1);
		};

		//function that takes the array of objects and maps throug it to deliver de groupset it should analize and ads it as a new proprety
		const addGroupProprety = array => {
			const arr2 = [];
			array.map((el, i) => {
				console.log('push2');
				return arr2.push(extractGroupset(el));
			});
			return arr2;
		};
		console.log(addGroupProprety(onlyData));
		console.log(onlyData);

		return (
			<div className="App">
				<Data />
			</div>
		);
	}
}

export default App;

/*inputs: [{type: "start", timestamp: 1, select: ["min_response_time", "max_response_time"], group: ["os", "browser"]},
{type: "span", timestamp: 1, begin: 2, end: 3},
{type: "data", timestamp: 1, min_response_time: 7, max_response_time: 8, os: "mac", browser: "chrome"},
{type: "stop", timestamp: 1}]

passar um filter e pegar so datas
		['min_response_time', 'max_response_time']
		['os', 'browser']
xxx [
{type: "data", timestamp: 1, min_response_time: 7, max_response_time: 8, os: "mac", browser: "chrome"},
{type: "data", timestamp: 1, min_response_time: 4, max_response_time: 9, os: "mac", browser: "chrome"},
{type: "data", timestamp: 1, min_response_time: 7, max_response_time: 8, os: "mac", browser: "safari"},
{type: "data", timestamp: 1, min_response_time: 7, max_response_time: 8, os: "mac", browser: "safari"},
]


xxx.map(
	el => group.map(
		g=> 
			if(el[g]==true) {
				array1.push(el[g]) //ar1 [mac, chrome]
	arr2.push(arr1)
	xxx[group] = arr2
}))



const x =  currentSelect.map(el=> selects.push(el))// ['min_response_time', 'max_response_time']


separar selects e atribuilos como nome de objeto que recebe uma Array
selects: [
    {min_response_time + mac + chrome:[7,4]}
    {max_response_time + mac + chrome:[8,9]}
]

filtrar novamente e empurrar todos os numero para a array Certa 

inputs.filter(el => el[type] === 'data') */
