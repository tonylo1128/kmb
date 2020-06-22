import React, { useEffect, useState } from "react";
import "./mainContainer.scss";
// import "../App.scss"
import * as action from "../../action/action";
import { connect } from "react-redux";
import ListData from "../ListData/ListData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetTime from "../GetTime";
import GoogleMapComponent from "../GoogleMap/GoogleMapComponent";
import Instagram from "../Instagram";
import DetailContent from "../DetailContent/DetailContent"

function MainContainer({
  temp,
  handleScroll,
  getPath,
  texting,
  enterKeyHandle,
  detailContent
}) {
  useEffect(() => {}, []);

  window.addEventListener("scroll", (event) => {
    handleScroll();
  });

  function useToggleForInput() {
    const [input, setInput] = useState();
    const toggleInput = (e) => setInput(e.target.value);
    return [input, toggleInput];
  }

  const [inputValue, toggleFun] = useToggleForInput();
  const [path, setPath] = useState([]);
  const [zoom, setZoom] = useState(12);
  const [center, setCenter] = useState({ lat: 22.324455, lng: 114.171183 });

  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/">
          <div className="cardstyle">






          {/* used to onClick then display feather content */}
          {detailContent ?              
            <DetailContent/>
            :
            ""
          }




            <ListData />
            
          </div>
        </Route>

        <Route exact path="/gettime">
          <GetTime temp={temp} />
        </Route>

        <Route exact path="/googlemapapi">
          <div class="inputCon">
            <input
              type="text"
              onChange={toggleFun}
              onKeyUp={(event) => {
                enterKeyHandle(event, inputValue, setPath, setZoom, setCenter);
              }}
              placeholder="Try to enter a KMB's bus route here"
              style={{ width: 80 + "%" }}
            />
            <button
              onClick={() => getPath(inputValue, setPath, setZoom, setCenter)}
              style={{ float: "right", display: "flex", alignItems: "center" }}
            >
              Click Here
            </button>
          </div>
          <GoogleMapComponent path={path} zoomLevel={zoom} center={center} />
        </Route>

        <Route exact path="/instagram">
          <Instagram />
        </Route>
      </Switch>
      {/* <GetTime/> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  temp: state.reducer.temp,
  searchInput: state.reducer.searchInput,
  searchResult: state.reducer.searchResult,
  detailContent: state.reducer.detailContent
});

const mapsStateToAction = (dispatch) => ({
  getLocation: () => dispatch(action.getLocation()),
  handleScroll: () => dispatch(action.handleScroll()),
  getPath: (inputValue, setPath, setZoom, setCenter) => dispatch(action.getPath(inputValue, setPath, setZoom, setCenter)),
  enterKeyHandle: (eventValue, inputValue, setPath, setZoom, setCenter) => dispatch(action.enterKeyHandle(eventValue, inputValue, setPath, setZoom, setCenter)),
});

export default connect(mapStateToProps, mapsStateToAction)(MainContainer);
