import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Faculty() {
  const [data, setdata] = useState({});
  const { id } = useParams();
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
      <div
        key={data.Faculty_Id}
        style={{ boxShadow: "10px 10px 15px rgba(0,0,0,0.5)" }}
        className="card card-compact bg-base-100 w-80 shadow-xl m-6"
      >
        <div>
          <img
            src={data.Faculty_Image}
            alt={data.Faculty_Name}
            className="rounded-2xl h-60"
          />
        </div>
        <div className="card-body  text-white">
          <h2 className="card-title">Name : {data.Faculty_Name}</h2>
          <h3 className="card-title">Disciption : {data.Faculty_Disc}</h3>

          <h4 className="card-title">Subject : {data.Subject}</h4>

          <div className="card-actions flex justify-between ">
            {/* Back Button */}
            <button className="btn btn-secondary hover:text-white">
              Back
            </button>

            {/* Edit and Delete Buttons */}
            <div className="flex space-x-2">
              <button className="btn btn-primary hover:btn-info hover:text-white">
                Edit
              </button>
              <button className="btn bg-red-600 hover:bg-red-500 hover:border-none text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faculty;
