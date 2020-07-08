import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { ListGroup, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import * as action from "../../action/action";
import * as cssAction from "../../action/css/cssAction"
import HeadOfListData from "../HeadOfListData";
import "./listData.scss"

import { convertCoord } from "../convertCoord";

function ListData({ excel, realObj, searchResult, searchInput, featherContent}) {


  const cardCss = useSelector(state=>state.cssReducer.cardCss)
  const dispatch = useDispatch();
  const lightMode = useSelector(state=>state.cssReducer.lightMode)


  return (
    <div className="centerStyle">
      { 
        realObj != null ? (
          
          ((searchResult.length>0  || searchInput !="" )  ? searchResult  : realObj ).map((item, index) => (
          
            <div className="cardMainContainer"  onClick={()=>featherContent(item)}   key={index}>
            
              {/* <div className=""> </div> */}

              <div className="cardContainer font">
                <HeadOfListData
                  route={item.路線}
                  busCom={item.路線所屬公司}
                  dst={item.目的地}
                  state={item.完成挑戰}
                />

                <hr className={ lightMode?"light-mode" : "dark-mode" }/>

                <div className="cardContainerBottom">
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
          
        ))
      )


       : 
        <h1>Sth is wrong ! </h1>
      
      }
    </div>
  );
}

const mapStateToProps = state => ({
  excel: state.reducer.excel,
});

const mapsStateToAction = dispatch => ({
  handleFileInput: input => dispatch(action.handleFileInput(input)),
  storeValueToState: () => dispatch(action.storeValueToState()),
  callApiForPostData: input => dispatch(action.callApiForPostData(input)),
  featherContent: (content)=> dispatch(action.featherContent(content))
});

export default connect(mapStateToProps, mapsStateToAction)(ListData);
