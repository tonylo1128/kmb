import React, { useEffect } from "react";
import "../App.scss"
import * as action from "../action/action";
import { connect } from "react-redux";
import ListData from "../component/ListData";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GetTime from "../component/GetTime";
import GoogleMapComponent from "../component/GoogleMapComponent"
import Instagram from "./Instagram"



function MainContainer({
  temp,
  handleScroll

}) {
  useEffect(() => {
    
    

  }, []);
    
    window.addEventListener('scroll', (event)=>{ handleScroll() } );

  return (
    

      <div 
        className="main-container"
      >
        
      
        <Switch>
          
          <Route exact path="/">
            <div className="cardstyle">
            <ListData />
            </div>
          </Route>

          <Route exact path="/gettime">
            <GetTime temp={temp} />
          </Route>

          <Route exact path="/googlemapapi">
            <GoogleMapComponent/>
          </Route>

          <Route exact path="/instagram">
            <Instagram/>
          </Route>

       
        </Switch>
        {/* <GetTime/> */}
      </div>
      
  );
}

const mapStateToProps = state => ({
  temp: state.reducer.temp,
  searchInput : state.reducer.searchInput,
  searchResult : state.reducer.searchResult,
});

const mapsStateToAction = dispatch => ({
  getLocation: ()=>dispatch(action.getLocation()),
  handleScroll: ()=>dispatch(action.handleScroll())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(MainContainer);
