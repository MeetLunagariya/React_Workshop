import React from "react";
import Right from "./Right";
import Content_1 from "./Content_1";
import Content_2 from "./Content_2";
import Left from "./Left";

function Body() {
  return (
    <div className="flex-grow grid grid-cols-12 gap-1 bg-slate-400">
      <div className="col-span-3 bg-slate-200">
        <Right />
      </div>

      <div className="grid grid-rows-2 gap-2 col-span-6">
        <div className="h-full">
          <Content_1 />
        </div>
        <div className="h-full">
          <Content_2 />
        </div>
      </div>

      <div className="col-span-3 bg-slate-200">
        <Left />
      </div>
    </div>
  );
}

export default Body;
