import React from 'react'

function QuizResult(props) {
  return (
    <>
    {/* <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div> */}
    <h1 style={{marginTop:"100px",justifyContent:'center'}}>Do You Want TYo Submit your quiz</h1>
    <button id="next-button"style={{width:"120px",height:"80px",marginBottom:"90px",justifyContent:'center'}} onClick={props.tryAgain}>Submit</button>
    </>
  )
}

export default QuizResult