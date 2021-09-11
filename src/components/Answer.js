import classes from "../styles/answer.module.css";
export default function Answer() {
  return (
    <>
      <div className={classes.answers}>
        {/* Option 1 -->*/}
        <label className={classes.answer} for="option1">
          {" "}
          A New Hope 1{" "}
        </label>
      </div>
    </>
  );
}
