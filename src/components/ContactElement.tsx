import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// import * as dotenv from 'dotenv';

import email from "../assets/images/email.svg";

import "../styles/ContactElement.css";

// dotenv.config();

const ContactElement = () => {
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();

  const refreshButton = () => {
    setMessageSent(false);
  };

  // const service = process.env.EMAIL_PUBLIC_KEY
  // const template = process.env.EMAIL_TEMPLATE_ID
  // const key = process.env.EMAIL_PUBLIC_KEY

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // service,
        // template,
        "service_3j0bm3i",
        "template_5hhisid",
        form.current,
        // key
        "qijCjW2M6M02X5_aP"
      )
      .then((result) => {
        setMessageSent(true);
        e.target.reset();
      });
  };

  return (
    <div className="contact-element-container" onMouseEnter={refreshButton}>
      <img src={email} alt="email icon" />
      <form ref={form} onSubmit={sendEmail}>
        <h3>Get in touch</h3>
        <div className="contact-element-separator" />
        <label htmlFor="Name">
          Name
          <input type="text" name="user_name" required />
        </label>
        <label htmlFor="Email">
          Email
          <input type="email" name="user_email" required />
        </label>
        <label htmlFor="Message">
          Message
          <textarea name="message" required />
        </label>
        <button type="submit" value="Send">
          {messageSent ? `Thank you` : `Submit`}
        </button>
      </form>
      <a href="mailto:ionutcojocaru@outlook.com">
        <button className="alternative" type="button">
          ...or use your email directly
        </button>
      </a>
    </div>
  );
};

export default ContactElement;
