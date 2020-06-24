import * as cssType from "../action/css/cssType"


const initstate = {
    textingNewReducer : true,
    cardCss: false
    
};

export default function ( state=initstate, {type, payload}){

    switch(type){
        case cssType.CSS_ACTIVE_HABDLE:
            console.log("THE NEW REDUCER WORKS7777777777777777777777777777777777777777777")
            //below condition should be "false:true"
            let temp = state.cardCss ? true: true;
            return{
                ...state,
                cardCss : temp
            }

        
        case cssType.CLOSE_BUTTON_HANDLE:
            return{
                ...state,
                cardCss : false
            }

        
        default:
            return state;
    }
}

