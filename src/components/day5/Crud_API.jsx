import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Crud_API() {
  const URL = `https://66b488099f9169621ea359d1.mockapi.io/Recipe`;
  const [data, setdata] = useState([]);

  useEffect(() => {
    return () => {
      fetch(URL)
        .then((res) => res.json())
        .then((res) => setdata(res));
    };
  }, []);

  return (
    <>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 bg-white">
        {data.map((item, index) => (
          <div
            key={item.Faculty_Id}
            style={{ boxShadow: "10px 10px 15px rgba(0,0,0,0.5)" }}
            className="card card-compact bg-base-100 w-80 shadow-xl m-6"
          >
            <div>
              <img
                src={item.Faculty_Image}
                alt={item.Faculty_Name}
                className="rounded-2xl h-60"
              />
            </div>
            <div className="card-body  text-white">
              <h2 className="card-title">Name : {item.Faculty_Name}</h2>
              <h4 className="card-title">Subject : {item.Subject}</h4>

              <div className="card-actions justify-end">
                <Link
                  to={`/faculty/${item.Faculty_Id}`}
                  className="btn btn-primary hover:btn-info hover:text-white"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="card card-compact bg-base-100 w-80 shadow-xl m-6">
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-2xl h-60"
          />
        </div>
        <div className="card-body  text-white">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Profile</button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Crud_API;
