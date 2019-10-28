import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Form} from "react-bootstrap"
import {connect} from 'react-redux'
import * as action from './action/action'
import * as XLSX from 'xlsx';

function App({excel, handleFileInput}) {
  return (
    <div className="App">
      <Form.Group>
        <Form.Label>Upload Your Image Here </Form.Label>
        <input
          type="file"
          accept='.xlsx, .xls'
          onChange={event => handleFileInput(event.target.files[0])}
        />
        
        {/* {img!=null ? console.log(img):"This is createPost and nth on img"}
            {img!=null ? console.log(img.name):"This is createPost and nth on img's name"} */}
      </Form.Group>
    </div>
  );
}

const mapStateToProps = state =>({
  excel: state.reducer.test
})

const mapsStateToAction = dispatch =>({
  handleFileInput: input => dispatch( action.handleFileInput(input) )
})

export default 
connect(mapStateToProps, mapsStateToAction)(App);
