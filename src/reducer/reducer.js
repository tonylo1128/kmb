import * as typeForAction from '../action/type'
import * as XLSX from 'xlsx';

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
    selectedBoundWithDetails:[],
    searchInput: "",
    searchResult: []
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
              const workbook = XLSX.read(result, { type: 'binary'});
              // let data = []; 

              // Get the whole sheet and put it in to "data"
              for (const sheet in workbook.Sheets) {
                if (workbook.Sheets.hasOwnProperty(sheet)) {
                  //{raw: false} format related(helps to get the date)
                  data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet],{ raw: false }));
                }
              }
            

              console.log("Data = data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));")
              console.log(data);
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

      case typeForAction.SEARCH_INPUT_FUNCTION:
        console.log("the serch fun is working !!!! ")
        const temp = payload.busDataCheck;
        const tempResult =[];
        if(temp != null){
          for(let i=0; i<temp.length; i++  ){
            
            let t = Object.values(temp[i])
            t.map((item, index)=>{
              if(item == payload.inputSearchValue){
                console.log("FIND A MATCH ! AND IT IS !")
                console.log("If esle find this : " + item+ index)
                console.log(t)
                tempResult.push(t)
              }
            })
          }
        }
        return {
          ...state,
          searchInput : payload,
          searchResult: tempResult
        }



      default:
        return state
  }
}
