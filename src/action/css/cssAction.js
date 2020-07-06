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


export function updateLoading (){
  return{
    type:cssType.HANDLE_UPDATE_LOADING
  }
}



export function handleInItDataLoading(){
  console.log("LOADING SCREEN CALLEDDDDD")
  return{
    type:cssType.HANDLE_INIT_DATA_UPDATE
  }
}










export function editting( inputA, inputB, inputC, inputD, inputE, setInputA, setInputB, setInputC, setInputD, setInputE, target) {


  
  let startTime, endTime, total, igLink, remake = "";
  let url = `${process.env.REACT_APP_BASE_API_URL}/update`
  // let url = "http://localhost:8081/update";
  if (inputA!=target.開始時間 && inputB!=target.結束時間 || inputD != target.Instagram記錄連結 || inputE != target.備註 ) {
    console.log("11111st Layerrrrrrrrrrrrrrrrrrrrrrrrrrrr")
    //30062020,0900,1157
    // console.log("111111111111111111111111111111111111111111")
    // console.log(inputA)
    // console.log(target.開始時間)
    // console.log("111111111111111111111111111111111111111111")

    // console.log("222222222222222222222222222222222222222222")
    // console.log(inputB)
    // console.log(target.結束時間)
    // console.log("222222222222222222222222222222222222222222")

    // console.log("333333333333333333333333333333333333333333")
    // console.log(igLink)
    // console.log(target.Instagram記錄連結)
    // console.log("333333333333333333333333333333333333333333")

    // console.log("444444444444444444444444444444444444444444")
    // console.log(remake)
    // console.log(target.備註)
    // console.log("444444444444444444444444444444444444444444")



    
    if(inputA!=target.開始時間 && inputB!=target.結束時間){
      console.log("2222222rd Layerrrrrrrrrrrrrrrrrrrrrrrrrrrr")
      startTime = inputA.split("T")[0].split("-").join("/") + " " + inputA.split("T")[1] + ":00";
      console.log(inputA)
      endTime = inputB.split("T")[0].split("-").join("/") + " " + inputB.split("T")[1] + ":00";
      console.log(endTime)
      total = totalTime(inputA, inputB)
    }
    else{
      console.log("eeeeeeeeeeeeeeeeeeerd Layerrrrrrrrrrrrrrrrrrrrrrrrrrrr")
      startTime = target.開始時間
      endTime = target.結束時間
      total = target.總行程時間
    }
    
    
    igLink= inputD;
    remake=inputE;
  
    

  

  return (dispatch)=>{
    dispatch(updateLoading())
    return axios.put(url,{startTime, endTime, total, igLink, remake, target})
    .then((resp)=>{
      console.log(resp.data)
      
      if(resp.data.respFromReps){
        console.log("I cant do this all day !")
        console.log(target.id)
        dispatch(action.getSpecificDate(target.id, target.路線, target.路線所屬公司))
        
      }
      
      
      
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