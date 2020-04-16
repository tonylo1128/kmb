import React from "react";
import { ListGroup, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../action/action";
import HeadOfListData from "./HeadOfListData";
import ShowResult from "./ShowResult";

import { convertCoord } from "./convertCoord";

function ListData({ excel, realObj, searchResult, searchInput}) {
  return (
    <Row>
      {searchResult.length>0 ? (
        <ShowResult passData={searchResult} />
      ) : 
      

      realObj != null ? (
        
        realObj.map((item, index) => (
          <Col>
            <div className="centerStyle topDownMargin">
              {/* <div className=""> </div> */}

              <div className="cardContainer font">
                <HeadOfListData
                  route={item.路線}
                  busCom={item.路線所屬公司}
                  dst={item.目的地}
                />

                <div>
                  {item.完成挑戰 === "未完成" ? (
                    <h6 className="MarginTextCard" style={{ color: "red" }}>
                      {item.完成挑戰}
                    </h6>
                  ) : (
                    <h6 className="MarginTextCard" style={{ color: "green" }}>
                      {item.完成挑戰}
                    </h6>
                  )}

                  <hr />
                  <h6 className="MarginTextCard">
                    {" "}
                    {item.起點} {item.方向} {item.目的地}{" "}
                  </h6>

                  {item.開始時間 != null ? (
                    <h6 className="MarginTextCard">
                      {" "}
                      {item.開始時間.substring(11, 21)} to{" "}
                      {item.結束時間.substring(11, 21)}
                    </h6>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Col>
        ))
      )









       : 
        ""
      
      }
    </Row>
  );
}

const mapStateToProps = state => ({
  excel: state.reducer.excel,
  realObj: state.reducer.realObj,
  searchResult: state.reducer.searchResult,
  searchInput: state.reducer.searchInput
});

const mapsStateToAction = dispatch => ({
  handleFileInput: input => dispatch(action.handleFileInput(input)),
  storeValueToState: () => dispatch(action.storeValueToState()),
  callApiForPostData: input => dispatch(action.callApiForPostData(input))
});

export default connect(mapStateToProps, mapsStateToAction)(ListData);
