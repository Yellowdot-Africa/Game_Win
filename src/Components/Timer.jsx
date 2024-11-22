import React, { useState, useEffect } from "react";

const Timer = ({ onTimeUp, resetKey }) => {
  const [time, setTime] = useState(15); 
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);


  useEffect(() => {
    setTime(15);
    setIsTimeUp(false);
    setHasAnswered(false);
  }, [resetKey]);

  // useEffect(() => {
  //   if (time <= 0) {
  //     if (onTimeUp) onTimeUp();
  //     return;
  //   }

  useEffect(() => {
    if (time <= 0) {
      // Ensure the onTimeUp callback is triggered when the timer reaches 0
      if (!isTimeUp && !hasAnswered) {
        setIsTimeUp(true); // Prevent repeated onTimeUp calls
        if (onTimeUp) onTimeUp();
      }
      return;
    }

    const timerId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [time,isTimeUp, onTimeUp, hasAnswered]);




  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return <div className="text-center text-xl font-bold">{formattedTime}</div>;

};

export default Timer;




