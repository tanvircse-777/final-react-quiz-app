import classes from "../styles/videos.module.css";

export default function Video({ title, id, noq }) {
  return (
    <>
      <div className={classes.videos}>
        <div className={classes.video}>
          <img
            src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
          />
          <p>{title}</p>
          <div className={classes.qmeta}>
            <p>{noq}</p>
            <p>Total points: {noq * 5} </p>
          </div>
        </div>
      </div>
    </>
  );
}
