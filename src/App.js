import React, { useEffect } from "react";
import "./App.scss";
import { connect } from "react-redux";
import * as action from "./action/action";
import NavBar from "./component/NavBar";
import ListData from "./component/ListData/ListData";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GetTime from "./component/GetTime";
import GoogleMapComponent from "./component/GoogleMap/GoogleMapComponent"
import MainContainer from "./component/MainContainer"


function App({
  excel,
  handleFileInput,
  storeValueToState,
  callApiForPostData,
  callApiGetData,
  croods,
  temp,
  getLocation,
  searchInput,
  searchResult,
}) {
  useEffect(() => {
    
    callApiGetData(1, 30);
  }, []);




  let buttonStyle = {
    position: "absolute", 
    right: "5px", 
    top: "5px"
  }

  return (
    <Router>

    <div className="App">
      <NavBar />

      <div className="firstContainer">
        <MainContainer/>
      </div>

    </div>
  </Router>
  );
}

const mapStateToProps = state => ({
  croods: state.reducer.croods,
  excel: state.reducer.excel,
  temp: state.reducer.temp,
  searchInput : state.reducer.searchInput,
  searchResult : state.reducer.searchResult,
});

const mapsStateToAction = dispatch => ({
  callApiGetData: (input, input2) => dispatch(action.callApiGetData(input, input2)),
  getLocation: ()=>dispatch(action.getLocation()),
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);


