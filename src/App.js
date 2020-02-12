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

function App({
  excel,
  handleFileInput,
  storeValueToState,
  callApiForPostData,
  callApiGetData,
  croods,
  temp,
  getLocation
}) {
  useEffect(() => {
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
      <Container style={{marginTop: '20px'}} >
      
        {/* {croods==""
        ?<div class=" alert alert-danger " > 
          <div class="mid-center">Nothings in coords  </div>
          <div >
            <Button style= {buttonStyle} className="mid-right" onClick={()=>getLocation()} > Get Location</Button>
          </div>
        </div>

        :<Alert variant="primary">{croods.coords.latitude} , {croods.coords.longitude} </Alert>
        } */}



        <Switch>

          <Route exact path="/">
            <ListData />
          </Route>

          <Route exact path="/gettime">
            <GetTime temp={temp} />
          </Route>

          <Route exact path="/googlemapapi">
            
            <GoogleMapComponent/>
          </Route>

        </Switch>
        {/* <GetTime/> */}
        
      </Container>
      
    </div>
  </Router>
  );
}

const mapStateToProps = state => ({
  croods: state.reducer.croods,
  excel: state.reducer.excel,
  temp: state.reducer.temp
});

const mapsStateToAction = dispatch => ({
  callApiGetData: () => dispatch(action.callApiGetData()),
  getLocation: ()=>dispatch(action.getLocation()),
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);
