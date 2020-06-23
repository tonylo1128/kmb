import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as action from "../../action/action";



function ListData({ }) {

    //following code allow me not to use mapStateToProps  &  mapsStateToAction  & connect
    const temp = useSelector(state=>state.cssReducer.textingNewReducer)
    const dispatch = useDispatch();

  return (
    <div>

        <button onClick={()=>dispatch(action.letsTry())}></button>

        
        <button onClick={()=>dispatch(  { type:XXXXX, payload:{payloadObj} }  )}></button>

    </div>
  );
}


export default (ListData);
