import './MyTimer.css'
import React from 'react'
import { useState, useEffect } from 'react'
const MyTimer = ({stopped, started, finished, setFinished, times})=>{
   const {setHour1, setHour2, setMinute1, setMinute2, setSecond1, setSecond2,
    hour1, hour2, minute1, minute2, second1, second2} = times
  
    const [timeOutId, setTimeOutId] = useState()


  const [count, setCount] = useState(0)

  
  useEffect(()=>{
    
    if(!stopped){
      let i = setTimeout(()=>{
        
        if(second2 === 0){
          if (second1 === 0){
            if(minute2 === 0){
              if(minute1 === 0){
                if(hour2 === 0){
                  if(hour1 === 0){
                    setFinished(true)
                  }
                  else{
                    setHour1(hour1-1)
                    setMinute2(9)
                    setSecond2(9)
                    setMinute1(5)
                    setSecond1(5)
                  }
                }
                else{
                  setHour2(hour2-1)
                  setMinute2(9)
                  setSecond2(9)
                  setMinute1(5)
                  setSecond1(5)
                }
              }
              else{
                setMinute2(9)
                setSecond2(9)
                setMinute1(minute1-1)
                setSecond1(5)
              }
            }
            else{
              setMinute2(minute2-1)
              setSecond2(9)
              setSecond1(5)
            }
         
          }
          else{
            setSecond2(9)
            setSecond1(second1-1)
          }
  
          
        }
        else{
          setSecond2(second2-1)
        }
        
        setCount(count+1)
      }, 1000)

    setTimeOutId(i)
    }
    else{
      clearTimeout(timeOutId)
    }
    
  }, [count, stopped])
  return(
    <div className='timer'>
        <div className="hours">
          <div className="hours-title">hours</div>
          <div className="hours-numbers">
            <div className={finished?"hour-1 red-digit": "hour-1"}>{hour1}</div>
            <div className={finished?"hour-2 red-digit": "hour-2"}>{hour2}</div>
          </div>
        </div>

        <div className="minutes">
          <div className="minutes-title">minutes</div>
          <div className="minutes-numbers">
            <div className={finished?"minute-1 red-digit": "minute-1"}>{minute1}</div>
            <div className={finished?"minute-2 red-digit": "minute-2"}>{minute2}</div>
          </div> 
        </div>

        <div className="seconds">
          <div className="seconds-title">seconds</div>
          <div className="seconds-numbers">
            <div className={finished?"second-1 red-digit": "second-1"}>{second1}</div>
            <div className={finished?"second-2 red-digit": "second-2"}>{second2}</div>
          </div>
        </div>

      </div>
  )
}

export default MyTimer