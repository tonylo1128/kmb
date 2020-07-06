import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../action/action";
import * as cssAction from "../../action/css/cssAction";
import "./DataSetting.scss";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import BusDataUploading from "../Loading/BusDataUploading";

function DataSetting() {
  const dispatch = useDispatch();
  let excel = useSelector((state) => state.reducer.excel);
  let initDataUpload = useSelector((state) => state.cssReducer.initDataUpload);

  return (
    <div className="main-container-ds">
      {initDataUpload ? 
        <BusDataUploading/>:"" 
      }
        <div className="sub-container-ds">
          <h4>Upload your init data here:</h4>

          <div className="data-setting">
            <div className="urlContainer">
              <Dropzone
                // getUploadParams={getUploadParams}
                onChangeStatus={({ meta, file }, status) => {
                  dispatch(action.handleDD({ meta, file }, status));
                }}
                onSubmit={() => {
                  dispatch(action.callApiForPostData(excel));
                }}
                accept="image/*,audio/*,video/*,.xlsx, .xls"
              />
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default DataSetting;
