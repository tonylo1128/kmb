import React, {useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Table,
  Spinner
} from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../action/action";

function RouteDetails({
  tempForRoute,
  tempForTime,
  callApiGetTime,
  selectedBoundWithDetails
}) {
let countForOutput = 0;

  useEffect(() => {
    console.log("THIS IS THE USEEFFECT啊，做咩又唔做野啊您")
    console.log(selectedBoundWithDetails)
    callApiGetTime(selectedBoundWithDetails);
  }, [])



  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Station order</th>
            <th>Station name</th>
            <th>Next bus arrival time</th>
          </tr>
        </thead>
        <tbody>
          {
            tempForRoute ? tempForRoute.map((item, index) => (
              <tr horizontal style={{marginBottom: '10px'}}>
                <td>{parseInt(item.Seq) + 1}</td>
                <td>{item.CName}</td>
                <td>
                  <h6>
                    {
                      tempForTime ? 
                        tempForTime.map((item, indexForTime) => {
                          // if (typeof item !== "object") {
                            if(index === countForOutput){
                              countForOutput++;
                              return (tempForTime[index]);
                            }
                          // }
                            return null;
                        }) : (
                          <Spinner animation="grow" variant="danger" sizing="sm" role="status">
                            <span className="sr-only">Loading...</span>
                          </Spinner>
                        )
                  }
                  </h6>
                </td>
              </tr>
              )) : (
                <tr>
                  <td colspan={3}>No related info</td>
                </tr>
              )
            }
        </tbody>
      </Table>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  handleBusRouteInputValue: state.reducer.handleBusRouteInputValue,
  tempForRoute: state.reducer.tempForRoute,
  tempForTime: state.reducer.tempForTime,
  selectedBoundWithDetails: state.reducer.selectedBoundWithDetails
});

const mapsStateToAction = dispatch => ({
  handleBusRouteInput: input => dispatch(action.handleBusRouteInput(input)),
  getBusBound: input => dispatch(action.getBusBound(input)),
  callApiForRouteData: (route, serviceType, bound) =>
    dispatch(action.callApiForRouteData(route, serviceType, bound)),
  callApiGetTime: (inputA) =>
    dispatch(action.callApiGetTime(inputA)),

    
});

export default connect(mapStateToProps, mapsStateToAction)(RouteDetails);



 