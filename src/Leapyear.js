import React, { useState } from 'react'

function Leapyear() {
    const[leapyear,setLeapyear]=useState()
    const[num,setNum]=useState()
    const handleLeapyear =(e)=>{
        setNum(e.target.value) // we are setting the year usng setnum
if(num %4==0){
    setLeapyear(true)
    console.log("leap")
}
else{
    setLeapyear(false)
    console.log("not leap")
}
    }
  return (
    <div>
        <label>Leapyear</label>
        <input  onChange={handleLeapyear}></input>
        <h1>{leapyear ? "leap":"notleap"}</h1>
    </div>
  )
}

export default Leapyear