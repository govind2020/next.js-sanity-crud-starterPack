import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between">
        <div className="py-2">
          <span>EcomJ</span>
        </div>
        <div>
          <button className="py-5">Cart</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
