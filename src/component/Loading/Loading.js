import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import loadingGif from "../../img/loading.gif"

function Loading({}){

    const diptach = useDispatch();

    const loading = useSelector(state=> state.cssReducer.loading)
    console.log(loading)
    return(
        
        <div className="imgContainer">
            <img src={loadingGif}/>
        </div>
    )
}


export default Loading