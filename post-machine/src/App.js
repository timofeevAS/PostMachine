import React, { useState, useEffect } from "react";
import CustomCell from "./CustomCell";
import CodeWriter from "./CodeWriter";
import { Button } from "react-bootstrap";
import Runner from "./Runner";
import {ITE, V, X} from "./Commands"

const App = () => {
  const [tape, setTape] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [allCommands, setAllCommands] = useState({commands:null})
  const [commandIndex, setCommandIndex] = useState(0);


  useEffect(() => {
    const initTape = Array(30).fill(0);
    setTape(initTape);
  }, []);


  useEffect(() => {
    console.log('tape effect: ',tape)
  },[tape])

  useEffect(() => {
    console.log('command index effect: ',commandIndex)
  },[commandIndex])

  const getCommand = () => {
    const splittedCommand = allCommands.commands[commandIndex].split(" ");
    var args = splittedCommand.slice(1,splittedCommand.length)
    if(args.length > 1){
      const removeSemicolons = (inputString) => {
        return inputString.replace(/;/g, '');
      }
      const argsWithoutSemicolons = args.map((arg) => removeSemicolons(arg));
      args = argsWithoutSemicolons
      console.log(args);
    }
    const argsDigits = args.map((arg)=>parseInt(arg,10));

    return {
      instruction:splittedCommand[0],
      args:argsDigits,
    }
  }
      

  const doCommandAndUpdateTape = async (futureCommandIdx) => {
      const currentCommand = getCommand()
      const instruction = currentCommand.instruction

      console.log(`command index: ${commandIndex}, cursor:${cursor}`);
      console.log(`getCommand:`,getCommand());

      if (instruction === 'V') {
        V(tape, cursor, setTape);
      } else if (instruction === '>') {
        setCursor(prevCursor => prevCursor + 1);
      } else if (instruction === 'X') {
        X(tape, cursor, setTape);
      } else if (instruction === '<') {
        setCursor(prevCursor => prevCursor - 1);
      } else if (instruction === '?') {
        console.log(currentCommand);
      }

      setCommandIndex(futureCommandIdx);
  };

  const nextStep = () => {
    const currentCommand = getCommand(); // Get current command
    console.log(currentCommand);
    var futureCommandIdx = currentCommand.args.length === 1 ? currentCommand.args[0] : (tape[cursor] ? currentCommand.args[0] : currentCommand.args[1])
    doCommandAndUpdateTape(futureCommandIdx-1);
  };



  const changeCellValue = (index) =>{
    setTape((prevTape) => 
    prevTape.map((cell, i) => (i === index ? (cell ? 0 : 1) : cell))
  );  
  }

  const setCellValue = (index,value) =>{
    setTape((prevTape) => 
    prevTape.map((cell, i) => (i === index ? (value ? 1 : 0) : cell))
  );  
  }

  const setTapeFromCode = (newTape) => {
    const updatedTape = newTape.map(cell => String(cell).toLowerCase() === 'v' ? 1 : 0);
    setTape(updatedTape);
  };

  const generateEnvCode = (env) => {
    console.log("env",env)
    if(!env) return

    if(env.initTape.length != 0){
      setTapeFromCode(env.initTape)
      setAllCommands({commands:[null,...env.commands]})
      setCommandIndex(1)
    }
    setAllCommands({commands:env.commands})
    
  }


  return (
    <>
      <h1>Post machine</h1>
      <div style={{ display: "flex" }}>
        {tape.slice(0,Math.min(tape.length,30)).map((cell, index) => (
          <CustomCell key={index} value={{cell:cell,cursor:index===cursor,index:index}} index={index} onClickHandle={(index)=>{changeCellValue(index)}} />
        ))}
      </div>
      <Runner codeHandle={(env) => {generateEnvCode(env)}} commandIndex={commandIndex}/>
      {allCommands.commands && (
        <>
          <Button variant="outline-warning" style={{ margin: "5px" }} onClick={() => { nextStep(); }}>
            step
          </Button>
          <Button variant="outline-danger" style={{ margin: "5px" }} onClick={() => { setCursor(0);setCommandIndex(0) }}>
            reset
          </Button>
        </>
      )}
      {commandIndex && (
        <>
        <div>{commandIndex+1}</div>
        </>
      )}
      </>
  );
};

export default App;
