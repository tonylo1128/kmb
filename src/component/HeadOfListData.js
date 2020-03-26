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


            <div className="flexDCol">

                <div className="trapezoid"> 
                    <div className="cityBusLogo"> </div>
                    {/* <div className="kmbBusLogo"> </div> */}
                </div>

                <div className="RTG"> 
                   {/* <div className="fontSetting"> {dst} </div> */}
                   {/* {dst} */}
                </div>

                <div className="RTGNo2"> 
                    <div className="RTGNo3"> {route}  </div>
                </div>
                    
            </div>



            <h5 className="h5style"> {busCom}  </h5>

        </div>


        
            <div className="testWord">"Testing";</div>
        
        </div>
          
  );
}

export default (HeadOfListData);





