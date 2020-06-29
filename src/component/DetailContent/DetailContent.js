import React, { useEffect, useState } from "react";
import * as action from "../../action/action";
import * as cssAction from "../../action/css/cssAction";
import { connect, useSelector, useDispatch } from "react-redux";
import "./DetailContent.scss";
import KmbLogo from "../KmbLogo/KmbLogo";

import kmbLogo from "../../img/kmbLogo.png";

function DetailContent({}) {
  const dispatch = useDispatch();

  const cardCss = useSelector((state) => state.cssReducer.cardCss);
  const featherContent = useSelector((state) => state.reducer.featherContent);

  return (
    <div className={cardCss ? "containerDetailContent active" : "containerDetailContent"}>
        <div className="closeCon">
            <div  className="closeButton" onClick={() => dispatch(cssAction.closeButton())} > &#10006; </div>    
        </div>

      <div className="positionAndStyle">



        <div className="firstLayer">
          <div class="noticeLogo">
            <div>乘客通告</div>
            <div>Passanger Notice</div>
          </div>

          <div className="left">
            <div className="leftUp">
              <div className="customeHotLine">
                <div>顧客服務熱線</div>
                <div>Customer Service HotLine</div>
              </div>
              <div className="number">6980 1234</div>
            </div>
            <div className="leftBottom">
              <div className="redLine"></div>
              <a
                target="_blank"
                href="https://www.instagram.com/travel_hk_by_bus/"
              >
                travel_hk_by_bus
              </a>
            </div>
<<<<<<< Updated upstream
            <div className="thirdLayer">

                <div className="raw">
                    <div className="left">
                        <div>路線</div>
                        <div>Route</div>
                    </div>
                    <div className="right">
                        {featherContent.起點} {featherContent.方向} {featherContent.目的地} 
                    </div>
                </div>
=======
          </div>
>>>>>>> Stashed changes

          <div className="right">
            <img src={kmbLogo} className="kmbLogo" />
          </div>
        </div>


<<<<<<< Updated upstream
                <div className="raw">
                    <div className="left">
                        <div>結束時間</div>
                        <div>Date</div>
                    </div>
                    <div className="right">
                        {featherContent.結束時間!=null ?featherContent.結束時間 :"N/A"}
                    </div>
                </div>



                <div className="raw">
                    <div className="left">
                        <div>總行程時間</div>
                        <div>Total Time</div>
                    </div>
                    <div className="right">
                        {featherContent.總行程時間!="0 小時 00 分" ?featherContent.總行程時間 :"N/A"}
                    </div>
                </div>
=======



        <div className="secondLayer">
          <div className="mainContainer">
            <div className="font"> {featherContent.路線} </div>
>>>>>>> Stashed changes

            <div className="font2">
              <b
                style={{
                  color: featherContent.完成挑戰 == "未完成" ? "red" : "green",
                }}
              >
                {featherContent.完成挑戰}
              </b>
            </div>

            <div className="font3">
              {featherContent.完成挑戰 == "未完成" ? (
                <b style={{ color: "red" }}>Not Yet Finish</b>
              ) : (
                <b style={{ color: "green" }}>Finished</b>
              )}
            </div>
          </div>
        </div>

<<<<<<< Updated upstream
                <div className="raw">
                    <div className="left">
                        <div>Instagram Link</div>
                    </div>
                    <div className="right">
                        <a style={{fontSize:"15px"}} target="_blank" href="https://www.instagram.com/p/B2_lrkQlNE3/">
                            {featherContent.Instagram記錄連結!=null ?featherContent.Instagram記錄連結 :"N/A"}
                        </a>
                    </div>
                </div>
=======
>>>>>>> Stashed changes



        <div className="thirdLayer">
          <div className="raw">
            <div className="left">
              <div>路線</div>
              <div>Route</div>
            </div>
            <div className="right">
              {featherContent.起點} {featherContent.方向}{" "}
              {featherContent.目的地}
            </div>
          </div>

<<<<<<< Updated upstream
                <div className="raw">
                    <div className="left">
                        <div>備註</div>
                        <div>Remake</div>
                    </div>
                    <div className="right">
                        {featherContent.備註!=null ?featherContent.備註 :"N/A"}
                    </div>
=======
          <div className="raw">
            <div className="left">
              <div>日期</div>
              <div>Date</div>
            </div>
            <div className="right">
              {featherContent.開始時間 != undefined ? (
                <div className="dateTime">
                  <div className="">
                    {featherContent.開始時間.substring(0, 10)}
                  </div>

                  <div className="">
                    {featherContent.開始時間.substring(11, 21)} -{" "}
                    {featherContent.結束時間.substring(11, 21)}
                  </div>
>>>>>>> Stashed changes
                </div>
              ) : (
                "N/A"
              )}
            </div>
          </div>

          <div className="raw">
            <div className="left">
              <div>總行程時間</div>
              <div>Total Time</div>
            </div>
            <div className="right">{featherContent.總行程時間}</div>
          </div>

          <div className="raw">
            <div className="left">
              <div>Instagram Link</div>
            </div>
            <div className="right">
              {featherContent.Instagram記錄連結 != null ? (
                <a target="_blank" href={featherContent.Instagram記錄連結}>
                  {" "}
                  {featherContent.Instagram記錄連結}{" "}
                </a>
              ) : (
                "N/A"
              )}
            </div>
          </div>

          <div className="raw">
            <div className="left">
              <div>備註</div>
              <div>Remake</div>
            </div>
            <div className="right">
              {featherContent.備註 != null ? featherContent.備註 : "N/A"}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default DetailContent;
