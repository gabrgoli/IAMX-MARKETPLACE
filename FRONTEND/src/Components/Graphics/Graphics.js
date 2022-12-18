import React, { Component } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

function Graphics({DataX=['January', 'February', 'March', 'April', 'May', 'June', 'July'], DataY=[500,4,5,46,4,500,15]}) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Overview',
          },
        },
      };
      
      const dateToNumber = new Date();

      console.log(dateToNumber.getTime());
    
      const labels = DataX;
    
      const data = {
        labels,
        datasets: [
          // {
          //   label: 'Dataset 1',
          //   data: [500,4,5,46,4,500,15],
          //   borderColor: 'rgb(255, 99, 132)',
          //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
          // },
          {
            label: 'Dataset 2',
            data: DataY,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
	return(
    <Line options={options} data={data} />

    )
}
export default Graphics