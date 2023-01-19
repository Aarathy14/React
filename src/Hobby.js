import React, { useState } from "react";

function Hobby() {
  const [input, setInput] = useState();
  const [hobby, setHobby] = useState(["painting", "guitar"]);
  const handleInput = (e) => {
    setInput(e.target.value); // setting the input state  value from the user
  };
  const handleHobby = () => {
    let result = hobby.concat(input); // using result we are concat the  hobby and input
    setHobby(result); // using sethobby i am passing the result
    setInput(""); // to refresh the input i am using setinput
  };
  return (
    <div>
      <input value={input} onChange={handleInput}></input>
      <button onClick={handleHobby}>Hobby</button>
      {hobby.map((data) => (
        <div>{data}</div>
      ))}
    </div>
  );
}

export default Hobby;
