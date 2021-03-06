import React, { useEffect } from "react";
import { Button,Navbar, Nav,Form } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import * as action from "../action/action";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";

function NavBar({
  excel,
  handleFileInput,
  storeValueToState,
  callApiForPostData,
  getLocation,
  croods,
  callApiGetData,
  callApiTestingFuction,
  handleSearchInput,
  realObj,
  serverSideSearchFun
}) {

  // useEffect(() => {
  //   callApiGetData(1, 30);
  // }, []);

  const dispatch = useDispatch();

  return (
   
    <Navbar className="nav_bar fixed-top"  expand="lg">
        <Navbar.Brand className="text-light" >
          <Link to="/" style={{color: '#ffffff'}}>KMBPJ</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link style={{ display: 'flex', alignItems: 'center' }}><Link to="/gettime" style={{ color: '#ffffff',  }}>Get Time</Link></Nav.Link>
            <Nav.Link style={{ display: 'flex', alignItems: 'center' }}><Link to="/googlemapapi" style={{ color: '#ffffff',  }}>GoogleMapAPI</Link></Nav.Link>
            <Nav.Link style={{ display: 'flex', alignItems: 'center' }}><Link to="/Instagram" style={{ color: '#ffffff',  }}>Instagram</Link></Nav.Link>
            <Nav.Link style={{ display: 'flex', alignItems: 'center' }}><Link to="/datasetting" style={{ color: '#ffffff',  }}>Data Init</Link></Nav.Link>
          </Nav>
          
          <Form inline>
            {/* <label for="files" className=""> Upload Your Excel Here !</label> */}
            
            

            <Button
              className="m-2"
              onClick={() => dispatch(action.callApiDeleAllRecord())}
              variant="danger"
            >
              Delete
            </Button>

            <input 
            // onChange={(event)=>handleSearchInput(event.target.value, realObj)}
            onChange={(event)=>serverSideSearchFun(event.target.value)}
            type="text" name="search" placeholder="Search.."></input>
          </Form>
        </Navbar.Collapse>
      </Navbar>
   
  );
}

const mapStateToProps = state => ({
  excel: state.reducer.excel,
  croods: state.reducer.croods,
  realObj: state.reducer.realObj
});

const mapsStateToAction = dispatch => ({
  handleFileInput: input => dispatch(action.handleFileInput(input)),
  storeValueToState: () => dispatch(action.storeValueToState()),
  callApiForPostData: input => dispatch(action.callApiForPostData(input)),
  getLocation: ()=>dispatch(action.getLocation()),
  callApiGetData: () => dispatch(action.callApiGetData()),
  callApiTestingFuction:()=> dispatch(action.callApiTestingFuction()),
  handleSearchInput: (input, busDataObj)=> dispatch(action.handleSearchInput(input,busDataObj)),
  serverSideSearchFun: (input) =>dispatch(action.serverSideSearchFun(input))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(NavBar);




