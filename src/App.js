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
				min_response_time: 10,
				max_response_time: 11,
				os: 'mac',
				browser: 'safari'
			},
			{ type: 'stop', timestamp: 1 }
		];

		const selects = ['min_response_time', 'max_response_time'];
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
			});
			return (obj['groupset'] = arr1);
		};

		//function that takes the array of objects and maps throug it to deliver de groupset it should analize and ads it as a new proprety
		const addGroupProprety = array => {
			const arr2 = [];
			array.map((el, i) => {
				return arr2.push(extractGroupset(el));
			});
			return arr2;
		};
		console.log(addGroupProprety(onlyData));
		console.log(onlyData);

		/////////////////////////////////////////
		const setsForCharts = [];

		const createObjForChart = s => {
			const objNames = [];
			onlyData.map(el => {
				const objName = s + '_' + el['groupset'].join('_');
				const obj1 = {};
				if (el[s] && objNames.indexOf(objName) === -1) {
					objNames.push(objName);
					obj1[objName] = [];
					obj1[objName].push(el[s]);
					return setsForCharts.push(obj1); //{min_response_time + mac + chrome:[n]}
					//return obj1[objName].push(el[s]); //{min_response_time + mac + chrome:[n]}
				} else if (el[s] && objNames.indexOf(objName) !== -1) {
					return addInSetsForCharts(objName, el[s]); //{min_response_time + mac + chrome:[n]}
				}
			});
			console.log('push1');
			console.log(objNames);
			//console.log(obj1);
		};

		//function to add if there is already an objects for that set name
		const addInSetsForCharts = (objName, value) => {
			setsForCharts.map(ob => {
				if (ob[objName]) {
					return ob[objName].push(value);
				}
			});
		};
		//{type: "data", timestamp: 1, min_response_time: 4, max_response_time: 9, os: "mac", browser: "chrome", groupset: ["mac", "chrome"]},

		const extractSelects = () => {
			const setsForChartNames = [];
			return selects.map(s => {
				return setsForChartNames.push(createObjForChart(s));
			});
		};

		console.log(extractSelects());
		//console.log(onlyData);
		console.log(setsForCharts);

		/////////////////////////////////////////

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
{type: "data", timestamp: 1, min_response_time: 7, max_response_time: 8, os: "mac", browser: "chrome", groupset: ["mac", "chrome"]},
{type: "data", timestamp: 1, min_response_time: 4, max_response_time: 9, os: "mac", browser: "chrome", groupset: ["mac", "chrome"]},
{type: "data", timestamp: 1, min_response_time: 7, max_response_time: 8, os: "mac", browser: "safari", groupset: ["mac", "safari"]},
{type: "data", timestamp: 1, min_response_time: 7, max_response_time: 8, os: "mac", browser: "safari", groupset: ["mac", "safari"]},
]

const setsForChart = []
const extractSelects = () => {
			return selects.map(s => {
				return setsForChart.push(createObjForChart(s));
			});
		};

		const createObjForChart = (s) => {
			const obj1 = {};
			array.map(el => {
				if (el[s]){
					obj1[s+el[groupset].join] = []
					return obj1[s+el[groupset].join].push(obj[s]); //{min_response_time + mac + chrome:[n]}
				}
				console.log('push2');
			});
		};



const x =  currentSelect.map(el=> selects.push(el))// ['min_response_time', 'max_response_time']


separar selects e atribuilos como nome de objeto que recebe uma Array
selects: [
    {min_response_time + mac + chrome:[7,4]}
    {max_response_time + mac + chrome:[8,9]}
]

filtrar novamente e empurrar todos os numero para a array Certa 

inputs.filter(el => el[type] === 'data') */
