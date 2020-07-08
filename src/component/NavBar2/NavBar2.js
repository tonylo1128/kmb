import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import * as action from "../../action/action";
import * as cssAction from "../../action/css/cssAction"
import "./NavBar.scss"
import { Link } from "react-router-dom";

function NavBar2({ serverSideSearchFun }) {


  const dispatch = useDispatch();
  const [moblieMenuActive, setMoblieMenuActive] = useState(false)
  //const lightMode = useSelector(state=>state.cssReducer.lightMode)

  return (
   
    <div className={moblieMenuActive ? "nav-bar-container active" :"nav-bar-container"}>
        
        <div className="logo"><Link to="/" style={{ color: '#ffffff',  }}>KMBPJ</Link></div>
        <div className="menu-button-768" onClick={()=>setMoblieMenuActive(!moblieMenuActive)}>
            <div className="line-top"></div>
            <div className="middle-top"></div>
            <div className="bottom-top"></div>
        </div>


        <div className={moblieMenuActive ? "mobile-container active" :"mobile-container"}>
        
            <div className="left-nav-bar-container">
                <div className="sub-left">
                    <div><Link to="/gettime" style={{ color: '#ffffff',  }}>Get Time</Link></div>
                    <div><Link to="/googlemapapi" style={{ color: '#ffffff',  }}>GoogleMapAPI</Link></div>
                    <div><Link to="/Instagram" style={{ color: '#ffffff',  }}>Instagram</Link></div>
                    <div><Link to="/datasetting" style={{ color: '#ffffff',  }}>Data Init</Link></div>
                </div>
            </div>

            <div className="right-nav-bar-container">
                

                <div className="switch-container">
                    <input 
                        type="checkbox"
                        className="switch"
                        onClick={() => dispatch(cssAction.lightModee())}
                    />
                </div>
                    

                <input 
                className="search-input"
                // onChange={(event)=>handleSearchInput(event.target.value, realObj)}
                onChange={(event)=>dispatch ( action.serverSideSearchFun(event.target.value) )}
                type="text"  placeholder="Search.."/>

                
            </div>
        </div>

      </div>
   
  );
}



export default (NavBar2);




