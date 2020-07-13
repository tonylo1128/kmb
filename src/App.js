import React, { useEffect } from "react";
import "./App.scss";
import { connect, useSelector} from "react-redux";
import * as action from "./action/action";
// import NavBar from "./component/NavBar";
import NavBar2 from "./component/NavBar2/NavBar2"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainContainer from "./component/MainContainer/MainContainer"


function App({ callApiGetData }) {

  


  const lightMode = useSelector(state=>state.cssReducer.lightMode)
  const loading = useSelector(state=>state.cssReducer.loading)

  useEffect(() => {
    callApiGetData(1, 30, loading)
  }, []);


  return (
    <Router>

    <div className={lightMode ? "App  light-mode" : "App dark-mode"}>

      <NavBar2 />

      
      <MainContainer/>
      

    </div>

  </Router>
  );
}

const mapStateToProps = state => ({
  croods: state.reducer.croods,
  excel: state.reducer.excel,
  temp: state.reducer.temp,
  searchInput : state.reducer.searchInput,
  searchResult : state.reducer.searchResult,
});

const mapsStateToAction = dispatch => ({
  callApiGetData: (input, input2, input3) => dispatch(action.callApiGetData(input, input2, input3)),
  getLocation: ()=>dispatch(action.getLocation()),
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);


