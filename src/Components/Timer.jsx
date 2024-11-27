import React, { useState, useEffect } from "react";

const Timer = ({ onTimeUp, resetKey }) => {
  const [time, setTime] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    setTime(15);
    setIsTimeUp(false);
  }, [resetKey]);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime === 0) {
            clearInterval(timerId);
            if (!isTimeUp) {
              setIsTimeUp(true);
              onTimeUp();
            }
          }
          return Math.max(newTime, 0);
        });
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [time, isTimeUp, onTimeUp]);

  const minutes = Math.floor(time / 30);
  const seconds = time % 30;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return <div className="text-center text-xl font-bold">{formattedTime}</div>;
};

export default Timer;



