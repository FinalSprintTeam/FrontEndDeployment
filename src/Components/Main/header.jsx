import { Fragment, useContext } from "react";
import classes from "./css/Header.module.css";
import AuthContext from "../Context/auth-context";
import Border from "../UI/Border";
import Banner from "../UI/Banner";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Welcome to Happy Gilmore Fairway!</h2>
      </header>
    </Fragment>
  );
};

export default Header;
