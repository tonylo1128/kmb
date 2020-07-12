import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import loadingGif from "../../img/loading.gif"
import "./Loading.scss"

function Loading({}){

    const diptach = useDispatch();

    const lightMode = useSelector(state=>state.cssReducer.lightMode)

    const loading = useSelector(state=> state.cssReducer.loading)
    console.log(loading)
    return(
        <div className={`loading-container ${lightMode && 'light'}`}>
            <div className="imgContainer">
                <img src={loadingGif}/>
                <div className="loadingText">
                    <div className="">L</div>
                    <div className="">o</div>
                    <div className="">a</div>
                    <div className="">d</div>
                    <div className="">i</div>
                    <div className="">n</div>
                    <div className="">g</div>
                    <div className="">.</div>
                    <div className="">.</div>
                    <div className="">.</div>
                    <div className="">.</div>
                    <div className="">.</div>
                    <div className="">.</div>
                </div>
            </div>
        </div>
    )
}


export default Loading