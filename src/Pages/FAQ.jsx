import React, { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I play the game?",
      answer:
        "You can play the game by clicking the 'Play' button on the main screen.",
    },
    {
      question: "How do I change my nickname?",
      answer: "You can change your nickname from the profile page.",
    },
    {
      question: "How do I view my scores?",
      answer: "You can view your scores on the leaderboard page.",
    },
    {
      question: "What is the grand prize?",
      answer:
        "The grand prize is R1000, which you can win by playing and ranking high.",
    },
    {
        question: "What happens if I click on the Hint button?",
        answer: "When you click on the Hint button during the game, 3 points will be deducted from the score as a penalty for using a hint. Use hints wisely to maximize your score!"


    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-center text-2xl font-bold font-mochiy mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden ${
              activeIndex === index ? "shadow-lg" : "shadow-sm"
            }`}
          >
            <div
              className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-blue-500 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-white text-lg font-mochiy">{item.question}</h2>
              <span className="text-white text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-white text-gray-700 font-mochiy">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
