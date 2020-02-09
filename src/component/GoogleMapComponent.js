import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import * as action from "../action/action";
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline
} from "react-google-maps"
import axios from 'axios'

// import { hk1980ToGps } from '../../helpers/coordinate'
import {convertCoord} from "./convertCoord"
import InputCom from "./InputCom"

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCrTehUSyDH5v6y4RDP-4YetXvt4rfNFl4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `75%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `75%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const [ path, setPath ] = useState([]);
  const [inputHandle, setInput] = useState("");

  function getPath () {
    
    let url = "http://search.kmb.hk/KMBWebSite/Function/FunctionRequest.ashx?action=getstops&route="+inputHandle+"&serviceType=1&bound=1"
    console.log(url)
    axios.get(url)
    .then(({ data }) => {
      let lineGeometry = data.data.route.lineGeometry
      setPath(eval(lineGeometry))
    })
    .catch(e => console.error(e))
  }

  function handleInputFun(input){
    console.log(input)
    setInput(input)
    // console.log(inputHandle)
  }



  function busRoute (){
    console.log("busRoute function:")
    console.log(inputHandle)
  }

  // useEffect(() => {
  //   getPath()
    
  // }, [path])

  return (
    <div>
      
      
      <GoogleMap defaultZoom={12} defaultCenter={{lat:22.324455, lng:114.171183}}>
      
      {
        path.length !== 0 && (
            path.map((item, index) => <Polyline defaultOptions={{
              geodesic: true,
              strokeColor: '#D1241B',
              strokeOpacity: 1.0,
              strokeWeight: 3
            }} key={index} path={item.map(([lat, lng]) => convertCoord({lat, lng}))} />)
        )
      }
    </GoogleMap>

    <div class="input-group mb-3">
        <input onChange={e =>handleInputFun(e.target.value)} type="text" class="form-control" placeholder="Input a bus route here"  aria-describedby="basic-addon2"/>
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" onClick={()=>getPath()}>Button</button>
        </div>
    </div>

    </div>
  )
})




export default Map