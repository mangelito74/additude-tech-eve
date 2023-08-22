import ScheduleItem from "./ScheduleItem";

import classes from "./Schedule.module.css";

import { data } from "../../lib/data";

const Schedule = () => {
  return (
    <section className={classes["schedule-container"]}>
      <nav id="main">
        <ul>
          {data.map((item) => (
            <ScheduleItem item={item} />
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Schedule;
