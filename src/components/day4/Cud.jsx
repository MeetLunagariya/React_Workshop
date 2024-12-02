import React, { useState } from "react";

function Cud() {
  const [sub, setSub] = useState(["sub1", "sub2"]);
  const [data, setData] = useState("");
  return (
    <div>
      <table className="table-auto">
        <tr>
          <td>Enter Name of Subject :</td>
          <td>
            <input
              className="bg-transparent border"
              type="text"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSub([...sub, data]);
                setData("");
              }}
            >
              Add
            </button>
          </td>
        </tr>
      </table>
      <table className="table-auto">
        {sub.map((e, index) => {
          return (
            <tr key={index}>
              <td>{e}</td>
              <td>
                <button
                  className="btn bg-red-400 text-rose-50 hover:btn-warning"
                  onClick={() => {
                    sub.splice(index, 1);
                    console.log(sub)
                    setSub([...sub]);
                  }}
                >
                  Dlt
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Cud;
