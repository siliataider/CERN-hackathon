import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { tests } from '../utils/tests';
import "../styled/TestPopUp.css"
import LastLevelPopUp from './LastLevelPopUp';

const TestPopUp = ({ setShowPopUp, levelNumber }) => {
  const navigate = useNavigate();

  const test = tests[levelNumber];
  const nextLevel = parseInt(levelNumber) + 1
  const totalQuestions = test.length

  const isLastLevel = parseInt(levelNumber) === tests.length-1;

  const [selectedAnswers, setSelectedAnswers] = useState(new Array(totalQuestions).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [submitButtonText, setSubmitButtonText] = useState("Submit")
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleNextLevel= (event) => {
    event.preventDefault();

    setShowPopUp(false);
    setSelectedAnswers(new Array(totalQuestions).fill(-1));
    setSubmitted(false);
    setScore(null);
    setShowCongratulations(false);
    navigate("/game/" + nextLevel)
    };

  const handleAnswerSelect = (questionIndex, choiceIndex) => {
    if (!submitted) {
      setSelectedAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[questionIndex] = choiceIndex;
        return updatedAnswers;
      });
    }
  };

  const handleSubmitTest = (event) => {
    event.preventDefault();
    if(submitButtonText === "Submit"){
      calculateScore();
      setSubmitted(true);
    }else{
      setSelectedAnswers(new Array(totalQuestions).fill(-1));
      setSubmitted(false);
      setScore(null);
      setSubmitButtonText("Submit")
    }
    
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < test.length; i++) {
      if (selectedAnswers[i] === test[i].correctAnswerIndex) {
        score++;
      }
    }
    score = (score / test.length) * 100
    setScore(score);
    if(score !== 100){
      setSubmitButtonText("Try Again")
    }
    else{
      setShowCongratulations(true)
    }
  };


  return (
    <div className="popup" id="test-pop-up">
      {isLastLevel ? (
        <LastLevelPopUp setShowPopUp={setShowPopUp} />
      ) : showCongratulations ? (
        <div className="popup-content-end">
          <h1>Congratulations! You passed Level {levelNumber} 🥳</h1>
          <div className="next-level-button">
            <button onClick={handleNextLevel}>Next Level</button>
          </div>
        </div>
      ) : (
        <div className="popup-content">
          <h1>Level {levelNumber} Test</h1>
          <form onSubmit={handleSubmitTest}>
            {test.map((questionData, questionIndex) => (
              <div key={questionIndex}>
                <p>
                  {questionIndex + 1}. {questionData.question}
                </p>
                {questionData.choices.map((choice, choiceIndex) => (
                  <label key={choiceIndex}>
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      value={choice}
                      checked={selectedAnswers[questionIndex] === choiceIndex}
                      onChange={() => handleAnswerSelect(questionIndex, choiceIndex)}
                      disabled={submitted}
                    />
                    {choice}
                  </label>
                ))}
              </div>
            ))}
            {submitted && <p>Score: {score}/100</p>}
            <div className="button-wrapper">
              <button type="submit" onClick={handleSubmitTest}>
                {submitButtonText}
              </button>
              <button type="button" onClick={() => setShowPopUp(false)}>Close</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
  
};

export default TestPopUp;