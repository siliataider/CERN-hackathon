import React, {useState} from 'react';
import { lastLevel, fieldPoints } from "../utils/tests"
import {useNavigate} from 'react-router-dom';

import "../styled/LastLevelPopUp.css"

const LastLevelPopUp = ({ setShowPopUp }) => {
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(lastLevel.questions.length).fill(""));
    const [showResult, setShowResult] = useState(false);
  
    const handleAnswerSelect = (questionIndex, choiceValue) => {
        setSelectedAnswers((prevAnswers) => {
          const updatedAnswers = [...prevAnswers];
          updatedAnswers[questionIndex] = choiceValue;
          return updatedAnswers;
        });
      };

    const calculateScore = () =>{
        const fieldPoint = fieldPoints[selectedAnswers[0]];
        const point2 = fieldPoints[selectedAnswers[1]];
        const score = fieldPoint * point2 /100
        const roundedScore = score.toFixed(2);
        return roundedScore

    }
  
    const handleNext = () => {
      setPage((prevPage) => prevPage + 1);
    };
  
    const handleCloseResult = () => {
      setShowResult(false);
      setPage(4); // Move to the fourth page after seeing the result
    };
  
    const handleFinishGame = () => {
      setShowPopUp(false);
      navigate("/end");
      // TODO change here?
    };
  
    return (
      <div className="pop-up-last">
        {page === 1 && (
          <div className='popup-last-1'>
            <h1>{lastLevel.questionsTitle}</h1>
            <p>{lastLevel.definition[0]}</p>
            <p>{lastLevel.definition[1]}</p>
            <div className="button-wrapper">
              <button type="button" onClick={() => setShowPopUp(false)}>Close</button>
              <button type="button" onClick={handleNext}>Next</button>
            </div>
          </div>
        )}
  
        {page === 2 && (
        <div className='popup-last-2'>
            <h1>{lastLevel.questionsTitle}</h1>
            <form>
            {lastLevel.questions.map((questionData, questionIndex) => (
                <div key={questionIndex}>
                <p>{questionData.question}</p>
                {questionData.choices.map((choice, choiceIndex) => (
                    <label key={choiceIndex}>
                    <input
                        type="radio"
                        name={`question-${questionIndex}`}
                        value={choice}
                        checked={selectedAnswers[questionIndex] === choice}
                        onChange={() => handleAnswerSelect(questionIndex, choice)}
                    />
                    {choice}
                    </label>
                ))}
                </div>
            ))}
            </form>
            <div className="button-wrapper">
            <button type="button" onClick={handleNext}>See Result</button>
            </div>
        </div>
        )}

  
        {page === 3 && (
          <div className="result-popup">
          <h2>Quiz Result</h2>    
          <h1>Your chances of winning a Nobel Prize in Physics is {calculateScore()}%</h1>
          {
            Object.keys(fieldPoints).map(key => fieldPoints[key] ? <div key={key}>{key}: {fieldPoints[key]}%</div> : <></>)
          }
          <div className="button-wrapper">
            <button type="button" onClick={handleCloseResult}>Next</button>
          </div>
        </div>
        )}
  
        {page === 4 && (
        <div className='popup-last-4'>
            <h1>Fun Facts</h1>
            {lastLevel.funFacts.map((fact, index) => (
            <p key={index}>{fact}</p>
            ))}
            <div className="button-wrapper">
            <button type="button" onClick={handleFinishGame}>Finish Game</button>
            </div>
        </div>
        )}

      </div>
    );
  };
  
  export default LastLevelPopUp;