import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart,registerables } from 'chart.js';
export const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { Chart.register(...registerables
  )}
  ngOnInit() {
var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: [20,30,40,50,60],
        datasets: [{
          label: 'Chart1',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  var chart2=new Chart(
    "chart2",{
      type: 'doughnut',
      data:{
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    }
  );
  // var chart3=new Chart(
  //   "chart3",{
  //     type: 'line',
  //     data: {
  //       labels: [],
  //       datasets: [
  //         {
  //           label: 'Cubic interpolation (monotone)',
  //           data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
  //           borderColor: CHART_COLORS.red,
  //           fill: false,
  //           cubicInterpolationMode: 'monotone',
  //           tension: 0.4
  //         }, {
  //           label: 'Cubic interpolation',
  //           data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
  //           borderColor: CHART_COLORS.blue,
  //           fill: false,
  //           tension: 0.4
  //         }, {
  //           label: 'Linear interpolation (default)',
  //           data: [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170],
  //           borderColor:  CHART_COLORS.green,
  //           fill: false
  //         }
  //       ]
  //     },
  //     options: {
  //       responsive: true,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'Chart.js Line Chart - Cubic interpolation mode'
  //         },
  //       },
  //       interaction: {
  //         intersect: false,
  //       },
  //       scales: {
  //         x: {
  //           display: true,
  //           title: {
  //             display: true
  //           }
  //         },
  //         y: {
  //           display: true,
  //           title: {
  //             display: true,
  //             text: 'Value'
  //           },
  //           suggestedMin: -10,
  //           suggestedMax: 200
  //         }
  //       }
  //     },
    
  //   }
  // );

  }
}
