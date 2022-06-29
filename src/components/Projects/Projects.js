import React from "react";
import classes from "./projects.module.css";
const Projects = () => {
  return (
    <>
      <h1 className={classes.heading}>Projects</h1>
      <div className={classes.parent}>
        <div className={classes.project_container}>
          <a
            href="https://video-streaming-app.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.project}>
              <img
                src={require("./../assets/video-streaming-app.png")}
                alt="video-streaming-app"
                className={classes.img}
              />
              <h3 className={classes.project_heading}>Video Streaming App</h3>
            </div>
          </a>
          <a
            href="https://amazon-clone-614e29.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.project}>
              <img
                src={require("./../assets/amazon-clone.png")}
                alt="amazon-clone"
                className={classes.img}
              />
              <h3 className={classes.project_heading}>Amazon Clone App</h3>
            </div>
          </a>
          <a
            href="https://food-recipe-app-952ba7.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.project}>
              <img
                src={require("./../assets/food-recipe-app.png")}
                alt="food-recipe-app"
                className={classes.img}
              />
              <h3 className={classes.project_heading}>Food Recipe App</h3>
            </div>
          </a>
          <a
            href="https://expense-tracker-87ed26.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.project}>
              <img
                src={require("./../assets/expense-tracker.png")}
                alt="expense-tracker"
                className={classes.img}
              />
              <h3 className={classes.project_heading}>Expense Tracker</h3>
            </div>
          </a>
          <a
            href="https://blog-app-f1683e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.project}>
              <img
                src={require("./../assets/blog-app.png")}
                alt="blog-app"
                className={classes.img}
              />
              <h3 className={classes.project_heading}>Blog App</h3>
            </div>
          </a>
          <a
            href="https://todoapp-ac475b.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={classes.project}>
              <img
                src={require("./../assets/todoapp.png")}
                alt="todoapp"
                className={classes.img}
              />
              <h3 className={classes.project_heading}>Todo App</h3>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
