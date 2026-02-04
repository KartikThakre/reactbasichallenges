import React, { useEffect, useState } from "react";
import "./CountDown.css";

const CountDown = () => {
  //const [start, setStart] = React.useState(false);
  const [isRunning, setIsRunning] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        clearInterval(timer);
        setIsRunning(false);
        //setStart(false);
        alert("The Timer has been Completed. Please Reset to Start Again.");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const handleStart = () => {
    if (seconds > 0) {
      setIsRunning(true);
      //setStart(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    //setStart(false);
  };

  return (
    <div>
      <h1>CountDownTimer</h1>
      <div className="timer-inputs">
        <label>Set Timer (in Seconds): </label>
        <input
          type="number"
          placeholder="SS"
          min={0}
          className="timer-input"
          value={seconds}
          //? here Number is used to convert string to number as input value is always string
          onChange={(e) => setSeconds(Number(e.target.value))}
        />
        {!isRunning ? (
          <button className="timer-button" onClick={handleStart}>
            Start
          </button>
        ) : (
          <>
            <button
              className="timer-button"
              onClick={handlePause}>
              Pause
            </button>
            <button className="timer-button" onClick={handleReset}>
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CountDown;
