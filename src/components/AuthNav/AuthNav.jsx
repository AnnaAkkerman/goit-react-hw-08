import { NavLink } from "react-router-dom";
import { getNavLinkClassName } from "../../utils/constants";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.authContainer}>
      <NavLink className={getNavLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
