import React from "react";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import classes from "./about.module.css";
const About = () => {
  return (
    <>
      <div className={classes.parent_about_page}>
        <div className={classes.about_page}>
          <div className={classes["about__photo"]}></div>
          <div className={classes.about_content}>
            <h2>ABOUT ME</h2>
            <p>
              I'm a MERN Stack developer. I have skills in the fields of web
              designing,problem solving, frontend technology and backend
              technology.
            </p>
            <p>
              I enjoy turning complex problems into simple, beautiful and
              intuitive designs. When I'm not pushing pixels, you'll find me
              cooking, gardening or working out in the park.
            </p>
            <h2>SKILLS</h2>
            <div className={classes.parent_img}>
              <img
                src={require("./../assets/html.png")}
                alt="html"
                className={classes.img}
              />
              <img
                src={require("./../assets/css.png")}
                alt=""
                className={classes.img}
              />
              <img
                src={require("./../assets/js.png")}
                alt=""
                className={classes.img}
              />
              <img
                src={require("./../assets/react.png")}
                alt=""
                className={classes.img}
              />
              <img
                src={require("./../assets/node.png")}
                alt=""
                className={classes.img}
              />
              <img
                src={require("./../assets/mongodb.png")}
                alt=""
                className={classes.img}
              />
            </div>
          </div>
        </div>
      </div>
      <Education />
      <Projects />
    </>
  );
};

export default About;
