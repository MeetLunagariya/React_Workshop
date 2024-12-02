import React, { useState } from "react";

function Calculator() {
  const [data, setData] = useState('');

  function inputData(val) {
    setData(data + val);
    console.log(data);
  }

  // function inputoperator(val) {
  //   operator = val;
  //   temp = data;
  //   data = "";
  //   console.log(operator);
  // }

  function outputData() {
    setData(eval(data));
  }

  return (
    <>
      <div className="container flex items-center justify-center h-auto bg-gray-100">
        <table className="table ">
          <thead>
            <tr>
              <th colSpan={4} className="w-full max-w-xs ">
                <input
                  type="text"
                  value={data}
                  className="p-2 h-[50px] w-full bg-cyan-200 rounded from-neutral-500 text-5xl font-semibold text-right"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                  className="btn btn-active btn-primary"
                >
                  7
                </button>
              </td>
              <td>
                <button
                  className="btn btn-active btn-primary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  8
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  9
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  +
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  4
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  5
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  6
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  -
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  1
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  2
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  3
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  *
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button className="btn btn-warning" onClick={()=>{
                  setData('')
                }}>CLr</button>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  0
                </button>
              </td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    inputData(e.target.innerText);
                  }}
                >
                  /
                </button>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={(e) => {
                    outputData();
                  }}
                >
                  =
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Calculator;
