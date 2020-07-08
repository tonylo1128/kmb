import React from "react";
import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../../action/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RouteDetails from "../RouteDetails"
import "./getTime.scss"

function GetTime({handleBusRouteInput,handleBusRouteInputValue,getBusBound,temp,
  callApiForRouteData,tempForRoute,tempForTime,callApiGetTime,selectedItem, clearBusRouteDetails
}) {
  
  let tempList = [];

  return (
    <div className="get-time-container">
      <Row>
        <Col xs={4}>
          <Card>
            <Card.Header>Check Bus arrive time</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  {/* <Form.Label>Check Bus arrive time</Form.Label> */}
                  <Form.Control
                    onChange={e => handleBusRouteInput(e.target.value)}
                    placeholder="Enter your Bus route here"
                  />
                </Form.Group>
                <Button block onClick={() => getBusBound(handleBusRouteInputValue)} variant="primary">
                  Check
                </Button>
                <Button block onClick={()=> clearBusRouteDetails() } variant="secondary">
                  Clear
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>



        <Col xs={8}>
          <Router>
            <Row>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Route name</th>
                    <th>Service Type</th>
                    <th>Bound</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (temp && temp.length !== 0) ? (
                      temp.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.ROUTE}</td>
                          <td>{item.SERVICE_TYPE}</td>
                          <td>{item.BOUND}</td>
                          <td>
                            <Button
                              onClick={() => callApiForRouteData(item.ROUTE, item.SERVICE_TYPE, item.BOUND)}
                              variant="link"
                            >
                              Get details
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr >
                        <td colspan={5}>No related record</td>
                      </tr>
                    )
                  }
                </tbody>
              </Table>


            </Row>
            <Row>
              {console.log("This is the VERY BEGINNER of RouteDetails")}
              {tempForRoute ? 
              
              <RouteDetails/>:
              ""}
                
            </Row>
          </Router>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  handleBusRouteInputValue: state.reducer.handleBusRouteInputValue,
  tempForRoute: state.reducer.tempForRoute,
  tempForTime: state.reducer.tempForTime,
  selectedItem: state.reducer.selectedItem
});

const mapsStateToAction = dispatch => ({
  handleBusRouteInput: input => dispatch(action.handleBusRouteInput(input)),
  getBusBound: input => dispatch(action.getBusBound(input)),
  callApiForRouteData: (route, serviceType, bound) =>
    dispatch(action.callApiForRouteData(route, serviceType, bound)),
  callApiGetTime: (inputA, inputB, inputC) =>
    dispatch(action.callApiGetTime(inputA, inputB, inputC)),
    clearBusRouteDetails : ()=> dispatch(action.clearBusRouteDetails())
});
export default connect(mapStateToProps, mapsStateToAction)(GetTime);
