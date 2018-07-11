import React from "react";
import { FormControl } from "@material-ui/core";

class FileUpload extends React.Component {
  render() {
    return (
      <FormControl className="FileUpload">
        <div className="FileUploadInner">
          <div className="FileUploadLabel">Выбрать файл</div>
          <input type="file" />
        </div>
      </FormControl>
    );
  }
}

export default FileUpload;
