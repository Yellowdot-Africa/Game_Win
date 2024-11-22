import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const InstructionModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleGotItClick = () => {
    onClose();
    navigate("/game");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md mx-4 text-center">
        <div className="md:w-5/6 mx-auto text-center text-ffgray relative">
          <button
            onClick={onClose}
            className="absolute font-light  right-2 text-2xl"
          >
            X
          </button>

          <h2 className="text-2xl font-normal mb-4">How to Play</h2>
          <p className="my-3 text-center text-sm text-ffgray/70">
            Below are the game play conditions{" "}
          </p>

          <div className="mt-5 space-y-2">
            <div className="flex items-center gap-3 text-left">
              <FontAwesomeIcon
                icon={faHandsHelping}
                className="text-purple-500 w-5 h-5"
              />

              <p>
                Arrange the letters to make the corrrect <b>“WORD”</b>{" "}
              </p>
            </div>
            <div className="flex items-center gap-3 text-left">
              <FontAwesomeIcon
                icon={faHandsHelping}
                className="text-purple-500 w-5 h-5"
              />

              <p>
                Type them out in the order <b>LEFT</b> to <b>Right</b>
              </p>
            </div>
            <div className="flex items-center gap-3 text-left">
              <FontAwesomeIcon
                icon={faHandsHelping}
                className="text-purple-500 w-5 h-5"
              />

              <p>
                Get it done as <b>Quickly</b> as <b>Possible</b>{" "}
              </p>
            </div>
          </div>
          <button
            onClick={handleGotItClick}
            className="bg-gradient-to-r from-purple-500 to-blue-500 w-full text-white px-4 py-2 rounded-full my-8"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
