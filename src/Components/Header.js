import "../index.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <NavLink to="/home" className="link">
        קופה ראשית
      </NavLink>
      <NavLink to="/revenges" className="link">
        נקמות
      </NavLink>
      <NavLink to="/sentences" className="link">
        משפטים
      </NavLink>
      <NavLink to="/characters" className="link">
        דמות
      </NavLink>
    </div>
  );
};

export default Header;
