import React from 'react';
import './App.css';
import virusdata from './VirusData.json';

import CoronaChart from './CoronaChart.js';

// https://api.thevirustracker.com/free-api?CountryTimeline=IN
const API_ENDPOINT_IN = 'https://api.thevirustracker.com/free-api?CountryTimeline=IN';

class App extends React.Component {
constructor (props){
  super (props);
  
this.state = {
  error : null,
  isLoaded: false,
//  countrydata : []
  countrydata : virusdata.timelineitems[0]
};

}

componentDidMount() {
//console.log("Inside component Did Mount");


  //Call API to get data - works async
fetch(API_ENDPOINT_IN, {
  mode: 'no-cors'
})
.then (response => response.json())
.then(
  data => { 
//    var tempResponseArray = [];
  //  tempResponseArray = data.timelineitems;
    this.setState({
    isLoaded: true,
    countrydata : data.timelineitems[0]
    });
  }
  , 
  (error) => {
    this.setState ({
      isLoaded : false ,
      error: error
    });
  } 
)

}


render() {

return (
  <div className="App">
      <body>
      <h1>Welcome in App - Count - {(Object.keys(this.state.countrydata)).length} </h1>
      <h1>API called - {this.state.isLoaded.toString()} </h1>
      <h1>Error - {Object.toString(this.state.error)} </h1>
        
        <CoronaChart id="coronaChart" width="20" height="15" chartdata={this.state.countrydata} />
      </body>
    </div>

  );
}

}

export default App;
