// import React from "react";
// import { useState } from "react";

// function Arraydata() {
//   const data = ["pink", "blue", "black", "red"];
//   return (
//     <div>
//       {data.map((user) => (
//         <div>{user}</div>
//       ))}
//     </div>
//   );
// }

// export default Arraydata;


import React, { useState } from 'react'

function Arraydata() {
  function handleChange (event){
setName(event.target.value)
  }

  const [name ,setName]=useState("")
  return (
    <div>
      <label>name</label>
      <input placeholder='name'
      onChange={(event)=>handleChange(event)}
      ></input>
      <h1>{name}</h1>
    </div>
  )
}

export default Arraydata
