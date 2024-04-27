import { NavLink } from "react-router-dom";
import css from "../../App.module.css";
import AppBar from "../AppBar/AppBar";
import { getNavLinkClassName } from "../../utils/constants";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <div className={css.navContainer}>
            <NavLink className={getNavLinkClassName} to="/">
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink className={getNavLinkClassName} to="/contacts">
                Contacts
              </NavLink>
            )}
          </div>
          <AppBar />
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
