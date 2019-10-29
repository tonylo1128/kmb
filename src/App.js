import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "./action/action";
import * as XLSX from "xlsx";

function App({ excel, handleFileInput, storeValueToState, callApiForPostData }) {
  return (
    <div className="App">
      <Form.Group>
        <Form.Label>Upload Your Image Here </Form.Label>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={event => handleFileInput(event.target.files[0])}
        />
        <Button onClick={()=>storeValueToState()}variant="primary" type="submit">
          Set State
        </Button>

        <Button onClick={()=>callApiForPostData(excel)}variant="primary" type="submit">
          Nodejs 
        </Button>

        
        {console.log(excel)}
        {/* {img!=null ? console.log(img):"This is createPost and nth on img"}
            {img!=null ? console.log(img.name):"This is createPost and nth on img's name"} */}
      </Form.Group>
    </div>
  );
}

const mapStateToProps = state => ({
  excel: state.reducer.excel
});

const mapsStateToAction = dispatch => ({
  handleFileInput: input => dispatch(action.handleFileInput(input)),
  storeValueToState: () => dispatch(action.storeValueToState()),
  callApiForPostData: (input )=>dispatch(action.callApiForPostData(input))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);
