import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "./action/action";
import * as XLSX from "xlsx";
import InsertExcel from "./component/InsertExcel";
import ListData from "./component/ListData";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import GetTime from "./component/GetTime";


function App({
  excel,
  handleFileInput,
  storeValueToState,
  callApiForPostData,
  callApiGetData,
  croods,
  temp
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
        ?<Alert variant="danger"> Nothings in coords </Alert>
        :<Alert variant="primary">{croods.coords.latitude} , {croods.coords.longitude} </Alert>
        }
        <Switch>

          <Route exact path="/">
            <ListData />
          </Route>

          <Route exact path="/gettime">
            <GetTime temp={temp} />
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
  callApiGetData: () => dispatch(action.callApiGetData())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);
