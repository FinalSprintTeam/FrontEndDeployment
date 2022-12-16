import React, { Fragment } from "react";
import styles from "./css/Main.module.css";

const Main = () => {
  return (
    <div>
      <div className={styles.imageContainer1}>
        <img
          src="https://images.unsplash.com/photo-1561251224-e393160cd769?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=480&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MTAzNjAzMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=640"
          alt="tournament"
        />
      </div>
      <div className={styles.header1}>
        <h1>The Happiest Place on Earth!!</h1>
      </div>

      <div className={styles.imageContainer2}>
        <img
          src="https://i.pinimg.com/564x/25/bd/62/25bd62e48e6aea0017ec5b94cb23a287.jpg"
          alt="Taparoo"
        />
      </div>
      <div className={styles.imageContainer3}>
        <img src="https://i.gifer.com/Mz42.gif" alt="Happy" />
      </div>
    </div>
  );
};

export default Main;
