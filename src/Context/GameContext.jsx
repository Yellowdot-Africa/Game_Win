import React, { createContext, useContext, useState, useEffect } from "react";
import { getGameQuestions, submitGamePlay } from "../api/apiService";
import AuthContext from "../Context/AuthContext";
import SubscriptionContext from "../Context/SubscriptionContext";

const GameContext = createContext();

export const GameProvider = ({ children, count = 10 }) => {
  const [gameQuestions, setGameQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { authData } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const { msisdn } = useContext(SubscriptionContext);

  useEffect(() => {
    if (!msisdn) {
      console.error("MSISDN is not available in SubscriptionContext");
      setIsLoading(false);

      return;
    }
    const fetchQuestions = async () => {
      try {
        setIsLoading(true);
        const response = await getGameQuestions(count, msisdn);
        console.log("user msisdn is ", msisdn);
        if (response.isSuccessful && response.data) {
          setGameQuestions(response.data);
          setCurrentQuestion(response.data[0]);
        } else {
          console.error("Error fetching questions:", response.message);
        }
      } catch (error) {
        console.error("Error fetching game questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [msisdn, count]);

  // const handleAnswer = (userAnswer) => {
  //   const isCorrect = userAnswer.toUpperCase() === currentQuestion.correctAnswer.toUpperCase();
  //   if (isCorrect) setScore(prevScore => prevScore + 100);

  //   handleNextQuestion();
  // };

  const handleAnswer = (userAnswer, hintUsed) => {
    const isCorrect =
      userAnswer.toUpperCase() === currentQuestion.correctAnswer.toUpperCase();

    if (isCorrect) {
      // Optimistic score update based on whether a hint was used
      const pointsToAdd = hintUsed ? 7 : 10; 
      setScore((prevScore) => prevScore + pointsToAdd);
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const currentIndex = gameQuestions.findIndex(
      (q) => q.id === currentQuestion.id
    );
    const nextQuestion = gameQuestions[currentIndex + 1];

    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      setGameOver(true);
    }
  };

  const handleSubmitGame = async (gameData) => {
    setIsLoading(true)
    const response = await submitGamePlay(gameData);
    if (response.isSuccessful) {
      setScore(response.data);
    }
    setSubmissionStatus(response);
    setIsLoading(false);
  };

  return (
    <GameContext.Provider
      value={{
        gameQuestions,
        currentQuestion,
        score,
        setScore,
        gameOver,
        setGameOver,
        handleAnswer,
        handleNextQuestion,
        isLoading,
        setIsLoading,
        submissionStatus,
        handleSubmitGame,
        msisdn,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;





