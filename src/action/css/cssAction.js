import * as cssType from "./cssType";
import axios from "axios";
import * as action from "../action"

export function cssActiveHandle() {
  return {
    type: cssType.CSS_ACTIVE_HABDLE,
  };
}

export function closeButton() {
  return {
    type: cssType.CLOSE_BUTTON_HANDLE,
  };
}

export function loading() {
  return {
    type: cssType.HANDLE_LOADING_SCREEN,
  };
}

export function totalTime(startTime, endTime) {
  if(startTime !="" && endTime !=""){

  
    let actualStartTime =
      parseInt(startTime.split("T")[1].split(":")[0]) * 60 +
      parseInt(startTime.split("T")[1].split(":")[1]);
    let actualEndTime =
      parseInt(endTime.split("T")[1].split(":")[0]) * 60 +
      parseInt(endTime.split("T")[1].split(":")[1]);
    let total = actualEndTime - actualStartTime;
    let hours,
      mins = "";

    hours = parseInt(total / 60);
    mins = (total / 60 - parseInt(total / 60)) * 60;

    if (mins < 1 && mins != 0) mins = 1;
    else mins = parseInt(mins);

    let finalTime = hours + "小時" + mins + "分鐘";

    return finalTime;
  }
}

export function editting( inputA, inputB, inputC, inputD, inputE, setInputA, setInputB, setInputC, setInputD, setInputE, target) {

  let startTime, endTime, total, igLink, remake = "";
  let url = `${process.env.REACT_APP_BASE_API_URL}/update`
  // let url = "http://localhost:8081/update";
  if (inputA != "" || inputB != "" || inputC != "" || inputD != "") {
    //30062020,0900,1157

    startTime = inputA.split("T")[0].split("-").join("/") + " " + inputA.split("T")[1] + ":00";
    endTime = inputB.split("T")[0].split("-").join("/") + " " + inputB.split("T")[1] + ":00";
    total = totalTime(inputA, inputB);
    igLink= inputD;
    remake=inputE;


    setInputA(""); setInputB(""); setInputC(""); setInputD(""); setInputE("");

  

  return (dispatch)=>{
    return axios.put(url,{startTime, endTime, total, igLink, remake, target})
    .then((resp)=>{
      console.log(resp.data)
      
      if(resp.data.respFromReps){
        console.log("I cant do this all day !")
        console.log(target.id)
        dispatch(action.getSpecificDate(target.id, target.路線, target.路線所屬公司))
      }
      dispatch(callBackForEditting())
    })
  }
}
else{
  return {
    type: cssType.HANDLE_EDITTING,
  };
}
  
}


export function callBackForEditting (){
  return {
    type: cssType.HANDLE_EDITTING,
  };
}