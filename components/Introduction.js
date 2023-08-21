import { Fragment } from "react";
import classes from "./Introduction.module.css";
import Schedule from "./Schedule/Schedule";

const Introduction = () => {
  return (
    <div className={classes.introduction}>
      <h1>Welcome to Additude Tech Eve</h1>
      <h2>11 october, 2023</h2>
      <h3>Turning Torso - Malmö, Sweden</h3>
      <hr />

      <Schedule />
    </div>
  );
};

export default Introduction;
