import SpeakerItem from "./SpeakerItem";

import classes from "./Speakers.module.css";

import { data } from "../../lib/data";

const Speakers = () => {
  const speakers = data.filter((speaker) => speaker.name !== undefined);

  return (
    <section className={classes["speakers-container"]}>
      <ul>
        {speakers.map((speaker) => (
          <SpeakerItem speaker={speaker} />
        ))}
      </ul>
    </section>
  );
};

export default Speakers;
