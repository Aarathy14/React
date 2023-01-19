import React, { useState } from "react";

function Usestate() {
  const [color, Setcolor] = useState("pink");
  const [food, Setfood] = useState("Curd rice");
  const [name, Setname] = useState("aarathy");
  const [year, Setyear] = useState("2000");
  const [month, Setmonth] = useState("11");
  const [day, Setday] = useState("14");
  return (
    <div>
      <div>
        <h5> my favorite color is {color}</h5>
        <button onClick={() => Setcolor("blue")}>color</button>
      </div>
      <div>
        <h5>my favorite food is {food}</h5>
        <button onClick={() => Setfood("Biriyani")}>Food</button>
      </div>

      <div>
        my name is {name} i was born {year} /{month}/{day}
      </div>
    </div>
  );
}

export default Usestate;

// color is a State Setcolor is update
