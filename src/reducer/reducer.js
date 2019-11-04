import * as typeForAction from '../action/type'
import * as XLSX from 'xlsx';

let data = []; 

const initstate = {
    excel:[
      
    ],
    realObj:[

    ],
    croods:{

    }
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
      return{
        ...state,
        croods: payload
      }

      default:
        return state
  }
}
