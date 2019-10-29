import * as type from "./type"
import * as XLSX from 'xlsx';
import axios from "axios";

let data = []; 

export function handleFileInput(inputTemp){
    console.log("---------------------")
    console.log(inputTemp)
    console.log("---------------------")
    
    
      return {
        type: type.HANDLE_EXCELFILE_INPUT,
        payload: inputTemp
      }
  }

  export function storeValueToState (data){
    console.log("WE ARE IN storeValueToState FUNCTION")
    console.log("WE ARE IN storeValueToState FUNCTION")
    console.log(data)
    console.log("WE ARE IN storeValueToState FUNCTION")
    return {
      type: type.STORE_VALUE_TO_STATA,
      payload: data
    };
  }
  
  
  export function callApiForPostData(kmbData){
    console.log("on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9")
    console.log(kmbData)
    console.log("on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9on9")
    return dispatch => { 
      return axios.post("http://localhost:8001/postData", {kmbData})
    
  }
}
