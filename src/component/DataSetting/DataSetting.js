import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as action from "../../action/action";
import * as cssAction from "../../action/css/cssAction"
import * as dataBaseEnv from "../dataBaseEnv"
import "./DataSetting.scss"

function DataSetting (){


    const dispatch = useDispatch(); 

    return(
        <div className="main-container-ds">
            <h4>You can select which database you wanna connect:</h4>

            <div className="data-setting">
                <div className="urlContainer">
                    
                    {
                        dataBaseEnv.dataBaseEnv.map((item, index)=>{
                            return <div className="url" onClick={()=>{ dispatch(action.changeDatabaseUrl(item.url)) } }>
                                        <div> {item.url} </div>
                                    </div>
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default DataSetting