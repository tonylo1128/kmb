import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../action/action";

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
              <ListGroup style={{ width: "18rem" }} as="ul">
                <ListGroup.Item as="li"> Company: {item.巴士路線所屬公司}{" "}</ListGroup.Item>

                <ListGroup.Item as="li"> Route: {item.路線} </ListGroup.Item>

                <ListGroup.Item as="li"> Starting Point: {item.起點} </ListGroup.Item>

                <ListGroup.Item as="li"> Destination: {item.目的地} </ListGroup.Item>

                <ListGroup.Item as="li"> Start Time: {item.開始時間}</ListGroup.Item>

                <ListGroup.Item as="li"> End Time: {item.結束時間} </ListGroup.Item>

                <ListGroup.Item as="li"> Total Time: {item.總行程時間} </ListGroup.Item>

                <ListGroup.Item as="li"> Instagram Link: {item.Instagram記錄連結} </ListGroup.Item>

                

                {item.完成挑戰 == "未完成" ? (
                  <ListGroup.Item as="li" variant="danger">   Status: {item.完成挑戰} </ListGroup.Item>
                ) : (
                  <ListGroup.Item as="li" active> Status: {item.完成挑戰} </ListGroup.Item>
                )}
              </ListGroup>
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
