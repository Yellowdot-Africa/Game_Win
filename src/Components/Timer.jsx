import React, { useState, useEffect } from "react";

const Timer = ({ onTimeUp, resetKey }) => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    setTime(10); // Reset to 10 seconds whenever resetKey changes
  }, [resetKey]);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime === 0) {
            clearInterval(timerId);
            onTimeUp(); // Trigger onTimeUp when timer reaches 0
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [time, onTimeUp]);

  return (
    <div className="text-center text-xl font-alien font-bold">{time}:00</div>
  );
};

export default Timer;
