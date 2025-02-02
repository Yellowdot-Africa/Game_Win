import React from "react";

const WrongAnswerModal = ({ score, onPlayAgain, onHome, onLeaderboard }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white px-6 py-10 rounded-lg shadow-lg max-w-sm w-full  mx-4">
        <h2 className=" font-bold text-center mb-4 text-[12px] font-mochiy">
          Oops! Wrong answer selected.
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

export default WrongAnswerModal;
