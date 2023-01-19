import React,{useState} from 'react'

function Addcount() {
    const [num,setNum]=useState()
    const[iseven,setIseven]=useState(false)
    const handleSumbit=(e)=>{
console.log(e.target.value)
 // to change string to number // find the num odd are even // if odd make setIsevenfalse else setIfeven true
setNum(e.target.value)
console.log(num,"num")
  if(num %4 == 0){
    
    setIseven (true)
    console.log("even")
 }
 else{
    setIseven(false)
    console.log("odd")
 }
    }
  return (
    <div>
        <input value={num} onChange={handleSumbit}></input>
      <h1>{num}</h1>
      <h1>{iseven ? "even" :"odd"}</h1>
    </div>
  )
}

export default Addcount