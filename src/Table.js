import React from "react";

function Table(props) {
  console.log(props.dataTable);
  return (
    <>
      <tr>
        <td>{props.dataTable.Name}</td>
        <td>{props.dataTable.Gender}</td>
        <td>{props.dataTable.Number}</td>
        <td>{props.dataTable.City}</td>
        <td>
          <button onClick={() => props.Edit(props.index)}>Edit</button>
        </td>
        <td>
          <button onClick={() => props.Deleted(props.index)}> Delete</button>
        </td>
      </tr>
    </>
  );
}

export default Table;
