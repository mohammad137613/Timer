import './Timer.css'
import React from 'react'
import { useEffect, useState, useRef } from 'react'

const Timer = () =>{

  const finishedElement = useRef();

  const [hour1, setHour1] = useState(0)
  const [hour2, setHour2] = useState(0)

  const [minute1, setMinute1] = useState(0)
  const [minute2, setMinute2] = useState(1)

  const [second1, setSecond1] = useState(1)
  const [second2, setSecond2] = useState(0)

  const [count, setCount] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
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
  }, [count])

  useEffect(()=>{
    if (finished){
      finishedElement.current.className='finished'
    }
    
  }, [finished])

  return(
    <div className='container'>
      <div className="title">
        Developed By Muhammad Abdinian
      </div>
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

      <div ref={finishedElement} className='not-finished'>
        Time Has Finished!
      </div>
    </div>
  )
}

export default Timer;