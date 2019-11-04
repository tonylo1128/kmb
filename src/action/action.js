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
      return axios.post("http://localhost:8000/postData", {kmbData})
    
  }
}


export function callApiGetData(){
  return dispatch =>{
    return axios.get("http://localhost:8000/")
    .then(response=>{
      console.log(response.data)
      dispatch(getDataApiFun(response.data.recieveRespFromkmbDataRepos))
    })
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
      {maximumAge:Infinity, timeout:0, enableHighAccuracy: true}
    );
  }
    
    
  }

  export function setCroods(croods){
    return {
      type: type.SET_CROODS,
      payload: croods
    }
   
  }
