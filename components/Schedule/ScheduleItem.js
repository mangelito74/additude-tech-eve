import classes from "./ScheduleItem.module.css";

const ScheduleItem = (props) => {
  let content = (
    <div className={classes["schedule-item-container"]}>
      <div className={classes["schedule-item-time"]}>
        {props.item.from} - {props.item.to}
      </div>
      <div>
        <div>{props.item.title}</div>
        <div className={classes["schedule-item-speaker"]}>
          {props.item.name}
          {props.item.name && <span>(Read more)</span>}
        </div>
      </div>
    </div>
  );

  if (props.item.name) {
    content = <a href={"#" + props.item.id}>{content}</a>;
  }

  return <li key={props.item.id}>{content}</li>;
};

export default ScheduleItem;
