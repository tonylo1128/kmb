import React, {useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "./action/action";
import * as XLSX from "xlsx";
import InsertExcel from "./component/InsertExcel";
import ListData from "./component/ListData";

function App({
  excel,
  handleFileInput,
  storeValueToState,
  callApiForPostData,
  callApiGetData
}) {

  useEffect(()=>{
    callApiGetData();
  },[])



  return (
    <div className="App">
      <Container>

        <Row>
          <Col>
            <InsertExcel />
          </Col>
        </Row>

        
            <ListData />
         

      </Container>
    </div>
  );
}

const mapStateToProps = state => ({

});

const mapsStateToAction = dispatch => ({
  callApiGetData: () => dispatch(action.callApiGetData())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);
