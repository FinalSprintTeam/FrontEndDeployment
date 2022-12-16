import { Fragment } from "react";
import classes from "./Header.module.css";

const Header = ({ title, button }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{title}</h1>
        {button}
      </header>
      {/* <div className={classes["main-image"]}>
        <img
          src="https://source.unsplash.com/WHf1wtNMMLU/1920x1340"
          alt="picture of a gofl ball and pin"
        />
      </div> */}
    </Fragment>
  );
};

export default Header;
