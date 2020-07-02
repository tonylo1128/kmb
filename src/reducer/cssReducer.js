import * as cssType from "../action/css/cssType"


const initstate = {
    textingNewReducer : true,
    cardCss: false,
    loading: false,
    editting: false,
    updateLoading: false
    
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
            let edittingTemp;
            if(state.editting)
                edittingTemp=false;
            return{
                ...state,
                cardCss : false,
                editting: edittingTemp
            }

        case cssType.HANDLE_LOADING_SCREEN:
            return{
                ...state,
                loading: !state.loading
            }

        case cssType.HANDLE_EDITTING:
            return{
                ...state,
                editting: !state.editting
            }

        case cssType.HANDLE_UPDATE_LOADING:
            return{
                ...state,
                updateLoading: !state.updateLoading
            }
        
        default:
            return state;
    }
}

