import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const InstructionModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleGotItClick = () => {
    onClose();
    navigate("/game-play");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#070E3C] rounded-[20px] border border-[#16D1F9] shadow-box-shadow p-6 max-w-md mx-4 text-center">
        <div className="md:w-5/6 mx-auto text-center relative">
          <p className="my-3 text-center text-[16px] font-alien font-normal leading-[19.2px]">
            Below are the game play conditions{" "}
          </p>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-3 text-left">
              <FontAwesomeIcon
                icon={faHandsHelping}
                className="text-white w-5 h-5"
              />

              <p className="font-alien text-[#EEEEEE] font-normal text-[12px] leading-[14.4px]">
                Find the letters of the text{" "}
                <span className="font-alien font-bold text-[12px] leading-[14.4px]">
                  <span>"</span>WORD<span>"</span>
                </span>{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 text-left">
              <FontAwesomeIcon
                icon={faHandsHelping}
                className="text-white w-5 h-5"
              />

              <p className="font-alien text-[#EEEEEE] font-normal text-[12px] leading-[14.4px]">
                Type them out in the order <b>LEFT</b> to <b>Right</b>
              </p>
            </div>
            <div className="flex items-center gap-3 text-left">
              <FontAwesomeIcon
                icon={faHandsHelping}
                className="text-white w-5 h-5"
              />

              <p className="font-alien text-[#EEEEEE] font-normal text-[12px] leading-[14.4px]">
                Get it done as <b>Quickly</b> as <b>Possible</b>{" "}
              </p>
            </div>
          </div>
          <button
            onClick={handleGotItClick}
            className="bg-btn-background w-full text-[14px] font-alien font-bold leading-[16.8px] text-center text-white px-4 py-4 rounded-[24px] my-8"
          >
            Continue
          </button>
          <button
            onClick={onClose}
            className=" font-alien font-bold leading-[16.8px] text-center text-[14px]"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
