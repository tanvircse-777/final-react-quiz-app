import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";
export default function SignupForm() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const history = useHistory();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    //validation
    if (password !== confirmPassword) {
      return setError("Password don't match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <>
      <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
        <TextInput
          required
          type="text"
          placeholder="Name"
          icon="person"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextInput
          required
          type="text"
          placeholder="Email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          required
          type="password"
          placeholder="Password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          required
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CheckBox
          required
          text="I agree to the Terms &amp; Conditions"
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />
        <Button disabled={loading} type="submit">
          <span>Submit</span>
        </Button>

        {error && <p className="error">{error}</p>}
        <div className="info">
          Already have an account?
          <Link to="/login">Login</Link>
          instead.
        </div>
      </Form>
    </>
  );
}
