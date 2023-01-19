import React, { useState } from "react";

function Addage() {
  const [age, setAge] = useState();
  const [egiblie, setEgible] = useState();

  const handleaAge = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
    // console.log(egiblie, "egiblie");
  };
  const handleEgiblie = () => {
    if (age > 18) {
      setEgible(true);
      console.log(true, "allowed");
    } else {
      setEgible(false);
      console.log(false, "notallowed");
    }
  };
  return (
    <div>
      <input value={age} onChange={handleaAge} placeholder="Enterage"></input>
      <button onClick={handleEgiblie}> egiblie</button>
      <h1>{egiblie ? "allowed" : "notallowed"}</h1>
      <h1>{age}</h1>
    </div>
  );
}

export default Addage;
