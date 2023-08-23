import classes from "./Register.module.css";

const Register = () => {
  const email = "daniel.stenberg@additude.se";
  const subject = "Additude Tech Eve 2023";
  const body = "Yes, I would like to participate at the Additude Tech Eve.";
  const mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  return <div className={classes.register}>Register by manually send an email to {email}, or click <a href={mailto}>here</a>.</div>;
};

export default Register;
