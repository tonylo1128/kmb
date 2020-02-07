import React, {useEffect} from "react";
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
    <div>
      
      {tempForRoute == null ? 
        <h1>Nothing in Routes yet</h1>
       : 
        tempForRoute.map((item, index) => {

          console.log("ABCABCABCABCABCABCABCABCABCABCABCABC")
          console.log(tempForTime)
          console.log("ABCABCABCABCABCABCABCABCABCABCABCABC")


          
          return (
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>{item.Seq}</td>
                  <td>{item.CName}</td>

                  <td>
                  {tempForTime ? (
                    <h6>
                      {tempForTime.map((item, indexForTime) => {
                        // if (typeof item !== "object") {
                          
                          if(index === countForOutput){
                            console.log("Current Big index: "+index+ "the value start at: "+countForOutput)
                            countForOutput++;
                            console.log("Find a match")
                            console.log(item)
                            return (tempForTime[index]);
                          }
                          
                        // }
                          return null;
                      })}
                    </h6>
                  ) : (
                    <h6>Testing</h6>
                  )}
                  
                  
                  </td>

                </tr>
              </tbody>
            </Table>)

        })
      }
    </div>
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



 