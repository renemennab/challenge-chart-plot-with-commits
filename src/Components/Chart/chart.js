import React from 'react';
import { Line } from 'react-chartjs-2';

const chart = props => {
	return (
		<div className="chart">
			<Line
				data={{
					labels: [0, 0.1],
					datasets: [
						{
							label: 'min chrome mac', // pega a resposta do os e a resposta do browser e junta com um select e transforma em string
							fill: false,
							data: [1.7, 1.3], //pega todos os min em uma array
							borderColor: ['#8768A3'],
							backgroundColor: ['#8768A3']
						},
						{
							label: 'max chrome mac',
							data: [0.1, 1.7],
							fill: false,
							borderColor: ['#6DBA52'],
							backgroundColor: ['#6DBA52']
						}
					]
				}}
				options={{
					legend: {
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
