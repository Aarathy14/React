import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    age: null,
    mobilenumber: null,
  });
  const { firstname, lastname, age, mobilenumber } = data;
  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value, "event log");
    setData({ ...data, [name]: value });
  };
  console.log(data);
  return (
    <div>
      <input
        maxLength={6}
        className="style-name"
        name="firstname"
        value={firstname}
        onChange={handleChange}
      />
      <input name="lastname" value={lastname} onChange={handleChange} />
      <input name="age" value={age} onChange={handleChange} />
      <input name="mobilenumber" value={mobilenumber} onChange={handleChange} />
    </div>
  );
}
