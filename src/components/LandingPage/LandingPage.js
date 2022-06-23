import React from "react";
import classes from "./Landingpage.module.css";
import { useNavigate } from "react-router-dom";
import resume from "./../assets/resume.pdf";

const LandingPage = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/contact");
  };
  return (
    <div id="home">
      <div className={classes.container_LandingPage}></div>
      <div className={classes.container_text}>
        <h1 className={classes.title}>I am Praveenkumar</h1>
        <p className={classes.subtitle}>I'm a creative web developer</p>
        <p className={classes.content}>
          I STAND ON A SWEET SPOT WHERE DESIGN & CODE INTERSECTS.
        </p>
        <div className={classes["Landingpage__parent__btn"]}>
          <button
            className={`${classes.btn} ${classes.btn1}`}
            onClick={handleClick}
          >
            Hire me
          </button>
          <a href={resume} download>
            <button className={`${classes.btn} ${classes.btn2}`}>
              Get Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
