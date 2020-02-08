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

  return (
    <Router>

    <div className="App">
      <Container>
        <Row>
          <Col>
            <InsertExcel />
          </Col>
        </Row>
        {croods==""
        ?<Alert variant="danger"> 
          Nothings in coords  
          <Button className="float-right" onClick={()=>getLocation()} > Get Location</Button>
        </Alert>
        :<Alert variant="primary">{croods.coords.latitude} , {croods.coords.longitude} </Alert>
        }
        <Switch>

          <Route exact path="/">
            <ListData />
          </Route>

          <Route exact path="/gettime">
            <GetTime temp={temp} />
          </Route>

          {/* <Route exact path="/googlemapapi">
            <GoogleMapComponent/>
          </Route> */}

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
