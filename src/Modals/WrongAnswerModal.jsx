import React from "react";

const WrongAnswerModal = ({ score, onPlayAgain, onHome, onLeaderboard }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#070E3C] px-6 py-10 border border-[#16D1F9] rounded-[20px] shadow-box-shadow max-w-sm w-full  mx-4">
        <h2 className=" font-normal leading-[19.2px] text-center mb-4 text-[16px] font-alien">
          Oops! Wrong answer selected.
        </h2>
        <p className="text-center mb-6 leading-[19.88px] text-[14px] font-normal font-alien">
          Your score: {score} points
        </p>

        <div className="flex flex-col justify-center ">
          <button
            onClick={onPlayAgain}
            className="px-4 py-3.5 bg-btn-background text-white leading-[16.8px] text-[14px] font-alien font-bold rounded-[24px] transition"
          >
            Play Again
          </button>
          <button
            onClick={onHome}
            className="px-4 py-3.5 mt-[25px] border border-[#16D1F9] text-[14px] font-bold leading-[16.8px] text-center font-alien text-white rounded-[24px] transition"
          >
            Home
          </button>
          <button
            onClick={onLeaderboard}
            className="px-4 pb-2 pt-6 text-white text-[14px] font-alien font-bold leading-[16.8px] text-center transition"
          >
            Check Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default WrongAnswerModal;
