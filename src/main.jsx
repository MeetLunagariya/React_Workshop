import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Table_data_1 from "./components/day1/table_data_1";
import Card_data_1 from "./components/day1/Card_data_1";
import Calculator from "./components/day2/Calculator";
import "./index.css";
import Header from "./components/day3/components/Header";
import Navbar from "./components/day3/components/Navbar";
import Right from "./components/day3/components/Right";
import Footer from "./components/day3/components/Footer";
import Layout_1 from "./components/day3/Layout_1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/day3/components/Body";
import Cud from "./components/day4/Cud";
import Crud_API from "./components/day5/Crud_API";
import Faculty from "./components/day5/Faculty";
import Login from "./components/Crud_API/Login";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/* <Table_data_1 /> */}
      {/* <Card_data_1/> */}
      {/* <Calculator/> */}
      {/* <h1 className="text-8xl font-bold underlin text-red-400">Hello world!</h1> */}
      {/* <Header/> */}
      {/* <Navbar/> */}
      {/* <Right/> */}
      {/* <Footer/> */}
      {/* <Layout_1/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
            <Route path="/dashboard" element={<Layout_1 />}>
              <Route index element={<Body />} />
              <Route path="/dashboard/Calc" element={<Calculator />} />
              <Route path="/dashboard/Crud" element={<Cud />} />
              <Route path="/dashboard/mockApi" element={<Crud_API />} />
              <Route path="/dashboard/faculty/:id" element={<Faculty />} />
            </Route>
          
          {/* <Login/> */}
        </Routes>
      </BrowserRouter>
    </>
  </StrictMode>
);
