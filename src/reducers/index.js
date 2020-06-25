import { combineReducers } from 'redux';


const countriesReducer = () => {
return [

 {id: 'IN', name: 'India'},
 {id:'US', name: 'America'},
 {id:'UK', name: 'United Kingdom'},
 {id: 'AU', name: 'Australia'}

];

};


const selectedCountryReducer = (selectedCountry = null, action) => {
    if (action.type === 'COUNTRY_SELECTED') {
        return action.payload;
    }

    return selectedCountry;
};

export default combineReducers ({
    countries: countriesReducer,
    selectedCountry: selectedCountryReducer
})