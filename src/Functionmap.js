import React, { useState } from "react";
import "./Functionmap.css";
function Functionmap() {
  const [array, setArray] = useState([]);
  const [obj, setObj] = useState({ color: "", first: "", last: "" });
  const handleSubmit = () => {
    let result = array.concat(obj);
    setArray(result);
    setObj({ color: "", first: "", last: "" });
  };
  const handleEdit = (data, index) => {
    console.log(data, index);
    setObj({ ...obj, color: data.color, first: data.first, last: data.last });
  };
  return (
    <div>
      <label>Color</label>
      <input
        value={obj.color}
        onChange={(e) => setObj({ ...obj, color: e.target.value })}
      ></input>
      <label>First</label>
      <input
        value={obj.first}
        onChange={(e) => setObj({ ...obj, first: e.target.value })}
      ></input>
      <label>Last</label>
      <input
        value={obj.last}
        onChange={(e) => setObj({ ...obj, last: e.target.value })}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
      {array.map((data, index) => (
        <div>
          {/* <div>{data.color}</div>
    <div>{data.first}</div>
    <div>{data.last}</div> */}

          {/* <tr> <td>{data.color}</td>  </tr>
   <tr> <td>{data.first}</td></tr> 
   <tr><td>{data.last}</td></tr>  */}
          <table className="table">
            <tr>
              <th>{data.color}</th>
              <th>{data.first}</th>
              <th>{data.last}</th>
              <button onClick={() => handleEdit(data, index)}>Edit</button>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Functionmap;
