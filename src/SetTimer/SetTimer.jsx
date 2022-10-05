import React from 'react'
import './SetTimer.css'
import { useState } from 'react'

const SetTimer = ({times})=>{
  
  const {setHour1, setHour2, setMinute1, setMinute2, setSecond1, setSecond2,
    hour1, hour2, minute1, minute2, second1, second2, setMin1Input, setMin2Input,
    setSec2Input, setHour1Input, setHour2Input, setSec1Input} = times
  
  


  const handleChangeInputs = (event, item)=>{
    const value=event.target.value
    switch (item) {
      case "min1":
        setMin1Input(parseInt(value))
        break;
      case "min2":
        setMin2Input(parseInt(value))
        break;
      case "sec1":
        setSec1Input(parseInt(value))
        break;
      case "sec2":
        setSec2Input(parseInt(value))
        break;
      case "hour1":
        setHour1Input(parseInt(value))
        break;
      case "hour2":
        setHour2Input(parseInt(value))
    }
  }


  return(
    <div className='setTimer'>
      <form className='set-form'>

        <div className="set-hours">
          <div className="set-hours-numbers">
            <input onChange={(event)=>{handleChangeInputs(event, 'hour1')}} placeholder='0' type="text" maxLength="1" className='number-input'/>
            <input onChange={(event)=>{handleChangeInputs(event, 'hour2')}} placeholder='0' type="text" maxLength="1" className='number-input'/>
          </div>
          <div className="set-hours-title">hours</div>
        </div>


        <div className="set-minutes">
          <div className="set-minutes-numbers">
            <input onChange={(event)=>{handleChangeInputs(event, 'min1')}} placeholder='0' type="text" maxLength="1"  className='number-input'/>
            <input onChange={(event)=>{handleChangeInputs(event, 'min2')}} placeholder='0' type="text" maxLength="1"  className='number-input'/>
          </div>
          <div className="set-minutes-title">minutes</div>
        </div>


        <div className="set-seconds">
          <div className="set-seconds-numbers">
            <input onChange={(event)=>{handleChangeInputs(event, 'sec1')}} placeholder='0' type="text" maxLength="1" className='number-input'/>
            <input onChange={(event)=>{handleChangeInputs(event, 'sec2')}} placeholder='0' type="text" maxLength="1" className='number-input'/>
          </div>
          <div className="set-seconds-title">seconds</div>
        </div>
      </form>
      

        

        
    </div>
  )
}

export default SetTimer