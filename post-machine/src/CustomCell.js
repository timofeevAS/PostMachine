import React from "react";

const CustomCell = ({ value, onClickHandle, onContextHandle }) => {
  return (
    <div   
      style={{
        position: "relative",
        width: "30px",
        height: "30px",
        border: "1px solid #000",
        borderColor: value.cursor ? "red" : "black",
        backgroundColor: value.cursor ? "lightgray" : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "5px",
        cursor: "pointer",  
        userSelect:"none"
      }}
      onContextMenu={(event)=>{
        event.preventDefault();
        onContextHandle(value.index)
      }}
      onClick={() => {
        onClickHandle(value.index)
      }}
      >
     
     <div
        style={{
        fontSize: "12px",
        position: "absolute",
        top: "-15px",
        }}>
        {value.index}
      </div>

      
      {value.cell === 0 ? "" : "V"}
      {value.cursor &&
      <div
      style={{
      fontSize: "12px",
      position: "absolute",
      bottom: "-12px",
      }}>
      ▲
    </div> 
      }  


    </div>
    
  );
};

export default CustomCell;