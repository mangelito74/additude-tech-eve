import SpeakerItem from "./SpeakerItem";

import classes from "./Speakers.module.css";

import { data } from "../../lib/data";

const Speakers = () => {
  const speakers = data.filter((speaker) => speaker.name !== undefined);

  return (
    <div className={classes["speakers-padding-bottom"]}>
      <div className={classes["speakers-container"]}>
        <ul>
          {/* <li>Hej hej</li> */}
          {speakers.map((speaker) => (
            <SpeakerItem speaker={speaker} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Speakers;
