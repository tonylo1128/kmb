import React from "react";
import { ListGroup, Row, Col, Card} from "react-bootstrap";
import HeadOfListData from "./HeadOfListData"

import {convertCoord} from "./convertCoord"

function ShowResult({ passData}) {


  return (
    
    <Row>


     {
         passData.map((item, index)=>{
            return <Col>
            <div className="centerStyle topDownMargin">
      
              <div className="cardContainer font"> 
              
              <HeadOfListData
              route={item[2]}
              busCom={item[1]}
              dst={item[3]}/>


                  <div >
                  
                  
                  {
                    item[6] ==="未完成" ?
                    <h6 className="MarginTextCard" style={{color: "red"}} >{item[6]}</h6>
                    :
                    <h6 className="MarginTextCard" style={{color: "green"}} >{item[6]}</h6>
                  }




                  <hr/>
                  <h6 className="MarginTextCard"> {item[3]}  {item[4]} {item[5]} </h6>

                  

                  {item[7] !=null?
                  <h6 className="MarginTextCard"> {(item[7]).substring(11, 21)} to {(item[8]).substring(11, 21)}</h6>
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





