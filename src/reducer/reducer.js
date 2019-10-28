import * as type from "../action/type";

const initState = {
    excel:[{
      
    }],
    test:"1"
};

export default function(state = initState, { action, payload }) {

  switch (type) {
    case type.HANDLE_EXCELFILE_INPUT:
      return {
          ...state,
          excel:payload
      };

    default:
      return state;
  }
}
