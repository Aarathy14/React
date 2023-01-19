import React, { useState } from "react";

function Usestateadd() {
  const [first, Setfirst] = useState(0);
  const [second, Setsecond] = useState(0);
  const [total, Settotal] = useState(0);

  return (
    <div>
      <input placeholder="add" onChange={(e) => Setfirst(e.target.value)} />

      <input placeholder="add" onChange={(e) => Setsecond(e.target.value)} />
      <button onClick={() => Settotal(parseInt(first) + parseInt(second))}>
        Add
      </button>
      <button onClick={() => Settotal(parseInt(first) - parseInt(second))}>
        Sub
      </button>
      <button onClick={() => Settotal(parseInt(first) * parseInt(second))}>
        Mul
      </button>
      <button onClick={() => Settotal(parseInt(first) % parseInt(second))}>
        div
      </button>
      <h1>{total}</h1>
    </div>
  );
}

export default Usestateadd;
