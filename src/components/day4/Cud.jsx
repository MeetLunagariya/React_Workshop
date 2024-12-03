import React, { useState } from "react";

function Cud() {
  const [sub, setSub] = useState({
    Subject_Name: "",
    Faculty_Name: ""
  });
  const [data, setData] = useState([
    { Subject_Name: "sub1", Faculty_Name: "faculty1" },
    { Subject_Name: "sub2", Faculty_Name: "faculty2" },
  ]);
  return (
    <div>
      <table className="table-auto">
        <tr>
          <td>Enter Name of Subject :</td>
          <td>
            <input
              className="bg-transparent border"
              type="text"
              value={sub.Subject_Name}
              onChange={(e) => {
                setSub({...sub,  Subject_Name: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Name of Faculty :</td>
          <td>
            <input
              className="bg-transparent border"
              type="text"
              value={sub.Faculty_Name}
              onChange={(e) => {
                setSub({...sub, Faculty_Name: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button
              className="btn btn-primary align-center"
              onClick={() => {
                setData([...data, sub]);
                setSub({ Subject_Name: "", Faculty_Name: "" });
              }}
            >
              Add
            </button>
          </td>
        </tr>
      </table>
      <table className="table-auto m-4">
        {data.map((e, index) => {
          return (
            <tr key={index}>
              <td className="p-3">{e.Subject_Name}</td>
              <td className="p-3">{e.Faculty_Name}</td>
              <td>
                <button
                  className="btn bg-red-400 text-rose-50 hover:bg-red-200 m-2"
                  onClick={() => {
                    data.splice(index, 1);
                    console.log(sub);
                    setData([...data]);
                  }}
                >
                  Dlt
                </button>
              </td>
              <td>
                <button
                  className="btn bg-purple-500 text-rose-50 hover:bg-purple-200"
                  onClick={() => {
                    sub.splice(index, 1);
                    console.log(sub);
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
