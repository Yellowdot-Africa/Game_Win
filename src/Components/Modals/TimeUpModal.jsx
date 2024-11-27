import React from "react";

const TimeUpModal = ({ score, onPlayAgain, onHome, onLeaderboard }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white px-6 py-10 rounded-lg shadow-lg max-w-sm w-full  mx-4">
        <h2 className=" font-bold text-center mb-4 text-[12px] font-mochiy">
          Time's Up!
        </h2>
        <p className="text-center mb-6 text-[12px] font-mochiy">
          Your score: {score} points
        </p>
        <div className="flex flex-col justify-center ">
          <button
            onClick={onPlayAgain}
            className="px-4 py-3.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[12px] font-mochiy rounded-full transition"
          >
            Play Again
          </button>
          <button
            onClick={onHome}
            className="px-4 py-3.5 border border-purple-800 text-[12px] font-mochiy text-purple-800 rounded-full transition mt-3"
          >
            Home
          </button>
          <button
            onClick={onLeaderboard}
            className="px-4 py-2  text-purple-800 text-[12px] font-mochiy rounded-full transition"
          >
            Check Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeUpModal;



// import React, { useState, useEffect } from "react";

// const Timer = ({ onTimeUp, resetKey }) => {
//   const [time, setTime] = useState(20); 
//   const [isTimeUp, setIsTimeUp] = useState(false);

//   useEffect(() => {
//     // Reset the timer when resetKey changes
//     setTime(20);
//     setIsTimeUp(false);
//   }, [resetKey]);

//   useEffect(() => {
//     // Log the time every time it changes
//     console.log("Time:", time);

//     if (time === 0 && !isTimeUp) {
//       // Trigger onTimeUp only when time hits exactly 0
//       setIsTimeUp(true);
//       if (onTimeUp) onTimeUp(); // Call the provided callback
//       return;
//     }

//     if (time > 0) {
//       const timerId = setInterval(() => {
//         setTime((prevTime) => Math.max(prevTime - 1, 0)); // Prevent negative time
//       }, 1000);

//       return () => clearInterval(timerId); // Cleanup interval
//     }
//   }, [time, isTimeUp, onTimeUp]);

//   // Format the time as mm:ss
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

//   return <div className="text-center text-xl font-bold">{formattedTime}</div>;
// };

// export default Timer;



// import React, { useState, useEffect } from "react";

// const Timer = ({ onTimeUp, resetKey }) => {
//   const [time, setTime] = useState(""); 
//   const [isTimeUp, setIsTimeUp] = useState(false);

//   useEffect(() => {
//     // Reset the timer when resetKey changes
//     setTime(20);
//     setIsTimeUp(false);
//   }, [resetKey]);

//   useEffect(() => {
//     if (time === 0) {
//       // Trigger onTimeUp only when time hits exactly 0
//       if (!isTimeUp) {
//         setIsTimeUp(true);
//         if (onTimeUp) onTimeUp(); // Call the provided callback
//       }
//       return;
//     }

//     const timerId = setInterval(() => {
//       setTime((prevTime) => Math.max(prevTime - 1, 0)); // Prevent negative time
//     }, 1000);

//     return () => clearInterval(timerId); // Cleanup interval
//   }, [time, isTimeUp, onTimeUp]);

//   // Format the time as mm:ss
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

//   return <div className="text-center text-xl font-bold">{formattedTime}</div>;
// };

// export default Timer;
