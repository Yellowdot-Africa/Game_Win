import React, { useState, useEffect, useRef } from "react";

const Timer = ({ onTimeUp, resetKey }) => {
  const [displayedTime, setDisplayedTime] = useState(10);
  const internalTime = useRef(10); // This trracks time without causing re-renders
  const timerRef = useRef(null); // This stores the interval ID

  const startTimer = () => {
    if (timerRef.current) return; // this prevent multiple intervals
    timerRef.current = setInterval(() => {
      if (internalTime.current > 0) {
        internalTime.current -= 1; // this update internal time
        setDisplayedTime(internalTime.current); // this update UI
      } else {
        clearInterval(timerRef.current); // this stop timer
        timerRef.current = null;
        onTimeUp(); // this triggers time is up
      }
    }, 1000);
  };

  useEffect(() => {
    // Reset and start timer when `resetKey` changes
    clearInterval(timerRef.current); // Clear any existing interval
    timerRef.current = null;
    internalTime.current = 10; // Reset internal time
    setDisplayedTime(10); // Reset displayed time
    startTimer(); // Start the timer

    // Cleanup on unmount
    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [resetKey]); // Only reset when the resetKey changes

  return (
    <div className="text-center text-xl font-alien font-bold">
      {displayedTime}:00
    </div>
  );
};

export default Timer;
