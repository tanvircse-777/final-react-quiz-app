import illustrationImage from "../assets/images/image.jpg";
import classes from "../styles/illustration.module.css";
export default function Illustration() {
  return (
    <>
      <div className={classes.illustration}>
        <img src={illustrationImage} alt="Signup" />
      </div>
    </>
  );
}
