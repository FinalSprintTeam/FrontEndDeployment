import { Fragment } from "react";
import classes from "./TournamentDetailsBody.module.css";
import Card from "../../../UI/Card";
import BackGround from "../../../UI/Background";
function TournamentDetailsBody({
  startDate,
  endDate,
  location,
  entryFee,
  name,
}) {
  return (
    <Fragment>
      <h1 className={classes.title}>{name}</h1>

      <div className={classes.grid}>
        <h2>
          {" "}
          <span className={`${classes.badge} ${classes["badge--primary"]}`}>
            {startDate}
          </span>
        </h2>
        <h2>
          {" "}
          <span className={`${classes.badge} ${classes["badge--primary"]}`}>
            {endDate}
          </span>
        </h2>

        <h2>
          {" "}
          <span className={`${classes.badge} ${classes["badge--primary"]}`}>
            {location}
          </span>
        </h2>
        <h2>
          {" "}
          <span className={`${classes.badge} ${classes["badge--primary"]}`}>
            {entryFee}
          </span>
        </h2>
      </div>
    </Fragment>
  );
}

export default TournamentDetailsBody;
