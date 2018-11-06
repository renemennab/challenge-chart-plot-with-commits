import React from 'react';
import { Line } from 'react-chartjs-2';
import './chart.css';

const chart = props => {
	const colors = [
		'#6DBA52',
		'#26715D',
		'#8768A3',
		'#544669',
		'#7EBFDF',
		'#3866B1',
		'#F8CC2D',
		'#E9A854'
	];

	//function that maps through an object and outputs the groupset [mac, chrome]
	const extractGroupset = obj => {
		const arr1 = [];
		props.groups.map(g => {
			if (obj[g]) {
				return arr1.push(obj[g]);
			}
			return null;
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

	/////////////////////////////////////////
	const setsForCharts = [];

	const createObjForChart = s => {
		const objNames = [];
		props.onlyData.map(el => {
			const objName = s + '_' + el['groupset'].join('_');
			const obj1 = {};
			if (el[s] && objNames.indexOf(objName) === -1) {
				objNames.push(objName);
				obj1[objName] = [];
				obj1[objName].push(el[s]);
				return setsForCharts.push(obj1);
			} else if (el[s] && objNames.indexOf(objName) !== -1) {
				return addInSetsForCharts(objName, el[s]);
			}
			return null;
		});
	};

	//function to add the valie to array if there is already an objects for that set name
	const addInSetsForCharts = (objName, value) => {
		setsForCharts.map(ob => {
			if (ob[objName]) {
				return ob[objName].push(value);
			}
			return null;
		});
	};

	//function to map through selects and use addInSetsForCharts function
	const extractSelects = () => {
		const setsForChartNames = [];
		return props.selects.map(s => {
			return setsForChartNames.push(createObjForChart(s));
		});
	};

	/////////////////////////////////////////

	const datasetsArray = [];

	//Function to map through the result from extractSelects and return the datasets for the chart
	const SplitData = () => {
		var lineColor = -1;
		setsForCharts.map(dt => {
			//logic to make the results always use the colors from the colors array even if there are more sets than colors
			if (lineColor > colors.length - 2) {
				lineColor = 0;
			} else {
				lineColor++;
			}
			const newStuf = {
				label: Object.keys(dt)[0].replace(/_/g, ' '), // pega a resposta do os e a resposta do browser e junta com um select e transforma em string
				fill: false,
				data: dt[Object.keys(dt)[0]], //pega todos os min em uma array
				borderColor: [colors[lineColor]],
				backgroundColor: [colors[lineColor]]
			};
			return datasetsArray.push(newStuf);
		});
	};

	//what is rendered if the generate button hasn't been clicked
	let chart = <h1>no chart yet</h1>;

	if (props.onlyData !== null) {
		addGroupProprety(props.onlyData);
		extractSelects();
		SplitData();

		chart = (
			<Line
				data={{
					labels: [0, 0.1],
					datasets: [...datasetsArray]
				}}
				options={{
					maintainAspectRatio: false,
					legend: {
						labels: {
							fontSize: 12,
							usePointStyle: true,
							padding: 30
						},
						display: true,
						position: 'right'
					},
					showLines: true
				}}
			/>
		);
	}

	return <div className="chart">{chart}</div>;
};

export default chart;
