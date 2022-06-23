import {
  Copyright,
  EmailOutlined,
  Place,
  WifiCalling3,
} from "@mui/icons-material";
import React from "react";
import Form from "../form/Form";
import classes from "./contact.module.css";

const Contact = () => {
  const year = new Date(Date.now()).getFullYear();
  return (
    <>
      <h1 className={classes.heading}>Contact</h1>
      <div className={classes.parent}>
        <div className={classes.contact_info}>
          <p className={classes.Contact_heading}>Contact me</p>
          <div className={classes.email}>
            <EmailOutlined />
            <a href="mailto:srvpraveen002@gmail.com" className={classes.link}>
              srvpraveen002@gmail.com
            </a>
          </div>
          <div className={classes.phone}>
            <WifiCalling3 />
            <a href="tel:+91 9790321691" className={classes.link}>
              +91 9790321691
            </a>
          </div>
          <div className={classes.place}>
            <Place />
            <p>Tamil Nadu, India</p>
          </div>
        </div>
        <div className={classes.form}>
          <h2>Send me a message</h2>
          <Form className={classes.form} />
        </div>
      </div>
      <div className={classes.footer}>
        <Copyright />
        <span>{year} Praveenkumar. All rights reserved.</span>
      </div>
    </>
  );
};

export default Contact;
