import * as cssType from "./cssType"


export function cssActiveHandle(){
    return{
      type: cssType.CSS_ACTIVE_HABDLE,
    }
  }



export function closeButton(){
  return {
    type: cssType.CLOSE_BUTTON_HANDLE,
  }
}


export function loading(){
  return {
    type: cssType.HANDLE_LOADING_SCREEN,
  }
}