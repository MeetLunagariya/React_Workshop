import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Faculty() {
  const [data, setdata] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = `https://66b488099f9169621ea359d1.mockapi.io/Recipe/${id}`;
  useEffect(() => {
    return () => {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => setdata(res));
    };
  }, []);
  return (
    <>
      <div className="flex">
        <div
          key={data.Faculty_Id}
          style={{ boxShadow: "10px 10px 15px rgba(0,0,0,0.5)" }}
          className="card card-compact bg-base-100 w-80 shadow-xl m-6"
        >
          <div>
            <img
              src={data.Faculty_Image}
              alt={data.Faculty_Name}
              className="rounded-2xl h-60 p-1"
            />
          </div>
          <div className="card-body  text-white">
            <h2 className="card-title">Name : {data.Faculty_Name}</h2>
            <h3 className="card-title">Disciption : {data.Faculty_Disc}</h3>

            <h4 className="card-title">Subject : {data.Subject}</h4>

            <div className="card-actions flex justify-between ">
              <Link
                to="/dashboard/mockApi"
                className="btn btn-secondary hover:text-white"
              >
                Back
              </Link>

              <div className="flex space-x-2">
                <button className="btn btn-primary hover:text-white">
                  Edit
                </button>
                <button
                  className="btn btn-warning text-white"
                  onClick={() => {
                    fetch(`${URL}`, {
                      method: "DELETE",
                    }).then(() => {
                      alert("Faculty deleted successfully");
                      navigate("/dashboard/mockApi");
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center ">
          <table>
            <tr>
              <td>
                <label htmlFor="">Enter Faculty Name :</label>
              </td>
              <td>
                <input
                  type="text"
                  className="m-2 text-sm font-medium text-gray-700 bg-transparent border border-black w-full"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Enter Discription :</label>
              </td>
              <td>
                <input
                  type="text"
                  className="m-2 text-sm font-medium text-gray-700 bg-transparent border border-black w-full"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Enter Subject :</label>
              </td>
              <td>
                <input
                  type="text"
                  className="m-2 block text-sm font-medium px-4 py-2 text-gray-700 bg-transparent border border-black w-full"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label
                  for="file-input"
                  className=""
                >
                  Upload an Image :
                </label>
              </td>
              <td>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  className="block w-full max-w-xs px-4 py-2 text-sm text-gray-700 border border-black rounded-lg cursor-pointer bg-white hover:bg-gray-50 focus:outline-none focus:ring-2"
                />
              </td>

              <p class="mt-2 text-xs text-gray-500">
                Only image files are allowed.
              </p>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Faculty;
