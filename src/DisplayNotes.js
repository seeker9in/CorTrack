import React from "react";
import { connect } from 'react-redux';
import { selectCountry } from './actions';

class DisplayNotes extends React.Component {
constructor(props) {
    super(props);
}

    // add a helper function to return array of countries to display

    renderList(){
        return this.props.countries.map((country) => {
            return (
                    <div className="item" key={country.id}>
                        <div className="right floated content">
                            <button className="ui button primary"
                            onClick = {() => this.props.selectCountry(country)}>
                                Choose Country
                            </button>
                        </div>
                        <div className="content">{country.name}</div>
                    </div>
            );
        });

    }


    render(){
    return (
        <div>
            <div className="ui divided list">{this.renderList()}</div>

        </div>
    );
    }

}

function mapStateToProps (state){
    console.log(state);
    return {
        countries: state.countries
    };
}

export default connect(mapStateToProps, { selectCountry: selectCountry })(DisplayNotes);
