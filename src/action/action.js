import * as type from "./type"
import * as XLSX from 'xlsx';



export function handleFileInput(inputTemp){
    console.log("---------------------")
    console.log(inputTemp)
    console.log("---------------------")
    let data = []; 
    const fileReader = new FileReader();
    
    fileReader.onload = event => {
        try {
          const { result } = event.target;
          const workbook = XLSX.read(result, { type: 'binary' });
          let data = []; 
          for (const sheet in workbook.Sheets) {
            if (workbook.Sheets.hasOwnProperty(sheet)) {
              data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
              
            }
          }
          console.log(data);
        } catch (e) {
          console.log('文件类型不正确');
          return;
        }
      };
      fileReader.readAsBinaryString(inputTemp);

    return {
      type: type.HANDLE_EXCELFILE_INPUT,
      payload: inputTemp
    };
  }
  
