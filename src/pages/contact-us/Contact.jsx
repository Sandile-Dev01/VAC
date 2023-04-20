import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintRoller,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <h1>Contact</h1>
        <p>Let's connect in a way you see fit</p>
      </div>

      <div className="info_form_container">
        <div className="information_container">
          <div>
            <div className="contact_item">
              <span style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon icon={faLocationDot} /> &nbsp;
                <h1>Head Office</h1>
              </span>

              <address>
                128 Adderly Street,
                <br />
                Dumbarton house 3rd-floor (room 303),
                <br />
                Cape Town,
                <br />
                8001
              </address>
            </div>

            <div className="contact_item">
              <span style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon icon={faPhone} shake />
                &nbsp;
                <h1>Phone Numbers</h1>
              </span>
              <p>061 408 6346</p>
            </div>

            <div className="contact_item">
              <span style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                <h1>Email Address</h1>
              </span>
              <p>info@vacafrica.org.za</p>
            </div>
          </div>
        </div>

        <form action="">
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email-address*" required />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message*"
            required
          ></textarea>
          <input type="submit" className="submit_btn" value="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
