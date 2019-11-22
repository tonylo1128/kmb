import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Table
} from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../action/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function GetTime({
  handleBusRouteInput,
  handleBusRouteInputValue,
  getBusBound,
  temp,
  callApiForRouteData,
  tempForRoute,
  tempForTime,
  callApiGetTime,
  selectedItem
}) {
  let tempList = [];
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <Form>
            <Form.Group>
              <label className="l-3">Bus route Check</label>
              <Form.Control
                onChange={e => handleBusRouteInput(e.target.value)}
                placeholder="Enter your Bus route here"
              />
            </Form.Group>
            <Button
              onClick={() => getBusBound(handleBusRouteInputValue)}
              variant="primary"
            >
              Submit
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
              {console.log("ABCABCABCABCABCABCABCABCABCABCABCABC")}
              {console.log(tempForRoute)}
              {console.log("ABCABCABCABCABCABCABCABCABCABCABCABC")}
              {console.log(tempForRoute)}
              {tempForRoute == null ? (
                <h1>Nothing in Routes yet</h1>
              ) : (
                tempForRoute.map((item, index) => {
                  let tempObj = {};
                  tempObj[index] = "N/A";
                  tempList.push(tempObj);
                  return (
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>{item.Seq}</td>
                          <td>{item.CName}</td>
                          <td>
                            {console.log(
                              "屌您屌您屌您屌您屌您屌您屌您屌您屌您屌您屌您"
                            )}
                            {console.log(tempForTime)}
                            {console.log(
                              "屌您屌您屌您屌您屌您屌您屌您屌您屌您屌您屌您"
                            )}

                            {tempForTime ?
                              <h6>
                                {tempForTime.map((item, indexForTime) => {
                                  if (typeof item !== "object") {
                                    console.log(typeof item)
                                    // console.log(indexForTime, index, item )
                                    return item;
                                  }
                                })}
                              </h6>
                            :
                              <h6>Testing</h6>
                            }
                            
                          </td>
                          <td>
                            <Button
                              onClick={() =>
                                callApiGetTime(selectedItem, item.Seq, tempList)
                              }
                            >
                              Check
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  );
                })
              )}
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
    dispatch(action.callApiGetTime(inputA, inputB, inputC))
});

export default connect(mapStateToProps, mapsStateToAction)(GetTime);
