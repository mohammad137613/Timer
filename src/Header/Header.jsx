import React, { useEffect } from "react"
import './Header.css'

const Header = ({started, finished})=>{

  return(
    <div className={finished?"title finished-title":"title"}>
        {finished? "Time Has Finished!":started?"Timer Started" :"Set Your Timer Here"}
    </div>
  )
}

export default Header