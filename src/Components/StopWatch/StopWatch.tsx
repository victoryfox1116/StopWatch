import React, { useState, useEffect, useRef } from "react";
import ControlButtons from "../ControlButton";
import Timer from "../Timer";

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const [time, setTime] = useState<number>(0);
  let interval = useRef<number | null>(null);

  useEffect(() => {
    if (isActive && isPause === false) {
      interval.current = window.setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      if (interval.current) {
        window.clearInterval(interval.current);
        setTime(0);
        interval.current = null;
      }
    }
    return () => {
      if (interval.current) {
        window.clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, [isActive, isPause]);

  const handleStart = () => {
    setIsActive(true);
    setIsPause(false);
  };

  const handlePauseResume = () => {
    setIsPause(!isPause);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div>
      <Timer time={time} />
      <ControlButtons
        isActive={isActive}
        isPause={isPause}
        onHandleStart={handleStart}
        onHandlePauseResume={handlePauseResume}
        onHandleReset={handleReset}
      />
    </div>
  );
}

export default StopWatch;
