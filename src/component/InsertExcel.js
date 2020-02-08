import React, { useEffect } from "react";
import { Form, Button,Navbar, Nav, Alert  } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../action/action";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";

function InsertExcel({
  excel,
  handleFileInput,
  storeValueToState,
  callApiForPostData,
  getLocation,
  croods,
  callApiGetData,
  callApiTestingFuction
}) {

  useEffect(() => {
    callApiGetData();
  }, []);

  return (
   
    <div >
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="text-light" >
          <Link to="/">
            KMBPJ
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            

            <Link to="/gettime"><Button className="m-2" variant="primary"> Get Time </Button> </Link>

            {/* <Link to="googlemapapi"> <Button> GoogleMapAPI </Button> </Link> */}

            
            
          </Nav>
          
          
            <input

                className="text-light m-2"
                type="file"
                accept=".xlsx, .xls"
                onChange={event => handleFileInput(event.target.files[0])}
            />

            <Button
              className="m-2"
              onClick={() => storeValueToState()}
              variant="primary"
              type="submit"
            >
              Set State
            </Button>

            <Button
              className="m-2"
              onClick={() => callApiForPostData(excel)}
              variant="primary"
              type="submit"
            >
              Send
            </Button>

            {console.log(excel)}
          

        </Navbar.Collapse>
      </Navbar>
    </div>
   
  );
}

const mapStateToProps = state => ({
  excel: state.reducer.excel,
  croods: state.reducer.croods
});

const mapsStateToAction = dispatch => ({
  handleFileInput: input => dispatch(action.handleFileInput(input)),
  storeValueToState: () => dispatch(action.storeValueToState()),
  callApiForPostData: input => dispatch(action.callApiForPostData(input)),
  getLocation: ()=>dispatch(action.getLocation()),
  callApiGetData: () => dispatch(action.callApiGetData()),
  callApiTestingFuction:()=> dispatch(action.callApiTestingFuction())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(InsertExcel);




