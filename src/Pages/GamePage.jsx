import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../Components/Timer";
import CongratulationsModal from "../Modals/CongratulationsModal";
import TimeUpModal from "../Modals/TimeUpModal";
import WrongAnswerModal from "../Modals/WrongAnswerModal";
import BgImg from "../assets/Images/splash-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import GameContext from "../Context/GameContext";
import { submitGamePlay } from "../api/apiService";

const GamePage = () => {
  const [timer, setTimer] = useState(10);
  const [userInput, setUserInput] = useState([]);
  const isInputComplete = userInput.every((letter) => letter !== "");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [answerStatus, setAnswerStatus] = useState("");
  const [scoreLoaded, setScoreLoaded] = useState(false);

  const {
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    gameOver,
    setGameOver,
    handleAnswer,
    handleNextQuestion,
    isLoading,
    setIsLoading,

    msisdn,
    submissionStatus,
    handleSubmitGame,
  } = useContext(GameContext);

  const [showHint, setShowHint] = useState(false);
  const [timeUsed, setTimeUsed] = useState(0);

  const [alphabet, setAlphabet] = useState(
    "DEFABCGHIJKLMNOPQRSTUVWXYZ".split("")
  );
  const navigate = useNavigate();

  const shuffleAlphabet = () => {
    const shuffled = [...alphabet].sort(() => Math.random() - 0.5);
    setAlphabet(shuffled);
  };

  // useEffect(() => {
  //   if (timer > 0) {
  //     const timerInterval = setInterval(
  //       () => setTimer((prev) => prev - 1),
  //       1000
  //     );
  //     return () => clearInterval(timerInterval);
  //   }

  //   if (timer === 0 && !gameOver) {
  //     setGameOver(true);
  //     setModalType("timeup");
  //     setModalVisible(true);
  //     setScore((prevScore) => prevScore);
  //   }
  // }, [timer, gameOver]);

  useEffect(() => {
    if (timer > 0 && !gameOver) {
      const timerInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
        setTimeUsed((prevTimeUsed) => prevTimeUsed + 1); // Increment timeUsed only if the timer is active
      }, 1000);
  
      return () => clearInterval(timerInterval); // Clean up interval on unmount
    }
  
    if (timer === 0 && !gameOver) {
      setGameOver(true);
      setModalType("timeup");
      setModalVisible(true);
      setScore((prevScore) => prevScore); // Ensure the score doesn't change here
    }
  }, [timer, gameOver]);
  
  
  

  useEffect(() => {
    if (
      submitted &&
      modalType === "congratulations" &&
      !isLoading &&
      score !== undefined
    ) {
      setModalVisible(true);
    }
  }, [submitted, modalType, isLoading, score]);

  useEffect(() => {
    setUserInput(Array(currentQuestion?.text.length).fill(""));
  }, [currentQuestion]);

  const handleLetterClick = (letter) => {
    const nextEmptyIndex = userInput.findIndex((input) => input === "");
    if (nextEmptyIndex !== -1) {
      const updatedInput = [...userInput];
      updatedInput[nextEmptyIndex] = letter;
      setUserInput(updatedInput);
    }
  };

  const handleInputChange = (index, value) => {
    const updatedInput = [...userInput];
    updatedInput[index] = value.toUpperCase();
    setUserInput(updatedInput);
  };

  const handleClear = () => {
    setUserInput(Array(currentQuestion?.text.length).fill(""));
  };

  const handleHintClick = () => {
    setShowHint((prevShowHint) => !prevShowHint);
  };

  const generateTransactionId = () => {
    return `GAME-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  };

  const handleSubmit = () => {
    if (!gameOver) {
    if (
      userInput.join("").toUpperCase() ===
      currentQuestion.correctAnswer.toUpperCase()
    ) {
      setSubmitted(true);
      setModalType("congratulations");
      setModalVisible(true);
      setGameOver(true);
    } else {
      setModalType("wrongAnswer");
      setModalVisible(true);
      setSubmitted(true);
    }

    const gameData = {
      msisdn,
      questionId: currentQuestion.id,
      submittedAnswer: userInput.join(""),
      isHintUsed: showHint,
      gameDuration: timeUsed,
      transactionId: generateTransactionId(),
    };
    handleSubmitGame(gameData);
  }
  };


  const handlePlayAgain = () => {
    if (gameOver) {
      handleNextQuestion();
    }

    setUserInput(Array(currentQuestion?.text.length).fill(""));
    setTimer(10);
    setGameOver(false);
    setModalVisible(false);
    setScore(0);
    setModalType(null);
    setShowHint(false);
    shuffleAlphabet();
    setSubmitted(false);
    setResetKey((prevKey) => prevKey + 1);
    setTimeUsed(0);
  };

  const handleTimeUp = () => {
    if (!gameOver) {
      setGameOver(true);
      setModalType("timeup");
      setModalVisible(true);
    }
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handleLeaderboard = () => {
    navigate("/leaderboard");
  };

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen text-white"
        style={{
          backgroundImage: `linear-gradient(196.69deg, rgba(3, 8, 55, 0.9) 27.82%, rgba(23, 11, 103, 0.9) 100%), url(${BgImg})`,
          backgroundSize: "cover",
        }}
      >
        {isLoading ? (
          <div className="text-lg font-semibold text-white h-screen flex items-center justify-center">
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              size="3x"
              className="text-white"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            {/* Timer */}
            <div className="flex flex-col items-center justify-center mx-auto mt-4 mb-4 ">
              <FontAwesomeIcon
                icon={faClock}
                className="text-white text-2xl mb-2"
              />

              {/* <Timer timeLeft={timer} /> */}
              <Timer onTimeUp={handleTimeUp} resetKey={resetKey} />
            </div>

            {/* Instruction Text */}
            <p className="font-bold mx-2 font-alien text-center text-[16px] md:text-[16px] leading-[19.2px]  text-white mb-4">
              {currentQuestion?.instruction}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-1 mb-6 mx-auto w-full max-w-[90%] md:max-w-[47%] lg:max-w-[35%]">
              {/* <div className="grid grid-cols-auto-fit gap-1 mb-6 w-full max-w-[90%] mx-auto md:max-w-[47%] lg:max-w-[35%] */}
              {/* <div className="grid grid-cols-auto-fit gap-1 mb-6  mx-auto "> */}
              {currentQuestion?.text.split("").map((letter, index) => (
                <div
                  key={index}
                  className="bg-[#013CAD] text-white text-center font-alien font-bold text-[14px] leading-[16.8px] capitalize px-3 py-2 rounded-[3px] shadow-shadow-4"
                >
                  {letter}
                </div>
              ))}
            </div>

            {/* <div className="flex items-center justify-center gap-1 mb-6">
              {currentQuestion?.text.split("").map((letter, index) => (
                <div
                  key={index}
                  className="bg-purple-900 text-white text-center font-mochiy text-[12px] capitalize  px-3 py-2 rounded-[8px] shadow-shadow-4 border border-orange-400"
                >
                  {letter}
                </div>
              ))}
            </div> */}

            {/* Hint Button */}
            <div className="flex items-center justify-center">
              <button
                onClick={handleHintClick}
                className="px-4 py-2 mb-4 bg-input-background  text-white rounded-md font-alien text-[14px]  transition"
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>
              {showHint && (
                <p className="text-gray-500 font-alien mx-2 mb-4">
                  {currentQuestion.hint}
                </p>
              )}
            </div>

            {/* Keyboard */}
            <div className="mx-3 bg-input-background max-w-full  h-full rounded-[20px] px-5 py-10 md:w-[444px] lg:w-[545px] ">
              <div className="flex flex-col justify-center ">
                <p className="text-white mx-auto font-alien mb-4">Selections</p>

                {/* Word Input Fields */}
                {/* <div className=" flex mx-auto w-1/4 gap-1 mb-4 justify-center">
                  {currentQuestion?.text.split("").map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      value={userInput[index] || ""}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      readOnly={gameOver}
                      className="w-8 md:w-10 h-12 text-center bg-purple-100 border-2 border-black mb-4 rounded-md text-[14px] font-mochiy font-normal"
                    />
                  ))}
                </div> */}
                <div className="flex flex-wrap justify-center items-center gap-1 mb-6 mx-auto w-full max-w-[90%] md:max-w-[47%] lg:max-w-[35%]">
                  {/* <div className="grid grid-cols-auto-fit gap-2 mb-4 mx-auto justify-center items-center w-full max-w-[90%]"> */}
                  {currentQuestion?.text.split("").map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      value={userInput[index] || ""}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      readOnly={gameOver}
                      className="w-10 h-12 text-black bg-white rounded-[3px] shadow-shadow-4 text-[18px] text-center leading-[21.6px] font-alien font-bold hover:border-2 hover:border-[#16D1F9]"
                    />
                  ))}
                </div>

                <div className="grid grid-cols-7  gap-2 mb-4 bg-input-background">
                  {alphabet.map((letter) => (
                    <button
                      key={letter}
                      onClick={() => handleLetterClick(letter)}
                      className="w-10 h-10 bg-[#013CAD]  text-white text-[16px] drop-shadow-lg shadow-lg font-alien font-bold rounded-md hover:bg-[#16D1F9] hover:text-black transition"
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                isInputComplete
                  ? handleSubmit()
                  : setUserInput(Array(currentQuestion?.text.length).fill(""))
              }
              className={`px-4 py-4 my-6 mx-2 w-[90%] md:w-[443px] lg:w-[545px] font-alien text-[14px] rounded-full transition ${
                userInput.every((letter) => letter === "")
                  ? "bg-gray-400 text-white"
                  : isInputComplete
                  ? "bg-btn-background text-white"
                  : "bg-black text-white"
              }`}
            >
              {isInputComplete ? "Submit" : "Clear"}
            </button>

            {modalVisible &&
              (modalType === "congratulations" ? (
                <CongratulationsModal
                  score={score}
                  timeUsed={timeUsed}
                  onPlayAgain={handlePlayAgain}
                  onHome={handleHome}
                  onLeaderboard={handleLeaderboard}
                  isLoading={isLoading}
                />
              ) : modalType === "wrongAnswer" ? (
                <WrongAnswerModal
                  score={score}
                  onPlayAgain={handlePlayAgain}
                  onHome={handleHome}
                  onLeaderboard={handleLeaderboard}
                />
              ) : (
                <TimeUpModal
                  score={score}
                  onPlayAgain={handlePlayAgain}
                  onHome={handleHome}
                  onLeaderboard={handleLeaderboard}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GamePage;
