import classes from "../../styles/signup.module.css";
import "../../styles/style.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className={classes.column}>
        <Illustration />
        <Form style={{ height: "330px" }}>
          <TextInput type="text" placeholder="Email" icon="alternate_email" />
          <TextInput type="password" placeholder="Password" icon="lock" />

          <Button>
            <span>Submit</span>
          </Button>
        </Form>
      </div>
    </>
  );
}
