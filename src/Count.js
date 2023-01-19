// import React, { useState } from "react";

// function Count() {
//   const [count, Setcount] = useState(0);
//   console.log(count);
//   const [total, Settotal] = useState(0);
//   console.log(total);
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => Setcount(count + parseInt(total))}>
//         Increment
//       </button>
//       <button onClick={() => Setcount(count - 1)} disabled={count === 0}>
//         Dncrement
//       </button>
//       <button onClick={() => Setcount(count === 0)} disabled={count === 0}>
//         reset
//       </button>
//       <input
//         placeholder="Count"
//         type={"number"}
//         onChange={(e) => Settotal(e.target.value)}></input>
//       <h1>{total}</h1>
//     </div>
//   );
// }

// export default Count;
import React, { useState } from "react";

function Count() {
  const [data, setDate] = useState({ firstname: "", lastname: "" });
  const { firstname,lastname } = data;
  const handleChange = ({ target: { name, value } }) => {
    setDate({ ...data, [name]: value });
  };
  return (
    <div>
      <input name="firstname" value={firstname} onChange={handleChange}></input>
      <input name="lastname" value={lastname} onChange={handleChange}></input>

      <label>
        {data.firstname}
        {data.lastname}
      </label>
    </div>
  );
}

export default Count;
