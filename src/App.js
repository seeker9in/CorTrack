import React from 'react';
import './App.css';
import virusdata from './VirusData.json';

import CoronaChart from './CoronaChart.js';
import DisplayNotes from './DisplayNotes';
import CountryDetail from './components/CountryDetail';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

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
<Provider store = {createStore(reducers)}>
  <div className="App">
      <body>
        <DisplayNotes content={this.state} />
        <CountryDetail />     
        <CoronaChart id="coronaChart" width="20" height="15" chartdata={this.state.countrydata} />
      </body>
    </div>
  </Provider>
  );
}

}

export default App;
