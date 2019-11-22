import * as typeForAction from '../action/type'
import * as XLSX from 'xlsx';

let data = []; 

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
    tempForRoute:[

    ],
    tempForTime:[],
    selectedItem:[]
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
              for (const sheet in workbook.Sheets) {
                if (workbook.Sheets.hasOwnProperty(sheet)) {
                  data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                  
                }
              }
              console.log(data);
            } catch (e) {
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
          selectedItem: payload

        }
      
      case typeForAction.CALLBACK_FOR_GET_TIME:
        console.log("HEREHEREHEREHEREHEREHERE is the paylaod")

        console.log(payload.inputC)


        console.log("THISTHISTHISTHISTHISTHIST is the state")
        console.log(state.tempForTime)
        

        let indexZeroTime = "";
        payload.apiData.map((item, index)=>{
          if(index===0){
            console.log(item.t)
            indexZeroTime =  item.t;
          }
        })

        let temp = payload.inputC;

        temp.map((item, index)=>{
          if (index == payload.selectedItem){
            console.log("FIND A MATCH")
            temp[index] = indexZeroTime
          }
        })

        console.log("FKFKFKFKFKFKFKFKFKFKFKFK_________________")
        console.log(temp)
        console.log("FKFKFKFKFKFKFKFKFKFKFKFK_________________")

        console.log(payload.inputC)

        return {
          ...state,
          tempForTime: payload.inputC
        }
      default:
        return state
  }
}
