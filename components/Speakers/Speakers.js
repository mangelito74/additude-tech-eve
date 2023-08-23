import SpeakerItem from "./SpeakerItem";

import classes from "./Speakers.module.css";

import { data } from "../../lib/data";

const Speakers = () => {
  const speakers = data.filter((speaker) => speaker.name !== undefined);

  return (
    <div className={classes["speakers-container"]}>
      <ul>
        {speakers.map((speaker) => (
          <SpeakerItem speaker={speaker} />
        ))}
      </ul>
    </div>
  );
};

export default Speakers;
