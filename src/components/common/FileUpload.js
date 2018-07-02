import React from "react";
import { FormControl } from "@material-ui/core";

class FileUpload extends React.Component {
  render() {
    return (
      <FormControl className="file-upload">
        <div className="file-upload-inner">
          <div className="file-upload-label">Выбрать файл</div>
          <input type="file" />
        </div>
      </FormControl>
    );
  }
}

export default FileUpload;
