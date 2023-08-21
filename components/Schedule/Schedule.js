import ScheduleItem from "./ScheduleItem";

import classes from "./Schedule.module.css";

import { data } from "../../lib/data";

const Schedule = () => {
  return (
    <section className={classes["schedule-container"]}>
      <ul>
        {data.map((item) => (
          <ScheduleItem item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Schedule;
