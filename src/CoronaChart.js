import React from 'react';
import Chart from 'chart.js';

class CoronaChart extends React.Component {
constructor (props){
  super (props);

this.state = {
  countrydata : props.chartdata,
  width : props.width,
  height : props.height
};

}


componentDidMount(){

  var dateList = [];
  dateList = Object.keys(this.state.countrydata); 

  var total_count = [];
  total_count = Object.values(this.state.countrydata).map(countryCount  => Math.log(parseInt(countryCount["total_cases"])));

  var death_count = [];
  death_count = Object.values(this.state.countrydata).map(deathCount  => Math.log(parseInt(deathCount["total_deaths"])));
  
  // remove the stat  key value pair
  dateList.splice(-1); 
  total_count.splice(-1);
  death_count.splice(-1);

  var corcht = document.getElementById("coronaChart").getContext('2d');
  var myChart = new Chart(corcht, {
  
    type : 'line',
    
    data: {
//    labels : ['1/30/20', '1/31/20', '2/01/20', '2/02/20', '2/03/20', '2/04/20', '2/05/20' ],
      labels : dateList,
  
      datasets : [
        {
        label : 'Total Corona patients in India',
  
      //  data : [10,834,4040,8500,17500,24800,33000],
          data: total_count,

        borderColor: [
          'rgba(255, 99, 132, 1)'
      ],
      borderWidth : 1
      },
      
      {
        label : 'Total Corona deaths in India',
  
          data: death_count,

        borderColor: [
          'rgba(130, 230, 132, 1)'
      ],
      borderWidth : 1
      }
  
    ]
  
    },
    options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
      responsive : true,
      maintainAspectRatio : true,
    }
  
  });
}


render() {
//    var dateList1 = []; 
  //  dateList1 = this.state.countrydata.map(countryDetail  => {
    //  return Object.keys(countryDetail);
   // });

 return (
    <div>
        <h1>Inside sub-component CHART - {(Object.keys(this.state.countrydata)).length} </h1>
            <canvas id="coronaChart" />
    </div>
    );
}

}

export default CoronaChart;
