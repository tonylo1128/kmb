import * as type from "./type";
import * as cssAction from "./css/cssAction"
import * as XLSX from "xlsx";
import axios from "axios";
import {convertCoord} from "../component/convertCoord"

require("dotenv");

export function handleFileInput(inputTemp) {
  return {
    type: type.HANDLE_EXCELFILE_INPUT,
    payload: inputTemp,
  };
}

export function storeValueToState(data) {
  return {
    type: type.STORE_VALUE_TO_STATA,
    payload: data,
  };
}

export function callApiForPostData(kmbData) {
  return (dispatch) => {
    // return axios.post("https://still-taiga-23168.herokuapp.com/postData", {kmbData})
    return axios.post(`${process.env.REACT_APP_BASE_API_URL}/postData`, {
      kmbData,
    });
  };
}

export function getLocation() {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        dispatch(setCroods(position));
      },
      (error) => {
        alert("Geolocation is not supported by this browser.");
      },
      { maximumAge: 0, timeout: 5000, enableHighAccuracy: true }
    );
  };
}

export function setCroods(croods) {
  return {
    type: type.SET_CROODS,
    payload: croods,
  };
}

export function handleBusRouteInput(input) {
  return {
    type: type.HANDLE_BUST_ROUTE_INPUT,
    payload: input,
  };
}

export function getBusBound(input) {
  console.log(input);

  return (dispatch) => {
    return axios
      .get(
        "http://search.kmb.hk/KMBWebSite/Function/FunctionRequest.ashx?action=getroutebound&route=" +
          input
      )
      .then((response) => {
        console.log("Here is in the action and here is the api response");
        console.log(response);
        dispatch(callbackForGetBusBound(response.data.data));
      });
  };
}

export function callbackForGetBusBound(response) {
  return {
    type: type.CALLBACK_FOR_API_GET_BOUND,
    payload: response,
  };
}

let pageValue = 0;
let perPageValue = 0;

export function callApiGetData(page, per_page) {

  pageValue = page;
  perPageValue = per_page;
  console.log("TRYINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG   to get data form backend");
  let url =  `${process.env.REACT_APP_BASE_API_URL}/getdata?page` +  page + `&per_page=` +  per_page;
  console.log(url);
  return (dispatch) => {
    // start loading screen
    dispatch(cssAction.loading()) 
    // return axios.get(`${process.env.REACT_APP_BASE_API_URL}`)
    return axios
      .get( `${process.env.REACT_APP_BASE_API_URL}/getdata?page=` + page + `&per_page=` + per_page )
      .then((response) => {
        pageValue++;
        console.log(response.data);
        dispatch(getDataApiFun(response.data.recieveRespFromkmbDataRepos));
        // end loading screen
        dispatch(cssAction.loading()) 
      });
  };
  

  
}

export function getDataApiFun(returnDataFromNodejs) {
  return {
    type: type.CALL_API_GET_DATA,
    payload: returnDataFromNodejs,
  };
}







export function handleScroll() {
  return (dispatch) => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      // you're at the bottom of the page
      console.log("Bottom of page and the current url is: ");
      let url = window.location.href;
      console.log(url);
      if (
        url == "http://localhost:3000/" ||
        url == "http://damp-beyond-67207.herokuapp.com/"
      ) {
        dispatch(callApiGetData(pageValue, perPageValue));
      }
    }
  };
}

export function callApiForRouteData(route, serviceType, bound) {
  console.log("TESTTESTTESTTESTTESTTEST");
  console.log(route, " ", serviceType, " ", bound);
  console.log("TESTTESTTESTTESTTESTTEST");
  return (dispatch) => {
    return axios
      .get(
        "http://search.kmb.hk/KMBWebSite/Function/FunctionRequest.ashx?action=getstops&route=" +
          route +
          "&serviceType=" +
          serviceType +
          "&bound=" +
          bound
      )
      .then((response) => {
        console.log("FUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCK");
        console.log(response);
        dispatch(
          callBackForApiRouteData(
            response.data.data.routeStops,
            route,
            serviceType,
            bound
          )
        );
      });
  };
}

export function callBackForApiRouteData(response, route, serviceType, bound) {
  let payload = { response, route, serviceType, bound };
  return {
    type: type.CALLBACK_FOR_API_ROUTE_DATA,
    payload: payload,
  };
}

export function callApiGetTime(inputA) {
  console.log("-------AAAAAAAA----------BBBBBBBBB------------");
  console.log(inputA);
  console.log("-------AAAAAAAA----------BBBBBBBBB------------");
  return (dispatch) => {
    console.log(process.env.REACT_APP_BASE_API_URL);
    return axios
      .post(`${process.env.REACT_APP_BASE_API_URL}/getbustime`, { inputA })
      .then((response) => {
        console.log("dataForBusData arrrrrrrrrrrrrrrrrrrrrrrrr");
        console.log(response.data.dataForBusData);
        const temp = response.data.dataForBusData;
        // temp.map((item, index)=>{
        //   console.log(item.response)
        // })
        dispatch(callbackApiForGetTime(temp));
      });
  };
}

export function callbackApiForGetTime(collectionOfResult) {
  return {
    type: type.CALLBACK_FOR_GET_TIME,
    payload: collectionOfResult,
  };
}

export function clearBusRouteDetails() {
  return {
    type: type.CLEAR_ROUTE_DATA,
    payload: null,
  };
}

export function callApiTestingFuction() {
  return (dispatch) => {
    return axios
      .get(
        "http://search.kmb.hk/KMBWebSite/Function/FunctionRequest.ashx?action=getstops&route=31m&bound=1&serviceType=1"
      )
      .then((response) => {
        let test = response.data.data.route.lineGeometry;
        let obj = JSON.parse(test);
        console.log(obj);
      });
  };
}

export function callBackForTestingFun(returnRes) {
  return {
    type: type.TESTING_FOR_API_PATH,
    payload: returnRes,
  };
}

export function handleSearchInput(inputSearchValue, busDataCheck) {
  return {
    type: type.SEARCH_INPUT_FUNCTION,
    payload: { inputSearchValue, busDataCheck },
  };
}

export function serverSideSearchFun(inputSearchValue) {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BASE_API_URL}/seaching`, {
        inputSearchValue,
      })
      .then((returnResponse) => {
        console.log("we are here in action.js, HERE IS THE RETURN RESPONSE for searching function");
        console.log(returnResponse.data.returnResp);
        dispatch(
          sssDispatchFun(returnResponse.data.returnResp, inputSearchValue)
        );
      });
  };
}

export function sssDispatchFun(returnResp, inputValue) {
  return {
    type: type.SERVER_SIDE_SEARCHING,
    payload: { returnResp, inputValue },
  };
}



function findCenterConvert (lineGeometry){
  return dispatch=>{

      let temp = lineGeometry;
      let jsonLineGeometry =temp.replace("paths", "\"paths\"")
      jsonLineGeometry = JSON.parse(jsonLineGeometry)
      let center = jsonLineGeometry.paths[   parseInt((jsonLineGeometry.paths.length)/2 )  ]
      // console.log(center[center.length/2])
      center = center[parseInt(center.length/2)];
      center =  convertCoord({ lat: center[0], lng: center[1] })
      console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
      console.log(center)
      return center
    }
     
}



export function getPath(inputHandle, setPath, setZoom, setCenter) {
  return (dispatch) => {
    console.log("Time to get pathhhhhhhhhhhhhhhhhhhh");
    let url =
      "http://search.kmb.hk/KMBWebSite/Function/FunctionRequest.ashx?action=getstops&route=" +
      inputHandle +
      "&serviceType=1&bound=1";

    axios.get(url).then(({ data }) => {
      let lineGeometry = data.data.route.lineGeometry;

      console.log( dispatch(findCenterConvert(lineGeometry)))

      setPath(eval(lineGeometry));
      setZoom(13);
      setCenter(  findCenterConvert(lineGeometry)  );
    });
  };
}


export function enterKeyHandle( eventValue, inputValue, setPath, setZoom, setCenter ) {
  // alert("Hello! I am an alert box!!");
  return (dispatch) => {
    console.log(eventValue.keyCode);
    if (eventValue.keyCode == 13) {
      console.log("WE DID IT SUCKER ! ! !");
      dispatch(getPath(inputValue, setPath, setZoom, setCenter));
    }
  };
}



export function featherContent (passInContent){
  return dispatch=>{
    console.log(passInContent)
    
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDAAAAAAAAAAAAAAAAAAAAAMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNN")
    dispatch(featherContentCallBack(passInContent))
    dispatch(cssAction.cssActiveHandle())
  }
}

export function featherContentCallBack(passInContent) {
  return {
    type: type.SHOW_DETAIL_CONTENT,
    payload:passInContent,
  };
}




// export const enterKeyHandle = (eventValue, inputValue, setPath, setZoom, setCenter, dispatch)=> dispatch =>{
//   console.log(eventValue.keyCode )
//   // alert("Hello! I am an alert box!!");

//   if(eventValue.keyCode ==13){
//     console.log("WE DID IT SUCKER ! ! !")
//     dispatch(getPath( inputValue, setPath, setZoom, setCenter) )
//   }
// }


export function letsTry (){
  return dispatch=>{
    console.log("IT WORKSS SUKCER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  }
  
}


//HERE

export function getSpecificDate(id ,route ,company){
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  console.log(id ,route ,company)
  let url = "http://localhost:8081/getspecific";
  // let url =`${process.env.REACT_APP_BASE_API_URL}/getspecific`
  return (dispatch)=>{
    return axios
    .get(url, {params:{id ,route ,company}})
    .then(resp=>{
      dispatch(featherContentCallBack(resp))
    })
  }
}
