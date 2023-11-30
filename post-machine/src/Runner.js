import React, { useState, useEffect } from "react";
import CodeWriter from "./CodeWriter";
import { Button } from "react-bootstrap";

const Runner = ({codeHandle,commandIndex}) => {
  const [textCode,setTextCode] = useState("")

  useEffect(()=>{
    console.log(getInitTape(textCode),`initTape`)
    console.log(getCommands(textCode),`commands`)  
  },[textCode])

  const buildCode = () => {
    const toExecute = 
    {
      initTape:getInitTape(textCode),
      commands:getCommands(textCode),      
    }
    
   

    codeHandle(toExecute)
    

    
    
  }



  const getCommands = (lines) => {
    {/* Recognizing commands */}
    return checkCorrect(preProcessing(lines));
  }

  const getInitTape = (lines) => {
    {/* Recognizing initial tape if command init */}
    const splittedLines = lines.split("\n")
    
    console.log('lines:',splittedLines)
    var initTape = []
    if(splittedLines[0].startsWith("init(")){
      initTape = splittedLines[0].slice(5,splittedLines[0].length-1).split(',');
    }
    
    return initTape

  }

  const preProcessing = (lines) => {
    {/* Utils function to recognize commands */}
    const splittedLines = lines.split("\n")
    

    var processed = [] 
    lines.split("\n").forEach(command => {
      processed.push(command.split("#")[0].trimEnd())
    });
    return processed
  }

  const checkCorrect = (commands) => {
    const regex = /^((V|X|>|<|)\s+\d+)|(\?\s+\d+;\s*\d+)|(!)$/

    var readyCommands = []

    commands.forEach(command => {
      
      console.log(`${command}  ${regex.test(command)}`)
      if(regex.test(command)){
        readyCommands.push(command)
      }
    });
    return readyCommands
  }


  return (
    <>
      <CodeWriter textCode={textCode} textCodeHandle={(text)=>{setTextCode(text)}} commandIndex={commandIndex} />
      <Button variant="outline-success" style={{margin:"5px"}} onClick={()=>{buildCode()}}>build</Button>{' '}
    </>
  );
};

export default Runner;
