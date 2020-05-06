import  React, { useState, useEffect } from "react"
import * as action from "../action/action";
import { connect } from "react-redux";


function Instagram ({igOauthFun, igOauthReturnHtml}) {
    function fbSDK (){
        console.log("i am running the script function")
        var js, fjs = document.getElementsByTagName('script')[0];
        if (document.getElementById('facebook-jssdk')) {return;}
        js = document.createElement('script'); 
        js.id = 'facebook-jssdk';
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }

    function checkLogin(){
        window.FB.getLoginStatus(function(response) {
            console.log(response)
          });
    }

    

    useEffect( ()=>{

        fbSDK();

        window.fbAsyncInit  = function(){
            window.FB.init({
                appId      : '250893722948056',
                cookie     : true,
                xfbml      : true,
                version    : 'v6.0'
              });

            window.FB.AppEvents.logPageView(); 
        };

        
        

    }, [])

    
    let [login, setLogin] = useState(false);
    function testing (){
        console.log("onLogin funcion ! ")
        window.FB.getLoginStatus(function(response) {
            console.log("Here is the onLogin function")
            console.log(response)
          });
    } 
    
    return(
        <div>

            <div 
                class="fb-login-button" 
                data-size="large" 
                data-button-type="continue_with" 
                data-layout="default" 
                data-auto-logout-link="true" 
                data-use-continue-as="true" 
                data-width=""
                data-onlogin="testing();" >
            </div>

            <button onClick={()=>checkLogin()}>
                testing
            </button>

            

        </div>
    )
}

const mapStateToProps = state => ({

})

const mapsStateToAction = dispatch => ({

})

export default connect(
    mapStateToProps, 
    mapsStateToAction
)(Instagram);