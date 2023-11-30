import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-python"; // some mode

import debounce from 'lodash/debounce'

const CodeWriter = ({ textCode, textCodeHandle,commandIndex }) => {

    const handleChange = debounce((newTextCode) => {
        textCodeHandle(newTextCode);
      }, 500);

  return (
    <AceEditor
      mode="python" 
      theme="monokai" 
      onChange={handleChange}
      value={textCode}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        useWorker: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
      
      style={{ width: "40%", height: "200px",margin:"5px" }}
    />
  );
};

export default CodeWriter;
