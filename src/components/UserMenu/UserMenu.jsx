import { NavLink } from "react-router-dom";
import { apiLogout } from "../../redux/auth/operations";
import { selectUserData } from "../../redux/auth/selectors";
import { getNavLinkClassName } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <>
      <div className={css.userMenuContainer}>
        <span>Welcome, {userData.name}!</span>
        <button className={css.userMenuBtn} onClick={onLogout} type="button">
          Logout
        </button>
      </div>
    </>
  );
};

export default UserMenu;
