import React, {useState} from "react";
import { ListGroup, Row, Col, Card} from "react-bootstrap";




function HeadOfListData({route,busCom,dst, state }) {
//   const [receivedBusData, setReceivedBusData] = useState();

  return (
    <div>
        

        <div className="headerOfCard"> 

          
            <div className="round">
                <div className="kmbBusLogo"> </div>
                <div className="rectangle">  {route}   </div> 
            </div>
            
            
            <h5 className="h5style"> {busCom}  </h5>
            
          



            <div className="position-style">
              {state=== "未完成" ? (
                <h6 className="MarginTextCard" style={{ color: "red" }}>
                  {state}
                </h6>
                ) : (
                <h6 className="MarginTextCard" style={{ color: "green" }}>
                  {state}
                </h6>
              )}
            </div>
        </div>

        
        
        
        </div>
          
  );
}

export default (HeadOfListData);





