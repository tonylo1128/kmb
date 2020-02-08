import React from "react";
import { Container, Row, Col, Form, Button,Card } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../action/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RouteDetails from "./RouteDetails"

function GetTime({handleBusRouteInput,handleBusRouteInputValue,getBusBound,temp,
  callApiForRouteData,tempForRoute,tempForTime,callApiGetTime,selectedItem, clearBusRouteDetails
}) {
  
  let tempList = [];

  return (
    <Container>
      <Row>
        <Col xs={4}>

          <Form>
            <Form.Group>
              <Form.Label>Check Bus arrive time</Form.Label>
              <Form.Control
                onChange={e => handleBusRouteInput(e.target.value)}
                placeholder="Enter your Bus route here"
              />
            </Form.Group>
            <Button className="m-2" onClick={() => getBusBound(handleBusRouteInputValue)} variant="primary">
              Submit
            </Button>

            <Button className="m-2" onClick={()=> clearBusRouteDetails() }>
              Clear
            </Button>
          </Form>

        </Col>



        <Col xs={6}>
          <Router>
            <Row>
              {temp != null ? (
                temp.map((item, index) => {
                  return (
                    <Col>
                      <Card style={{ width: "15rem" }} key={index}>
                        <Card.Title> ROUTE: {item.ROUTE} </Card.Title>
                        <Card.Text>Service Type: {item.SERVICE_TYPE}</Card.Text>
                        <Button
                          onClick={() =>
                            callApiForRouteData(
                              item.ROUTE,
                              item.SERVICE_TYPE,
                              item.BOUND
                            )
                          }
                        >
                          Bound: {item.BOUND}
                        </Button>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <h1>Nothing here</h1>
              )}
            </Row>
            <br />



            <Row>
              {console.log("This is the VERY BEGINNER of RouteDetails")}
              {tempForRoute ? 
              
              <RouteDetails/>:
              ""}
                
            </Row>
          </Router>
        </Col>
      </Row>
    </Container>
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
