import React from "react"
import "./UpdateLoading.scss"
import waitForIt from "../../img/updateLoading.gif"

function UpdateLoading(){
    return(
        <div className="udLoadingContainer">
            
            <div className="transparentBg"></div>

            <div className="loadingObj">
                <img src={waitForIt}/>
                <div className="wordContainer">
                    <div className="">WAIT FOR IT </div>
                    <div className="loadingAnimation">
                        <div className="dot1">.</div>
                        <div className="dot2">.</div>
                        <div className="dot3">.</div>
                    </div>
                </div>
            </div>

        </div>



        
    )
}

export default UpdateLoading;