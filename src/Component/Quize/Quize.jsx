import React, { useEffect, useState } from 'react'
import "./Quize.css"
import questionData from "./question.json"
import Webcam from "react-webcam";


const Quize = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [timer, setTimer] = useState(30);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);



  // const handleAnswerClick = (selectedOption) => {
  //   if (selectedOption === questionData[currentQuestion].correctOption) {
  //     setScore((prevScore) => prevScore + 1)
  //   }
  //   if (currentQuestion < questionData.length - 1) {
  //     setCurrentQuestion((prevQuestion) =>
  //       prevQuestion + 1);
  //     setTimer(30);
  //   }
  //   else {
  //     setShowScore(true);

  //   }
  // };


  const handleAnswerClick = (option) => {
    if (!isCorrect) {
      setSelectedOption(option);
      setIsCorrect(true);

      if (option === questionData[currentQuestion].correctOption) {
        setScore((prevScore) => prevScore + 1);
      }

      setTimeout(() => {
        if (currentQuestion < questionData.length - 1) {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
          setTimer(30);
          setSelectedOption(null);
          setIsCorrect(false);
        } else {
          setShowScore(true);
        }
      }, 1000);
    }
  };

  const handleRestartQuize = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(30);
    setSelectedOption(null);
    setIsCorrect(null)
  };

  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    else {
      clearInterval(interval)
      setShowScore(true)
    }
    return () => clearInterval(interval)

  }, [timer, showScore])


  return (
    <div className='quiz-main'>
      <div className='webcame'>
        <Webcam
          height={450}
          width={400}
        />
      </div>
      <div className='quize-app'>
        {showScore ? (
          <div className='score-section'>
            <h2>your score : {score}/{questionData.length}</h2>
            <button onClick={handleRestartQuize}>Restart</button>
          </div>
        ) : (
          <div className='question-section'>
            <h2>Question {currentQuestion + 1}</h2>
            <p> {questionData[currentQuestion].question}</p>

            {/* <div className='options'>
              {questionData[currentQuestion].option?.map((option, index) => {
                return (<button key={index} onClick={() => handleAnswerClick(option)} className='ans-button'>  {option}</button>)
              })}
            </div> */}

            <div className="options">
              {questionData[currentQuestion].option?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={`ans-button ${selectedOption === option
                      ? option === questionData[currentQuestion].correctOption
                        ? 'correct'
                        : 'wrong'
                      : ''
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className='timer'>Time Left:
              <span>{timer}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quize
