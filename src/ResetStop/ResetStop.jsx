import './ResetStop.css'
import React from 'react'


const ResetStop = ({started, stopped, handleStop, handleStart})=>{

  return(
    <div  className='reset-stop'>
        <div className='reset-div'>
        {started? <button onClick={()=>{window.location.reload()}}>Reset</button>:
        <button onClick={handleStart}>Start</button>
        }
        </div>

        {started? 
        <div className='stop-div'>
        <button onClick={handleStop}>{stopped? 'Resume':'Stop'}</button>
        </div>:""}
        
      </div>
  )
}

export default ResetStop