import * as type from "./type"
import * as XLSX from 'xlsx';
import axios from "axios";



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
      return axios.post("http://localhost:8001/postData", {kmbData})
    
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
      return axios.get("http://localhost:8001/")
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




  export function callApiGetTime(inputA, inputB, inputC){
    console.log("-------AAAAAAAA----------BBBBBBBBB------------")
    console.log(inputA, inputB, inputC)
    console.log("-------AAAAAAAA----------BBBBBBBBB------------")
    return dispatch=>{
      return axios.post("http://localhost:8001/getbustime", {inputA, inputB} )
      .then(response=>{
        const temp = JSON.parse(response.data.dataForBusData)
        console.log(temp.response)
        dispatch(callbackApiForGetTime(temp.response, inputB, inputC))
      })
    }
  }

  export function callbackApiForGetTime (apiData, selectedItem, inputC){
    return {
      type: type.CALLBACK_FOR_GET_TIME,
      payload: {apiData, selectedItem, inputC}
    }
  }