import * as type from "./type"
import * as XLSX from 'xlsx';
import axios from "axios";

require('dotenv');


let data = []; 

export function handleFileInput(inputTemp){
      return {
        type: type.HANDLE_EXCELFILE_INPUT,
        payload: inputTemp
      }
  }

  export function storeValueToState (data){
    return {
      type: type.STORE_VALUE_TO_STATA,
      payload: data
    };
  }
  
  
  export function callApiForPostData(kmbData){
    return dispatch => { 
      // return axios.post("https://still-taiga-23168.herokuapp.com/postData", {kmbData})
      return axios.post(`${process.env.REACT_APP_BASE_API_URL}/postData`, {kmbData})
    
  }
}


export function getDataApiFun(returnDataFromNodejs){
  return{
    type: type.CALL_API_GET_DATA,
    payload: returnDataFromNodejs
  }
}

export function getLocation(){
  return dispatch =>{
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
        dispatch(setCroods(position))
      },
      error =>{
        alert("Geolocation is not supported by this browser.");
      },
      {maximumAge:0, timeout:5000, enableHighAccuracy: true}
    );
  }
    
    
  }

  export function setCroods(croods){
    return {
      type: type.SET_CROODS,
      payload: croods
    }
   
  }

  export function handleBusRouteInput(input){
    return{
      type: type.HANDLE_BUST_ROUTE_INPUT,
      payload:input
    }
  }

  export function getBusBound (input){
    console.log(input)
    
    return dispatch=>{
      return axios.get("http://search.kmb.hk/KMBWebSite/Function/FunctionRequest.ashx?action=getroutebound&route="+input)
      .then(response=>{
        console.log("Here is in the action and here is the api response")
        console.log(response)
        dispatch(callbackForGetBusBound(response.data.data))
      })
    }
  }

  export function callbackForGetBusBound (response){
    return{
      type:type.CALLBACK_FOR_API_GET_BOUND,
      payload:response
    }
  }

  export function callApiGetData(){
    return dispatch =>{
      // return axios.get("https://still-taiga-23168.herokuapp.com/")
      return axios.get(`${process.env.REACT_APP_BASE_API_URL}`)
      .then(response=>{
        console.log(response.data)
        dispatch(getDataApiFun(response.data.recieveRespFromkmbDataRepos))
      })
    }
  }

  export function callApiForRouteData(route, serviceType, bound){
    console.log("TESTTESTTESTTESTTESTTEST")
    console.log(route," ", serviceType," ", bound)
    console.log("TESTTESTTESTTESTTESTTEST")
    return dispatch=>{
      return axios.get("http://search.kmb.hk/KMBWebSite/Function/FunctionRequest.ashx?action=getstops&route="+route+"&serviceType="+serviceType+"&bound="+bound)
      .then(response=>{
        console.log("FUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCKFUCK")
        console.log(response)
        dispatch(callBackForApiRouteData(response.data.data.routeStops, route, serviceType, bound))
      })
    }
  }

  export function callBackForApiRouteData(response, route, serviceType, bound){
    let payload ={response, route, serviceType, bound}
    return{
      type:type.CALLBACK_FOR_API_ROUTE_DATA,
      payload:payload
    }
  }


  export function callApiGetTime(inputA){
    console.log("-------AAAAAAAA----------BBBBBBBBB------------")
    console.log(inputA)
    console.log("-------AAAAAAAA----------BBBBBBBBB------------")
    return dispatch=>{
      console.log(process.env.REACT_APP_BASE_API_URL)
      return axios.post(`${process.env.REACT_APP_BASE_API_URL}/getbustime`, {inputA} )
      .then(response=>{
        console.log("dataForBusData arrrrrrrrrrrrrrrrrrrrrrrrr")
        console.log(response.data.dataForBusData) 
        const temp = response.data.dataForBusData
        // temp.map((item, index)=>{
        //   console.log(item.response)
        // })
        dispatch(callbackApiForGetTime(temp))
      })
    }
  }

  export function callbackApiForGetTime (collectionOfResult){
    return {
      type: type.CALLBACK_FOR_GET_TIME,
      payload: collectionOfResult
    }
  }

  export function clearBusRouteDetails(){
    return{
      type: type.CLEAR_ROUTE_DATA,
      payload: null
    }
  }

  export function callApiTestingFuction(){
    return (dispatch)=>{
      return axios.get("http://search.kmb.hk/KMBWebSite/Function/FunctionRequest.ashx?action=getstops&route=31m&bound=1&serviceType=1")
      .then(response=>{
        console.log("Testing-------------------------------")
        let test = response.data.data.route.lineGeometry
        let obj = JSON.parse(test)
        console.log(obj)
      })
    }
  }

  export function callBackForTestingFun(returnRes){
    return{
      type:type.TESTING_FOR_API_PATH,
      payload: returnRes
    }
  }