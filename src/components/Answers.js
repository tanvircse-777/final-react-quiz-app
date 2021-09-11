import classes from "../styles/answers.module.css";
import CheckBox from "./CheckBox";
export default function Answer() {
  return (
    <>
      <CheckBox text="Option 1" id="option1" className={classes.answer} />
    </>
  );
}
