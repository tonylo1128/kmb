import React, { useEffect, useState  } from "react";
import "../App.scss"
import * as action from "../action/action";
import { connect } from "react-redux";
import ListData from "./ListData/ListData";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GetTime from "../component/GetTime";
import GoogleMapComponent from "./GoogleMap/GoogleMapComponent"
import Instagram from "./Instagram"



function MainContainer({
  temp,
  handleScroll,
  getPath,
  texting

}) {
  useEffect(() => {

  }, []);
    

  window.addEventListener('scroll', (event)=>{ handleScroll() } );

  function useToggleForInput(){
    const [input, setInput] = useState()
    const toggleInput = (e) => setInput(e.target.value)
    return [input, toggleInput]
  }

  const [inputValue, toggleFun] = useToggleForInput();



  const [path, setPath] = useState([]);
  const [zoom, setZoom] =useState(12);
  const [center, setCenter] =useState(12);


  return (
      
      

      <div className="main-container">
        
      
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
            <div class="inputCon">
              <input type="text" onChange={toggleFun}  placeholder="Try to enter a KMN route here"  style={{width:80+"%"}}/>
              <button onClick={ ()=> getPath(inputValue, setPath, setZoom, setCenter)}  style={{float:"right", display:"flex", alignItems:"center"}}>
                Click Here
              </button>
            </div>
            <GoogleMapComponent  path={path} zoomLevel={zoom} center={center}/>
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
  handleScroll: ()=>dispatch(action.handleScroll()),
  getPath: (inputValue, setPath, setZoom, setCenter)=>dispatch(action.getPath(inputValue, setPath, setZoom, setCenter))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(MainContainer);
