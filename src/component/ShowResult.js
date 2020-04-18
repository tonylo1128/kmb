import React from "react";
import { ListGroup, Row, Col, Card} from "react-bootstrap";
import HeadOfListData from "./HeadOfListData"

import {convertCoord} from "./convertCoord"

function ShowResult({ passData}) {


  return (
    <Row>
     {  
     console.log("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
     console.log(passData),
         passData.map((item, index)=>{
          console.log("TESTIGGGGGGGGGGG  ")
           console.log(item)
            return <Col>
            <div className="centerStyle topDownMargin">
      
              <div className="cardContainer font"> 
              
              <HeadOfListData
              route={item.路線}
              busCom={item.路線所屬公司}
              dst={item.目的地}/>


                  <div >
                  
                  
                  {
                    item.完成挑戰 ==="未完成" ?
                    <h6 className="MarginTextCard" style={{color: "red"}} >{item.完成挑戰}</h6>
                    :
                    <h6 className="MarginTextCard" style={{color: "green"}} >{item.完成挑戰}</h6>
                  }




                  <hr/>
                  <h6 className="MarginTextCard"> {item.起點}  {item.方向} {item.目的地} </h6>

                  

                  {item.開始時間 !=null?
                  <h6 className="MarginTextCard"> {(item.開始時間).substring(11, 21)} to {(item.結束時間).substring(11, 21)}</h6>
                  :
                  ""
                  }

                </div>


              </div>





            </div>
          </Col>
          })
        }
      
    </Row>
   );
}


export default (ShowResult);





