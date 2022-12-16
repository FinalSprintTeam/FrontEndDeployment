import React from "react";
import classes from "./TournamentItem.module.css";

const TournamentItem = ({ id, name, onSelection }) => {
  return (
    <div
      onClick={() => onSelection(id)}
      key={id}
      className={classes["tournament-item"]}
    >
      <h2>{name}</h2>
    </div>
  );
};

export default TournamentItem;
