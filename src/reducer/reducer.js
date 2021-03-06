import * as typeForAction from "../action/type";
import * as XLSX from "xlsx";

let data = [];
let startTime = [];
let final = [];
let finalObj = {};

const initstate = {
  excel: [
    {
      testing: "testing",
    },
  ],
  realObj: [],
  croods: [],
  handleBusRouteInputValue: "",
  temp: [],
  tempForRoute: "",
  tempForTime: [],
  selectedBoundWithDetails: [],
  searchInput: "",
  searchResult: [],
  igOauthReturnHtml: [],
  // detailContent: false,
  featherContent: {},
  
};

export default function (state = initstate, { type, payload }) {
  switch (type) {
    case typeForAction.CALL_API_GET_DATA:
      console.log("Here is the get api function and the payload");
      console.log(payload);
      console.log("Here is the get api function and the payload");
      return {
        ...state,
        realObj: [...state.realObj, ...payload],
      };

    case typeForAction.HANDLE_EXCELFILE_INPUT:
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA");
      console.log(payload);

      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        try {
          const { result } = event.target;
          const workbook = XLSX.read(result, { type: "binary" });
          // let data = [];

          // Get the whole sheet and put it in to "data"
          for (const sheet in workbook.Sheets) {
            if (workbook.Sheets.hasOwnProperty(sheet)) {
              //{raw: false} format related(helps to get the date)
              data = data.concat(
                XLSX.utils.sheet_to_json(workbook.Sheets[sheet], { raw: false })
              );
            }
          }

          console.log(
            "Data = data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));"
          );
          console.log(data);
        } catch (e) {
          console.log("This is not a excel file");
          return;
        }
      };

      fileReader.readAsBinaryString(payload);
      return {
        ...state,
        excel: data,
      };

    case typeForAction.HANDLE_FILE_INPUT_DDVERSION:
      console.log("WE ARE IN CASE HANDLE_FILE_INPUT_DDVERSION");

      let dataFormExcel = [];

      function readFileFunciton(input) {
        const fileReader2 = new FileReader();

        return new Promise((resolve, reject) => {
          fileReader2.onload = (event) => {
            const { result } = event.target;
            const workbook = XLSX.read(result, { type: "binary" });
            // let data = [];

            // Get the whole sheet and put it in to "data"
            for (const sheet in workbook.Sheets) {
              if (workbook.Sheets.hasOwnProperty(sheet)) {
                //{raw: false} format related(helps to get the date)
                dataFormExcel = data.concat(
                  XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
                    raw: false,
                  })
                );
              }
            }

            console.log( "Data = data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));" );
            console.log(dataFormExcel)
            resolve(dataFormExcel);
          };

          fileReader2.readAsBinaryString(input);
        });
      }

      async function processFile(payloadInput) {
        try {
          let result = await readFileFunciton(payloadInput);
          return result

          
        } catch (error) {
          console.log(error);
        }
      }

      
      
      return {
        ...state,
        excel: processFile(payload),
      };
      

    case typeForAction.STORE_VALUE_TO_STATA:
      console.log("HHHHHHHHHHHHHHHHHHHHHHHH");
      console.log(initstate.excel);
      console.log(data);
      console.log("HHHHHHHHHHHHHHHHHHHHHHHH");
      return {
        ...state,
        excel: data,
      };

    case typeForAction.SET_CROODS:
      console.log("We are inside the SET_CROODS reducer");
      console.log(payload);
      console.log(payload.coords.latitude);
      console.log(payload.coords.longitude);

      return {
        ...state,
        croods: payload,
      };

    case typeForAction.HANDLE_BUST_ROUTE_INPUT:
      return {
        ...state,
        handleBusRouteInputValue: payload,
      };

    case typeForAction.CALLBACK_FOR_API_GET_BOUND:
      console.log("Here is the payload:");
      console.log(payload);
      return {
        ...state,
        temp: payload,
      };
    case typeForAction.CALLBACK_FOR_API_ROUTE_DATA:
      console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBB");
      console.log(payload);
      console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBB");
      return {
        ...state,
        tempForRoute: payload.response,
        selectedBoundWithDetails: payload,
      };

    case typeForAction.CALLBACK_FOR_GET_TIME:
      let indexZeroTime = [];
      payload.map((item, index) => {
        item.response.map((item, index) => {
          if (index == 0) {
            indexZeroTime.push(item.t);
          }
        });
      });

      console.log("This is what i am doing now");
      console.log(indexZeroTime);

      return {
        ...state,
        tempForTime: indexZeroTime,
      };

    case typeForAction.CLEAR_ROUTE_DATA:
      console.log("Testing for CLEAR_ROUTE_DATA");
      return {
        ...state,
        tempForRoute: payload,
      };

    //This is local seraching ! ! !
    // case typeForAction.SEARCH_INPUT_FUNCTION:
    //   console.log("the serch fun is working !!!! ")
    //   const temp = payload.busDataCheck;
    //   const tempResult =[];
    //   if(temp != null){
    //     for(let i=0; i<temp.length; i++  ){

    //       let t = Object.values(temp[i])
    //       t.map((item, index)=>{
    //         if(item == payload.inputSearchValue){
    //           console.log("FIND A MATCH ! AND IT IS !")
    //           console.log("If esle find this : " + item+ index)
    //           console.log(t)
    //           tempResult.push(t)
    //         }
    //       })
    //     }
    //   }

    //   return {
    //     ...state,
    //     searchInput : payload,
    //     searchResult: tempResult
    //   }

    //This is server side searching
    case typeForAction.SERVER_SIDE_SEARCHING:
      console.warn(
        "We are in reducer and this is seraching function Here is the payload"
      );
      console.log(payload);
      console.log("AND NOW REALOBJ ISSSSSSSSSSSSSS:  !!!!!!!!!");
      console.log(state.realObj);
      return {
        ...state,
        searchResult: payload.returnResp,
        searchInput: payload.inputValue,
      };

    case typeForAction.SHOW_DETAIL_CONTENT:
      let newListOfData = state.realObj;

      newListOfData.map((item, index) => {
        if (
          item.id == payload.id &&
          item.路線所屬公司 == payload.路線所屬公司 &&
          item.路線 == payload.路線
        ) {
          newListOfData[index] = payload;
        }
      });

      return {
        ...state,
        // detailContent: !state.detailContent,
        featherContent: payload,
        realObj: newListOfData,
      };

    default:
      return state;
  }
}
