import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Menu = ({ close, children }) => {
  return ReactDOM.createPortal(
    <div className="menu-scrim">
      <div className={"menu"}>
        {children}
        <Link to="/" className="x" onClick={close}>
          <button> x</button>
        </Link>
      </div>
    </div>,
    document.getElementById("container")
  );
};
export default Menu;
