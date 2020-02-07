import React from "react";
import { connect } from "react-redux";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };

function GoogleMapComponent() {

    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
}


const mapStateToProps = state =>{

}

const mapsStateToAction = dispatch =>({

})

export default connect(
    mapStateToProps, 
    mapsStateToAction
)
(
    GoogleApiWrapper({
        apiKey: 'AIzaSyCzfSE_Dl1zpU57ADA4vsoIG--n7FFf3IM'
    })

(GoogleMapComponent))