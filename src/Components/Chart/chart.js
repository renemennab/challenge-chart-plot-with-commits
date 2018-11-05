import React from 'react';
import { Line } from 'react-chartjs-2';

const chart = props => {
	const data = [
		{ min_response_time_mac_chrome: [1, 4] },
		{ min_response_time_mac_safari: [2, 5] },
		{ max_response_time_mac_chrome: [3, 6] },
		{ max_response_time_mac_chrome: [4, 7] },
		{ max_response_time_mac_chrome: [5, 8] },
		{ max_response_time_mac_chrome: [6, 9] },
		{ max_response_time_mac_chrome: [7, 10] },
		{ max_response_time_mac_chrome: [8, 11] }
	];
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

	const datasetsArray = [];
	const SplitData = () => {
		var lineColor = -1;
		data.map(dt => {
			if (lineColor > colors.length - 2) {
				lineColor = 0;
			} else {
				lineColor++;
			}
			console.log(lineColor);
			//JSON.stringify(Object.keys(dt)[0].replace(/_/g, ' '))
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
	console.log(SplitData());
	console.log(datasetsArray);

	return (
		<div className="chart">
			<Line
				data={{
					labels: [0, 0.1],
					datasets: [...datasetsArray]
				}}
				options={{
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
		</div>
	);
};

export default chart;

//[{ 'min chrome mac': [0.1, 1.3] }];

/* datasets: [
    {
        label: 'min chrome mac', // pega a resposta do os e a resposta do browser e junta com um select e transforma em string
        fill: false,
        data: [1.7, 1.3], //pega todos os min em uma array
        borderColor: ['#8768A3'],
        backgroundColor: ['#8768A3']
    }, */
