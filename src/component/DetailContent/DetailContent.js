import React, { useEffect, useState } from "react";
import * as action from "../../action/action";
import * as cssAction from "../../action/css/cssAction"
import { connect, useSelector, useDispatch } from "react-redux";
import "./DetailContent.scss"
import KmbLogo from "../KmbLogo/KmbLogo";

import kmbLogo from "../../img/kmbLogo.png"


function DetailContent ({}){

    const dispatch = useDispatch()

    const cardCss = useSelector(state=>state.cssReducer.cardCss)
    const featherContent = useSelector(state=>state.reducer.featherContent)


    return(
        
        <div className={cardCss ?"positionAndStyle active" : "positionAndStyle"}>
            <div className="closeButton" onClick={ ()=>dispatch(cssAction.closeButton())}>x</div>


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
                        <div className="number">
                            6980 1234
                        </div>
                    </div>
                    <div className="leftBottom">
                        <div className="redLine"></div>
                        <a target="_blank" href="https://www.instagram.com/travel_hk_by_bus/">travel_hk_by_bus</a>
                    </div>
                </div>

                <div className="right">
                    <img src={kmbLogo} className="kmbLogo"/>
                </div>

            </div>

                
            
            <div className="secondLayer">

                <div className="mainContainer">
                    <div className="font"> {featherContent.路線} </div>

                    <div className="font2">
                        <b style={{color:featherContent.完成挑戰== "未完成"?"red":"green"}}>{featherContent.完成挑戰}</b>
                    </div>

                    <div className="font3"> 
                        {featherContent.完成挑戰 == "未完成" ? 
                        <b style={{color:"red"}}>Not Yet Finish</b>
                        :
                        <b style={{color:"green"}}>Finished</b>
                        }
                        
                    </div>
                 </div>

            </div>
            <div className="thirdLayer">

                <div className="raw">
                    <div className="left">
                        <div>路線</div>
                        <div>Route</div>
                    </div>
                    <div className="right">2</div>
                </div>



                <div className="raw">
                    <div className="left">
                        <div>日期</div>
                        <div>Date</div>
                    </div>
                    <div className="right">4</div>
                </div>



                <div className="raw">
                    <div className="left">
                        <div>總行程時間</div>
                        <div>Total Time</div>
                    </div>
                    <div className="right">6</div>
                </div>



                <div className="raw">
                    <div className="left">
                        <div>Instagram Link</div>
                    </div>
                    <div className="right">8</div>
                </div>




                <div className="raw">
                    <div className="left">
                        <div>備註</div>
                        <div>Remake</div>
                    </div>
                    <div className="right">4</div>
                </div>
            </div>


            
            
        </div>



    )
}



export default (DetailContent);


