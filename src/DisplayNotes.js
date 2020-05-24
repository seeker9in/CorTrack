import React from "react";

function DisplayNotes(props){

    return (
    <div>
        <h1>Welcome in DisplayNotes - Count - {(Object.keys(props.content.countrydata)).length} </h1>
        <h1>API called - {props.content.isLoaded.toString()} </h1>
        <h1>Error - {Object.toString(props.content.error)} </h1>
    </div>
    );

}

export default DisplayNotes;
