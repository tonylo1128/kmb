import React, { useEffect, useState } from "react";
import * as action from "../../action/action";
import { connect, useSelector } from "react-redux";
import "./DetailContent.scss"

function DetailContent ({featherContent, textingNewReducer, cssActive}){


    const cardCss = useSelector(state=>state.cssReducer.cardCss)


    return(
        
        <div className={cardCss ?"positionAndStyle positionAndStyleActive" : "positionAndStyle"}>
            <div className="mainContainer">
                <h1> {featherContent.路線所屬公司}  : {featherContent.路線} </h1>
            </div>
        </div>

    )
}




const mapStateToProps = (state) => ({
    detailContent: state.reducer.detailContent,
    featherContent: state.reducer.featherContent,
    textingNewReducer: state.cssReducer.textingNewReducer,
    cssActive: state.cssReducer.cssActive
});




const mapsStateToAction = (dispatch) => ({
});


export default connect(mapStateToProps, mapsStateToAction)(DetailContent);


