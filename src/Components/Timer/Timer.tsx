
import React from "react";
import "./Timer.css";
  
export default function Timer(props : TimerProps) {
  return (
    <div className="timer">
      <div>
        <span className="digits">
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-1)}
        </span>
        <span className="digits-second">s</span>
      </div>
      <span className="mili-sec">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
}

export declare interface TimerProps {
    time: number;
}