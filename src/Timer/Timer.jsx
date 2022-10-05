import './Timer.css'
import React from 'react'
import { useEffect, useState, useRef } from 'react'
import MyTimer from '../MyTimer/MyTimer'
import SetTimer from '../SetTimer/SetTimer'
import Footer from '../Footer/Footer'
import ResetStop from '../ResetStop/ResetStop'
import Header from '../Header/Header'


const Timer = () =>{

  const [hour1, setHour1] = useState(0)
  const [hour2, setHour2] = useState(0)

  const [minute1, setMinute1] = useState(0)
  const [minute2, setMinute2] = useState(0)

  const [second1, setSecond1] = useState(0)
  const [second2, setSecond2] = useState(0)

  const [started, setStarted] = useState(false)

  const [stopped, setStopped] = useState(false)

  const [finished, setFinished] = useState(false)

  const [min1Input, setMin1Input]=useState(0)
  const [min2Input, setMin2Input]=useState(0)
  const [sec1Input, setSec1Input]=useState(0)
  const [sec2Input, setSec2Input]=useState(0)
  const [hour1Input, setHour1Input]=useState(0)
  const [hour2Input, setHour2Input]=useState(0)


  const handleStop = ()=>{
    setStopped(!stopped)
  }

  

  const handleStart = ()=>{
    if(hour1Input !== null){setHour1(hour1Input)} 
    if(hour2Input !== null){setHour2(hour2Input)} 
    if(min1Input !== null){setMinute1(min1Input)} 
    if(min2Input !== null){setMinute2(min2Input)} 
    if(sec1Input !== null){setSecond1(sec1Input)} 
    if(sec2Input !== null){setSecond2(sec2Input)} 
    
    setStarted(!started)
  }

 

  const times = {
    "setHour1":setHour1,
    "setHour2":setHour2,
    "setMinute1":setMinute1,
    "setMinute2":setMinute2,
    "setSecond1":setSecond1,
    "setSecond2":setSecond2,
    "hour1":hour1,
    "hour2":hour2,
    "minute1":minute1,
    "minute2":minute2,
    "second1":second1,
    "second2":second2,
    "setMin1Input":setMin1Input,
    "setMin2Input":setMin2Input,
    "setSec1Input":setSec1Input,
    "setSec2Input":setSec2Input,
    "setHour1Input":setHour1Input,
    "setHour2Input":setHour2Input
  }

  return(
    <div className='container'>
      <Header finished={finished} started={started}/>
      
      {started? < MyTimer times={times} setFinished={setFinished} stopped={stopped} started={started} finished={finished} /> : 
      <SetTimer times={times} handleStart={handleStart}/>}
      
      <ResetStop started={started} stopped={stopped} handleStop={handleStop} handleStart={handleStart}/>
      
      <Footer />
      
    </div>
  )
}

export default Timer;