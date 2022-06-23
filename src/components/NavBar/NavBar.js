import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import classes from "./navbar.module.css";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setShow((prev) => (prev ? false : true));
  };

  return (
    <>
      <div className={`${classes.navbar} ${classes.active}`}>
        <span className={classes.heading}>Praveenkumar</span>
        <NavLink to="/">
          <span className={classes.content}>Home</span>
        </NavLink>
        <NavLink to="about">
          <span className={classes.content}>About</span>
        </NavLink>
        <NavLink to="contact">
          <span className={classes.content}>Contact</span>
        </NavLink>
      </div>
      <div className={`${classes.navbar} ${classes.mobile}`}>
        <span className={classes.heading}>Praveenkumar</span>
        <button onClick={handleClick} className={classes.btn}>
          <MenuIcon sx={{ fontSize: "40px" }} />
        </button>
      </div>
      {show && (
        <div className={classes.mobile_column}>
          <NavLink to="/" className={classes.content_mobile}>
            <div onClick={handleClick}>Home</div>
          </NavLink>
          <NavLink to="/about" className={classes.content_mobile}>
            <div onClick={handleClick}>About</div>
          </NavLink>
          <NavLink to="/contact" className={classes.content_mobile}>
            <div onClick={handleClick}>Contact</div>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default NavBar;
