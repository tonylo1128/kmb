import React from "react";
import { ListGroup, Row, Col, Card} from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../action/action";

import {convertCoord} from "./convertCoord"

function ListData({ excel,realObj }) {
  
  return (
    

    <Row>
      {console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")}
      {console.log(realObj)}
      {console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")}


      {realObj != null ? (
        realObj.map((item, index) => (
          <Col>
            <div className="m-3">
              {/* <ListGroup style={{ width: "18rem" }} as="ul">
              <ListGroup.Item as="li"> <h3> Route: {item.路線} </h3></ListGroup.Item>
              <ListGroup.Item as="li"> {item.起點}  {item.方向} {item.目的地}  </ListGroup.Item>
              <ListGroup.Item as="li"> Company: {item.路線所屬公司}{" "}</ListGroup.Item>
              <ListGroup.Item as="li"> Start Time: {item.開始時間}</ListGroup.Item>
              <ListGroup.Item as="li"> End Time: {item.結束時間} </ListGroup.Item>
              <ListGroup.Item as="li"> Total Time: {item.總行程時間} </ListGroup.Item>
              <ListGroup.Item as="li"><a href={item.Instagram記錄連結}>  Instagram Link</a> </ListGroup.Item>
                

                {item.完成挑戰 == "未完成" ? (
                  <ListGroup.Item as="li" variant="danger">   Status: {item.完成挑戰} </ListGroup.Item>
                ) : (
                  <ListGroup.Item as="li" active> Status: {item.完成挑戰} </ListGroup.Item>
                )}

              </ListGroup> */}



              <Card style={{ width: '18rem' }}>
              <Card.Header as="h4">Route: {item.路線}, ({item.路線所屬公司}) </Card.Header>

              <ListGroup className="list-group-flush">
                <ListGroup.Item as="li"> {item.起點}  {item.方向} {item.目的地}  </ListGroup.Item>
                <ListGroup.Item as="li"> Start Time: {item.開始時間}</ListGroup.Item>
                <ListGroup.Item as="li"> End Time: {item.結束時間} </ListGroup.Item>
                <ListGroup.Item as="li"> Total Time: {item.總行程時間} </ListGroup.Item>
                <ListGroup.Item as="li"><a href={item.Instagram記錄連結}>  Instagram Link</a> </ListGroup.Item>
                  

                  {item.完成挑戰 == "未完成" ? (
                    <ListGroup.Item as="li" variant="danger">   Status: {item.完成挑戰} </ListGroup.Item>
                  ) : (
                    <ListGroup.Item as="li" active> Status: {item.完成挑戰} </ListGroup.Item>
                  )}

                </ListGroup>
              </Card>


            </div>
          </Col>
        ))
      ) : (
        <h1>Nothing is here ~ </h1>
      )}
    </Row>
  );
}

const mapStateToProps = state => ({
  excel: state.reducer.excel,
  realObj: state.reducer.realObj
});

const mapsStateToAction = dispatch => ({
  handleFileInput: input => dispatch(action.handleFileInput(input)),
  storeValueToState: () => dispatch(action.storeValueToState()),
  callApiForPostData: input => dispatch(action.callApiForPostData(input))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(ListData);
