import { useState } from "react";
import "./index.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const reset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="question-answers">
          {showScore ? (
            <>
              <div className="score">
                Your Score is {score} out of {questions.length}
                <button className="reset" onClick={reset}>
                  Reset
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="questions">
                <h1>
                  Question {currentQuestion + 1}
                  <span>/4</span>
                </h1>
                <h4>{questions[currentQuestion].questionText}</h4>
              </div>
              <div className="answers">
                {questions[currentQuestion].answerOptions.map((opt, i) => (
                  <button
                    className="click"
                    key={i}
                    onClick={() => handleClick(opt.isCorrect)}
                  >
                    {opt.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
