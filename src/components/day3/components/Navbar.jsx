import React from "react";

function Navbar() {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      <a role="tab" className="tab">
        Tab 1
      </a>
      <a
        role="tab"
        className="tab tab-active text-primary [--tab-bg:yellow] [--tab-border-color:orange]"
      >
        Tab 2
      </a>
      <a role="tab" className="tab">
        Tab 3
      </a>
    </div>
  );
}

export default Navbar;
