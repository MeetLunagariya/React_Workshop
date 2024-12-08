import React from "react";
import Header from "./components/Header";
import Content_1 from "./components/Content_1";
import Content_2 from "./components/Content_2";
import Right from "./components/Right";
import Left from "./components/Left";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";

function Layout_1() {
  return (
    <div className="flex flex-col  min-h-screen">
      <div className="h-auto">
        <Header />
      </div>

      <div className="flex-grow flex h-full">
        <Outlet/>
      </div>

      <div className="h-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Layout_1;
