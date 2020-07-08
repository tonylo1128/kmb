import React, { useState } from "react";

function TheOgFileInputComponent(){
    return(
        <div>
            <button
                className="m-2"
                // onClick={() => storeValueToState()}
                variant="outline-light"
            >
                Save
            </button>

            <button
                className="m-2"
                // onClick={() => dispatch(action.callApiForPostData(excel))}
                variant="outline-light"
            >
                Upload
            </button>

            <input
                id="files"
                className="text-light "
                type="file"
                accept=".xlsx, .xls"
                // onChange={event => handleFileInput(event.target.files[0])}
            />
        </div>
    )
}