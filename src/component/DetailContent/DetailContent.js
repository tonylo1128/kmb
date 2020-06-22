import React, { useEffect, useState } from "react";
import * as action from "../../action/action";
import { connect } from "react-redux";
import "./DetailContent.scss"

function DetailContent ({detailContent}){
    return(

        <div className="positionStyle">
            <div class="mainContainer">
                <h1> TESTINGGGGGGGGGGGGGGGGGG </h1>
            </div>
        </div>

    )
}




const mapStateToProps = (state) => ({
    detailContent: state.reducer.detailContent
});




const mapsStateToAction = (dispatch) => ({
});


export default connect(mapStateToProps, mapsStateToAction)(DetailContent);


