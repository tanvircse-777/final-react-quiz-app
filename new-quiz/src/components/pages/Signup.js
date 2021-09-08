import { Link } from "react-router-dom";
import classes from "../../styles/signup.module.css";
import "../../styles/style.css";
import Button from "../Button";
import CheckBox from "../CheckBox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classes.column}>
        <Illustration />
        <Form className={classes.signup}>
          <TextInput type="text" placeholder="Name" icon="person" />
          <TextInput type="text" placeholder="Email" icon="alternate_email" />
          <TextInput type="password" placeholder="Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <CheckBox text="I agree to the Terms &amp; Conditions" />
          <Button>
            <span>Submit</span>
          </Button>
          <div className="info">
            Already have an account?
            <Link to="/login">Login</Link>
            instead.
          </div>
        </Form>
      </div>
    </>
  );
}
