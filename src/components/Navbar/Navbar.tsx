import React from "react";
import "./Navbar.scss";

interface Props {
  navbarItems: string[];
  selectedPage: string;
  handleChangePage: (currPage: string) => void;
}
const Navbar: React.FC<Props> = ({
  navbarItems: items,
  selectedPage,
  handleChangePage,
}) => {
  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        {items.map((item) => {
          return (
            <div
              style={selectedPage === item ? { border: "4px solid purple" } : {}}
              onClick={() => handleChangePage(item)}
              key={item}
              className="navbar-item"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
