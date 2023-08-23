import classes from "./Register.module.css";

const Register = () => {
  const email = "daniel.stenberg@additude.se";
  const subject = "Additude Tech Eve 2023";
  const body = "Yes, I would like to participate at the Additude Tech Eve.";
  const mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  return (
    <div className={classes.register}>
      As an Additude employee you can reserve your seat until August 31. After that external people will be invited as a "first come - first serve" basis.<br />
      Also let us know if you have any food allergies, or other important information.<br />
      No show fee - 500 SEK.<br /><br />
      Register by manually send an email to {email}, or click{" "}
      <a href={mailto}>here</a>.
    </div>
  );
};

export default Register;
