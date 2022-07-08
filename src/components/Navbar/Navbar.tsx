import React from "react";
import "./Navbar.scss";

interface Props {
  navbarItems: string[];
  handleChangePage: (currPage: string) => void;
}
const Navbar: React.FC<Props> = ({ navbarItems: items, handleChangePage }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        {items.map((item) => (
          <div
            onClick={() => handleChangePage(item)}
            key={item}
            className="navbar-item"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
