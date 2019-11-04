import React from "react";
import { Form, Button,Navbar, Nav,  } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../action/action";
import * as XLSX from "xlsx";

function InsertExcel({
  excel,
  handleFileInput,
  storeValueToState,
  callApiForPostData,
  getLocation
}) {
  return (
    <div >
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="text-light" href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Button onClick={()=>getLocation()} > Get Location</Button>
            <Nav.Link className="text-light" href="#link">Link</Nav.Link>
          </Nav>

          <Form.Group>
            <input
                className="text-light"
                type="file"
                accept=".xlsx, .xls"
                onChange={event => handleFileInput(event.target.files[0])}
            />

            <Button
              onClick={() => storeValueToState()}
              variant="primary"
              type="submit"
            >
              Set State
            </Button>

            <Button
              onClick={() => callApiForPostData(excel)}
              variant="primary"
              type="submit"
            >
              Nodejs
            </Button>

            {console.log(excel)}
          </Form.Group>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => ({
  excel: state.reducer.excel
});

const mapsStateToAction = dispatch => ({
  handleFileInput: input => dispatch(action.handleFileInput(input)),
  storeValueToState: () => dispatch(action.storeValueToState()),
  callApiForPostData: input => dispatch(action.callApiForPostData(input)),
  getLocation: ()=>dispatch(action.getLocation())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(InsertExcel);
