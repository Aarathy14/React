import React, { useState } from "react";

function Addcount() {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [add, setAdd] = useState();
const handleFirst=(e)=>{
setFirst( parseInt (e.target.value))
}
const handleSecond =(e)=>{
    setSecond( parseInt (e.target.value))

}
const handleAdd =()=>{
    // console.log(first, second ,"sxdcfghjkl");
setAdd (first+ second) 
}
  return (
    <div>
      <input onChange={handleFirst}></input>
      <input onChange={handleSecond}></input>
      <button onClick={handleAdd}>Submit</button>
      <h1>{add}</h1>
    </div>
  );
}

export default Addcount;
