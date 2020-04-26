import  React, { useEffect } from "react"
import * as action from "../action/action";
import { connect } from "react-redux";


function Instagram ({igOauthFun, igOauthReturnHtml}) {

    useEffect( ( )=>{
        igOauthFun();
    }, []);

    return(
        <div>
            {igOauthReturnHtml !==null ?
                
                <div
                dangerouslySetInnerHTML={{
                    __html: igOauthReturnHtml
                }}></div>
                :
                <h1>testing</h1>
            }
            
        </div>
    )
}

const mapStateToProps = state => ({
    igOauthReturnHtml: state.reducer.igOauthReturnHtml,
})

const mapsStateToAction = dispatch => ({
    igOauthFun: ()=> dispatch(action.igOauthFun())
})

export default connect(
    mapStateToProps, 
    mapsStateToAction
)(Instagram);