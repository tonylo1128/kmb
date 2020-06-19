import React, {useState} from "react";

import "./kmbLogo.scss";

function KmbLogo({route}) {
  return(
    <div className="round">
      <div className="kmbBusLogo"> </div>
      <div className="rectangle"> {route} </div>
    </div>
  );
}


export default KmbLogo;