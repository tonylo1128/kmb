import React, { useEffect, useState } from "react";
import * as action from "../../action/action";
import * as cssAction from "../../action/css/cssAction";
import { connect, useSelector, useDispatch } from "react-redux";
import "./DetailContent.scss";
import KmbLogo from "../KmbLogo/KmbLogo";
import UpdateLoading from "../Loading/UpdateLoading"

import kmbLogo from "../../img/kmbLogo.png";

function DetailContent({}) {
  const dispatch = useDispatch();

  const cardCss = useSelector((state) => state.cssReducer.cardCss);
  const featherContent = useSelector((state) => state.reducer.featherContent);
  const editting = useSelector((state)=>state.cssReducer.editting);
  const updateLoading = useSelector((state)=>state.cssReducer.updateLoading)

  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [inputC, setInputC] = useState("");
  const [inputD, setInputD] = useState("");
  const [inputE, setInputE] = useState("");


  useEffect(()=>{
    setInputA(featherContent.開始時間)
    console.log("DONEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    console.log(featherContent)
    setInputB(featherContent.結束時間)
    setInputD(featherContent.Instagram記錄連結)
    setInputE(featherContent.備註)
  },[])
  
  return (
    <div className={cardCss ? "containerDetailContent active" : "containerDetailContent"}>

      

      <div className="closeCon">
          <div  className="closeButton" onClick={() => dispatch(cssAction.closeButton())} > &#10006; </div>    
      </div>
      
      <div className="positionAndStyle">

      {
        updateLoading?
        <UpdateLoading/>
        :
        ""
      }

        <div className="firstLayer">

          <div className="noticeLogo">
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
          </div>

          <div className="right">
            <img src={kmbLogo} className="kmbLogo" />
          </div>
        </div>





        <div className="secondLayer">
          
          <div className="mainContainer">
            
            <div className="font"> {featherContent.路線} </div>

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

          <div className="raw">
            <div className="left">
              <div>日期</div>
              <div>Date</div>
            </div>
            <div className="right">

              {editting?
                  
                <div>
                  <input  type="datetime-local" placeholder="ddmmyy,hhmm,hhmm" value={inputA} onChange={(e)=>{setInputA(e.target.value)}}/>
                  <input  type="datetime-local" placeholder="ddmmyy,hhmm,hhmm" value={inputB} onChange={(e)=>{setInputB(e.target.value)}}/>
                </div>  
                // <input  placeholder="dd/mm/yy,hh:mm:ss,hh:mm:ss" value={inputList[0]} onChange={(e)=>{  handleInputList(e.target.value, 1)  }}/>
                

                :
                  featherContent.開始時間 != undefined ? (
                    <div className="dateTime">
                      <div className="">
                        {featherContent.開始時間.substring(0, 10)}
                      </div>

                      <div className="">
                        {featherContent.開始時間.substring(11, 21)} -{" "}
                        {featherContent.結束時間.substring(11, 21)}
                      </div>
                    </div>
                  ) : (
                    "N/A"
                  )

              }

            </div>
          </div>

          <div className="raw">
            <div className="left">
              <div>總行程時間</div>
              <div>Total Time</div>
            </div>
            <div className="right">

            {editting?
              // <input value={inputA!="" && inputB!=""? setInputC(totalTime(inputA,inputB)) : inputC } onChange={(e)=>{setInputC(e.target.value)}}/>
              <div> {inputA!="" && inputB!="" && inputA!=featherContent.開始時間 && inputB!=featherContent.結束時間? cssAction.totalTime(inputA,inputB) : "N/A" }  </div>
              :
              featherContent.總行程時間
            }

            </div>
          </div>

          <div className="raw">
            <div className="left">
              <div>Instagram Link</div>
            </div>
            <div className="right">


            {editting?
              
              <input value={inputD} onChange={(e)=>{setInputD(e.target.value)}}/>
              :

              featherContent.Instagram記錄連結 != null ? (
                <a target="_blank" href={featherContent.Instagram記錄連結}>
                  {" "}
                  {featherContent.Instagram記錄連結}{" "}
                </a>
              ) : (
                "N/A"
              )

            }


            </div>
          </div>

          <div className="raw">
            <div className="left">
              <div>備註</div>
              <div>Remake</div>
            </div>
            <div className="right">


            {editting?
              
              <input value={inputE} onChange={(e)=>{setInputE(e.target.value)}}/>
              :
              featherContent.備註 != null ? featherContent.備註 : "N/A"

            }


            </div>
          </div>
        </div>


      </div>
    
    {/* the above } is for the "updateLoading" if else */}



      <div className="buttonSet">
            <div className={cardCss ? "editButton active" : "editButton"}
                  onClick={()=> { dispatch(cssAction.editting(inputA, inputB, inputC, inputD, inputE, setInputA, setInputB, setInputC, setInputD, setInputE, featherContent)) } }> 
                  {editting? "Finish" : "Update"} 
            </div>
            <div className=""> </div>
            <div className=""> </div>
            <div className=""> </div>
      </div>
    

    </div>
  );
}

export default DetailContent;
