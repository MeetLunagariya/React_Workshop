import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({ UserName: "", Password: "" });
  const navigate = useNavigate();
  const URL = "http://localhost:3000/login";

  return (
    <div className="w-screen flex items-center justify-center bg-black h-screen">
      <div className="border-2 border-emerald-600 rounded-xl p-20 bg-green-600">
        <table className="flex flex-col items-center justify-center">
          <tr>
            <input
              value={data.UserName}
              onChange={(e) => {
                setData({ ...data, UserName: e.target.value });
              }}
              className="required border-2 outline-none bg-white placeholder:text-grey-400 border-emerald-600 py-3 text-xl px-5 m-3 rounded-full text-black"
              type="Text"
              placeholder="Enter your Name : "
            />
          </tr>
          <tr>
            <input
              value={data.Password}
              onChange={(e) => {
                setData({ ...data, Password: e.target.value });
              }}
              className="required border-2 outline-none m-3 bg-white placeholder:text-grey-400 border-emerald-600 py-3 text-xl px-5 text-black rounded-full"
              type="password"
              placeholder="Enter Password : "
            />
          </tr>
          <tr>
            <button
              className="btn bg-green-500 border text-white py-3 m-3 text-xl px-5 rounded-full text-center"
              onClick={(e) => {
                fetch(`http://localhost:3000/login`, {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: { "Content-Type": "application/json" },
                })
                  .then((res) => res.json())
                  .then((res) => {
                    if (res.success) {
                      navigate("/dashboard");
                    } else {
                      alert("Enter Valid USerName or Password.");
                    }
                  });
              }}
            >
              Log In
            </button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Login;
