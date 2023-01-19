import React, { useState } from "react";
import MyTag from "./Table";

function Education(props) {
  const [input, setInput] = useState({
    Name: "Aarathy",
    Gender: "Female",
    Number: 234567890,
    City: "Chennai",
  });
  const [add, setAdd] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState();
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(e.target.value, "valueeeeeee");
    console.log({ ...input, [e.target.name]: e.target.value }, "name");
  };
  const handleAdd = () => {
    if (edit === true) {
      add[index] = input;
      setAdd(add);
      setEdit(false);
      setInput({ Name: "", Gender: "", Number: "", City: "" });
    } else {
      setAdd(add.concat(input));
      console.log(add.concat(input), "inputtttttttt");
      setInput({ Name: "", Gender: "", Number: "", City: "" });
    }
  };
  const handleEdit = (i) => {
    console.log(i, "index");

    setInput(add[i]);
    setEdit(true);
    setIndex(i);
  };
  const handleDelete = (i) => {
    console.log(i, "index");
    let val = add.filter(function (value, index) {
      return index !== i;
    });
    setAdd(val);
  };
  return (
    <div>
      <label>Name</label>
      <input value={input.Name} name="Name" onChange={handleInput}></input>
      <label>Gender</label>
      <input value={input.Gender} name="Gender" onChange={handleInput}></input>
      <label>Number</label>
      <input value={input.Number} name="Number" onChange={handleInput}></input>
      <label>City</label>
      <input value={input.City} name="City" onChange={handleInput}></input>
      <button onClick={handleAdd}>Add</button>

      <table class="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Number</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {add.map((data, i) => (
            <>
              <MyTag
                dataTable={data}
                index={i}
                // Edit={2}
                Edit={handleEdit}
                Deleted={handleDelete}
              />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Education;

// 1, props
// 2. router
// 3 . useEffect
