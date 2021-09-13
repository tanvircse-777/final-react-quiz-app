import classes from "../../styles/signup.module.css";
import "../../styles/style.css";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classes.column}>
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
