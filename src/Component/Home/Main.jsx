import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import "./main.css"
import { Link } from 'react-router-dom'


const Main = () => {
  return (
    <div className='start-buttons'>
      <div className='welcome'>
        <h1> Welcome back Quiz exam<br/>
            Daily Quiz Daily
        </h1>
        <ul className='instruction'>
          <li> <CheckIcon/>Duration: You have a total of 30 minutes to complete this test.</li>
          <li><CheckIcon/>Number of Questions: The test consists of 10 questions, with a total score of 10 points.</li>
          <li><CheckIcon/>Question Format: Questions may be multiple-choice or short-answer.</li>
          <li><CheckIcon/>No Negative Marking: There is no penalty for incorrect answers.</li>
          <li><CheckIcon/>Time Management: Each question is worth 1 point. Ensure you answer all questions within the time limit.</li>
        </ul>
      </div>
      <div className='text'>
        <h2> Lets start the  Quize Test </h2>
        <Link to='/quiz'>
        <button className='button-style' >
          start test
        </button>
      </Link>
      </div>
    </div>
  )
}

export default Main
