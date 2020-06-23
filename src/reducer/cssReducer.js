import * as cssType from "../action/css/cssType"
import React, { useEffect, useState } from "react";

// let cardCsss = let [cardCss, setCardCss]=useState(false);

const initstate = {
    textingNewReducer : true,
    cardCss: false
    
};

export default function ( state=initstate, {type, payload}){

    switch(type){
        case cssType.CSS_ACTIVE_HABDLE:
            console.log("THE NEW REDUCER WORKS7777777777777777777777777777777777777777777")
            let temp = state.cardCss ? false: true;
            return{
                ...state,
                cardCss : temp
            }
        
        default:
             return state;
    }
}

