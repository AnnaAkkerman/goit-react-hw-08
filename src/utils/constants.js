import clsx from "clsx";
import css from "../App.module.css";

export const FORM_INITIAL_VALUES = {
  userEmail: "",
  userName: "",
};

export const MIN_CHAR_NAME_VALIDATION = 1;

export const MAX_CHAR_NAME_VALIDATION = 38;
export const MIN_CHAR_PASSWORD_VALIDATION = 7;

export const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });
