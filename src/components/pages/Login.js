import classes from "../../styles/signup.module.css";
import "../../styles/style.css";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";
export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className={classes.column}>
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}
