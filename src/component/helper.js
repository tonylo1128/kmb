
export function filterFun(data, filter){
    
}

export function handleScroll (event){
    let domElement = event.target;

    console.log("target.scrollHeight:");
    let scrollHeightValue = domElement.scrollHeight
    console.log(scrollHeightValue);
    console.log("target.scrollTop:");
    console.log(domElement.scrollTop);
    console.log("target.clientHeight:");
    console.log(domElement.clientHeight);


    if (domElement.scrollHeight - domElement.scrollTop === domElement.clientHeight){
      console.log("I am at the bottom ! ")
    }
  }