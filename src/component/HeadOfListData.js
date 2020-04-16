import React, {useState} from "react";
import { ListGroup, Row, Col, Card} from "react-bootstrap";




function HeadOfListData({route,busCom,dst }) {
//   const [receivedBusData, setReceivedBusData] = useState();

  return (
    <div>
        

        <div className="headerOfCard"> 

            <div className="round">
                <div className="kmbBusLogo"> </div>
                <div className="rectangle">  {route}   </div> 
            </div>


             
            
            



            <h5 className="h5style"> {busCom}  </h5>

        </div>


        
        
        
        </div>
          
  );
}

export default (HeadOfListData);





