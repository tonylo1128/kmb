import React, {useState} from "react";
import { ListGroup, Row, Col, Card} from "react-bootstrap";
import KmbLogo from "./KmbLogo/KmbLogo"



function HeadOfListData({route,busCom,dst, state }) {
//   const [receivedBusData, setReceivedBusData] = useState();

  return (
    <div>
        

        <div className="headerOfCard"> 

          
            <KmbLogo 
              route={route}
            />
            
            {/* busCompany */}
            <h5 className="h5style"> {busCom}  </h5>


            {/* status, finish or not */}
            <div className="position-style">

            {state !=="✔" && state !=="✘"?


              state=== "未完成" ? (
                <h6 className="MarginTextCard" style={{ color: "red" }}>
                  {state}
                </h6>
                ) : (
                <h6 className="MarginTextCard" style={{ color: "green" }}>
                  {state}
                </h6>
              )
                  :
                  state=== "✘" ? (
                    <h6 className="MarginTextCard" style={{ color: "red" }}>
                      {state}
                    </h6>
                    ) : (
                    <h6 className="MarginTextCard" style={{ color: "green" }}>
                      {state}
                    </h6>
                  )

            }







            </div>
        </div>

        
        
        
        </div>
          
  );
}

export default (HeadOfListData);




