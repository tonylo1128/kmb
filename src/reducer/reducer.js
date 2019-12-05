import * as typeForAction from '../action/type'
import * as XLSX from 'xlsx';
import { exportDefaultSpecifier } from '@babel/types';

let data = []; 
let startTime =[];
let final =[];
let finalObj ={};

const initstate = {
    excel:[
      
    ],
    realObj:[

    ],
    croods:[


    ],
    handleBusRouteInputValue:"",
    temp:[
      
    ],
    tempForRoute:"",
    tempForTime:[],
    selectedBoundWithDetails:[]
};

export default function (state=initstate, {type, payload} ){
  
  switch(type) {
    case typeForAction.CALL_API_GET_DATA:
      return {
        ...state,
        realObj: payload
      }

    case typeForAction.HANDLE_EXCELFILE_INPUT:
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA")
        console.log(payload)

        const fileReader = new FileReader();
    
        fileReader.onload = event => {
            try {
              const { result } = event.target;
              const workbook = XLSX.read(result, { type: 'binary' });
              // let data = []; 

              // Get the whole sheet and put it in to "data"
              for (const sheet in workbook.Sheets) {
                if (workbook.Sheets.hasOwnProperty(sheet)) {
                  data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                  
                }
              }



              //For the Start time ! ! !~ 
              const sheetNames = workbook.SheetNames; 
              console.log(sheetNames);
              const worksheet = workbook.Sheets[sheetNames[0]];
              
              let range = { s:{c:0, r:1}, e:{c:10, r:199}}

                for(let R = range.s.r; R <= range.e.r; ++R) {
                  for(let C = range.s.c; C <= range.e.c; ++C) {
                    let cell_address = {c:C, r:R};
                    /* if an A1-style address is needed, encode the address */
                    let cell_ref = XLSX.utils.encode_cell(cell_address);
                    console.log(cell_ref);
                    let checkTemp = R+1;
                    
                    let result = worksheet[cell_ref];

                    if(cell_ref=="G"+checkTemp || cell_ref=="H"+checkTemp ||cell_ref=="J"+checkTemp ){

                      if(result){
                        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                        console.log("This is: "+cell_ref)
                        console.log(result.w)
                        startTime.push(result.w)

                      }
                      else{
                        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBB")
                        console.log("This is: "+cell_ref)
                        console.log(result)
                        startTime.push(null)
                      }

                    }
                    else{ 

                      if(result){
                        console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCC")
                        console.log("This is not the COL-G-H-J and result have things")
                        console.log(result)
                        startTime.push(result.w)
                      }
                      else{
                        console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDD")
                        console.log("This is not the COL-G-H-J and result DONTTTTT have things")
                        console.log(result)
                        startTime.push(null)
                        //null
                      }
                    }

                  }
                }

                let checkForMapFun = 0;
                let addressFun = 0;

                let topicOfExcel = {0: "路線所屬公司",
                                  1: "路線",
                                  2: "起點",
                                  3: "方向",
                                  4: "目的地",
                                  5: "完成挑戰",
                                  6: "開始時間",
                                  7: "結束時間",
                                  8: "總行程時間",
                                  9: "Instagram記錄連結",
                                  10: "備註"  						
                                }

                                
                startTime.map((item, index)=>{
                  console.log("TESTING" +index)
                  let temp = topicOfExcel[checkForMapFun]
                  console.log("THIS IS TEMP ARRRRR")
                  console.log(temp)
                  

                  finalObj[temp] = item;

                  

                  console.log(finalObj)
                  final.push(finalObj);
                  checkForMapFun++;
                  if(checkForMapFun ==11){
                    checkForMapFun = 0;
                    addressFun++;
                  }
                })
                



              console.log("Data = data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));")
              console.log(data);
              console.log("--------------")
              console.log(startTime)
            } 

            catch (e) {
              console.log('This is not a excel file');
              return;
            }

          };
          fileReader.readAsBinaryString(payload)
          return{
            ...state,
            excel: data

          }


      


    case typeForAction.STORE_VALUE_TO_STATA:
        console.log("HHHHHHHHHHHHHHHHHHHHHHHH")
        console.log(initstate.excel)
        console.log(data)
        console.log("HHHHHHHHHHHHHHHHHHHHHHHH")
      return {
        ...state,
          excel:data
      };

    case typeForAction.SET_CROODS:
      console.log("We are inside the SET_CROODS reducer")
      console.log(payload);
      console.log(payload.coords.latitude)
      console.log(payload.coords.longitude)

      return{
        ...state,
        croods: payload
      }
    
    case typeForAction.HANDLE_BUST_ROUTE_INPUT:
      return{
        ...state,
        handleBusRouteInputValue: payload
      }

    case typeForAction.CALLBACK_FOR_API_GET_BOUND:
      console.log("Here is the payload:")
      console.log(payload)
      return{
        ...state,
        temp:payload
      }
      case typeForAction.CALLBACK_FOR_API_ROUTE_DATA:
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBB")
        console.log(payload)
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBB")
        return{
          ...state,
          tempForRoute:payload.response,
          selectedBoundWithDetails: payload

        }
      
      case typeForAction.CALLBACK_FOR_GET_TIME:

        let indexZeroTime = [];
        payload.map((item, index)=>{
          item.response.map((item, index)=>{
            if(index == 0){
              indexZeroTime.push(item.t)
            }
            
          })

        })

        
        console.log("This is what i am doing now")
        console.log(indexZeroTime)

        return {
          ...state,
          tempForTime: indexZeroTime
        }

      case typeForAction.CLEAR_ROUTE_DATA:
        console.log("Testing for CLEAR_ROUTE_DATA")
        return{
          ...state,
          tempForRoute: payload
        }
      default:
        return state
  }
}
