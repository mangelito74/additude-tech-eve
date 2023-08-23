import classes from "./SpeakerItem.module.css";

const SpeakerItem = (props) => {
  return (
    <li
      key={props.speaker.id}
      id={props.speaker.id}
      className={classes["speaker-container"]}
    >
      <h2>{props.speaker.title}</h2>
      <div className={classes["speaker-content-container"]}>
        <div>
          <div>{props.speaker.description}</div>
          <div className={classes["speaker-content-about"]}>
            About {props.speaker.name}:
          </div>
          <div> {props.speaker.biography}</div>
        </div>
        <img
          src={props.speaker.image}
          title={props.speaker.name}
          className={classes["speaker-image"]}
        />
      </div>
    </li>
  );
};

export default SpeakerItem;
