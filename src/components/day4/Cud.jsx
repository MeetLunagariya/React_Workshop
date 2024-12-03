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
      <table className="table-auto m-4">
        {sub.map((e, index) => {
          return (
            <tr key={index} >
              <td className="p-3">{e}</td>
              <td>
                <button
                  className="btn bg-red-400 text-rose-50 hover:bg-red-200 m-2"
                  onClick={() => {
                    sub.splice(index, 1);
                    console.log(sub)
                    setSub([...sub]);
                  }}
                >
                  Dlt
                </button></td>
                <td>
                <button
                  className="btn bg-purple-500 text-rose-50 hover:bg-purple-200"
                  onClick={() => {
                    sub.splice(index, 1);
                    console.log(sub)
                    setSub([...sub]);
                  }}
                >
                  Update
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
