import React from "react";
import classes from "./education.module.css";

const Education = () => {
  return (
    <>
      <h2 className={classes.heading}>Education</h2>
      <div className={classes.parent}>
        <div className={classes.container}>
          <div className={classes.line}>
            <div className={`${classes.circle} ${classes.circle1}`}></div>
            <div className={`${classes.circle} ${classes.circle2}`}></div>
            <div className={`${classes.circle} ${classes.circle3}`}></div>
          </div>
          <div className={classes.content}>
            <div className={`${classes.content} ${classes.content1}`}>
              <div className={classes.first}></div>
              <div className={`${classes.second} ${classes.style}`}>BE ECE</div>
              <div className={classes.third}>
                <p>Government College Of Technology, Coimbatore</p>
                <p>2017-2021</p>
              </div>
            </div>
            <div className={`${classes.content} ${classes.content2}`}>
              <div className={classes.first}></div>
              <div className={`${classes.second} ${classes.style}`}>
                Higher Secondary
              </div>
              <div className={classes.third}>
                <p>SRV Boys Higher Secondary School, Rasipuram</p>
                <p>2016-2017</p>
              </div>
            </div>
            <div className={`${classes.content} ${classes.content3}`}>
              <div className={classes.first}></div>
              <div className={`${classes.second} ${classes.style}`}>
                Secondary
              </div>
              <div className={classes.third}>
                <p>Government Higher Secondary School</p>
                <p>2014-2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
