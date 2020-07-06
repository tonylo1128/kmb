import React from "react"
import waiting from "../../img/waiting.gif"
import "./BusDataUploading.scss"

function BusDataUploading(){
    return(
        <div className="bus-data-uploading-container">
            <div className="transparent-bg-black"></div>
            
            <div className="content-contianer">
                <img src={waiting}/>
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

export default BusDataUploading