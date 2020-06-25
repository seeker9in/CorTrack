import React from 'react';
import { connect } from 'react-redux';

const CountryDetail = ({country}) => {

if (!country) {
    return <div>Select a country</div>;
}

    return <div>SELECTED COUNTRY IS - {country.name}</div>;
};

const mapStateToProps = (state) =>  {

    return {country : state.selectedCountry};
};

export default connect (mapStateToProps)(CountryDetail);