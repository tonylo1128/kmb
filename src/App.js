import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "./action/action";
import * as XLSX from "xlsx";
import InsertExcel from "./component/InsertExcel";
import ListData from "./component/ListData";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GetTime from "./component/GetTime";
import GoogleMapComponent from "./component/GoogleMapComponent"
import {handleScroll} from "./component/helper"


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
  // handleScroll
}) {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll.bind(this));
    callApiGetData();
  }, []);




  let buttonStyle = {
    position: "absolute", 
    right: "5px", 
    top: "5px"
  }

  return (
    <Router>

    <div className="App">
      <InsertExcel />

      <div 
        className="main-container"
        // onScroll={ event =>handleScroll(event.target)} 
      >
        
      
        <Switch>
          
          <Route exact path="/">
            <div className="cardstyle">
            <ListData />
            </div>
          </Route>

          <Route exact path="/gettime">
            <GetTime temp={temp} />
          </Route>

          <Route exact path="/googlemapapi">
            <GoogleMapComponent/>
          </Route>

       
        </Switch>
        {/* <GetTime/> */}
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
  callApiGetData: () => dispatch(action.callApiGetData()),
  getLocation: ()=>dispatch(action.getLocation()),
  // handleScroll: event => dispatch(action.handleScroll(event))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);
