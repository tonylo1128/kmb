import React, { useEffect, useState } from "react";
import "./mainContainer.scss";
// import "../App.scss"
import * as action from "../../action/action";
import { connect, useSelector, useDispatch } from "react-redux";
import ListData from "../ListData/ListData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetTime from "../GetTime/GetTime";
import GoogleMapComponent from "../GoogleMap/GoogleMapComponent";
import Instagram from "../Instagram";
import DetailContent from "../DetailContent/DetailContent"
import Loading from "../Loading/Loading"
import DataSetting from "../DataSetting/DataSetting"


import _debounce from 'lodash.debounce'

function MainContainer( { temp, handleScroll, getPath, texting, enterKeyHandle, detailContent, searchResult, realObj, searchInput} ) {

  const dispatch = useDispatch();
  
  function useToggleForInput() {
    const [input, setInput] = useState();
    const toggleInput = (e) => setInput(e.target.value);
    return [input, toggleInput];
  }

  const [inputValue, toggleFun] = useToggleForInput();
  const [path, setPath] = useState([]);
  const [zoom, setZoom] = useState(12);
  const [center, setCenter] = useState({ lat: 22.324455, lng: 114.171183 });
  const loading = useSelector((state)=>state.cssReducer.loading)
  const cardCss = useSelector(state=>state.cssReducer.cardCss)


  useEffect(()=>{

    window.addEventListener("scroll", _debounce((event) => {

      // if (window.innerHeight + window.scrollY == document.body.scrollHeight) {
      //   console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
      //   let url = window.location.href;

      //   if ( url == "http://localhost:3000/" ||  url == "http://damp-beyond-67207.herokuapp.com/" ) {
      //     // console.log("ABOUT TO DISPATCHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
      //     dispatch(action.handleScroll(loading)) 
      //     // testingggg();
      //     // console.log("CEHCKKINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG")
      //   }
      // }
      console.log(1)
      if (document.body.scrollHeight - (window.innerHeight + window.scrollY) <= 100 ) {
        console.log('Should fetch new data: ', loading)
        let url = window.location.href;
        if ( url === "http://localhost:3000/" ||  url === "http://damp-beyond-67207.herokuapp.com/" ) {
          if (!loading) {
            dispatch(action.handleScroll(loading)) 
          }
        }
      }

    }, 100));

    return () => {
      window.removeEventListener('scroll', () => {})
    }

  }, [])

  

  
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/">
          <div className="cardstyle">

          {/* used to onClick then display feather content */}

            {loading && <Loading/>}
            <div style={{width:"100%",display:"flex",justifyContent: "center"}}>
                {/* {cardCss?
                  
                  :
                  ""
                } */}
                <DetailContent/>
                {/* <DetailContent/> */}
                <ListData 
                  searchResult={searchResult}
                  realObj={realObj}
                  searchInput={searchInput}
                />
              </div>

            
          </div>
        </Route>

        <Route exact path="/gettime">
          <GetTime temp={temp} />
        </Route>

        <Route exact path="/googlemapapi">
          <div className="inputCon">
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


        <Route exact path="/datasetting">
            <DataSetting/>
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
  detailContent: state.reducer.detailContent,
  realObj: state.reducer.realObj,
  
});

const mapsStateToAction = (dispatch) => ({
  getLocation: () => dispatch(action.getLocation()),
  handleScroll: () => dispatch(action.handleScroll()),
  getPath: (inputValue, setPath, setZoom, setCenter) => dispatch(action.getPath(inputValue, setPath, setZoom, setCenter)),
  enterKeyHandle: (eventValue, inputValue, setPath, setZoom, setCenter) => dispatch(action.enterKeyHandle(eventValue, inputValue, setPath, setZoom, setCenter)),
});

export default connect(mapStateToProps, mapsStateToAction)(MainContainer);
