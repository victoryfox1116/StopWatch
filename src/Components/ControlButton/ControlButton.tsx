
import React from "react";
import "./ControlButton.css";
  
export default function ControlButtons(props : ControlButtonProps) {
  const StartButton = (
    <div className="btn btn-one btn-start"
         onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="d-flex">
      <div className="btn btn-two" 
           onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div className="btn-grp">
        <div>{props.active ? ActiveButtons : StartButton}</div>
      </div>
    </div>
  );
}


export declare interface ControlButtonProps {
  handleStart : () => void;
  handleReset : () => void;
  handlePauseResume : () => void;
  isPaused : boolean;
  active: boolean;
}