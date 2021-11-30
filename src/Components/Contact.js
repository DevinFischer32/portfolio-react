import React from "react";

export default function Contact() {
  return (
    <div id="Contact">
      <h1 id="contact-title" className="titles">
        Contact
      </h1>
      <div className="flex">
        <div id="left">
          <form className="column">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="message" />
            <input type="button" value="Submit" />
          </form>
        </div>
        <div id="right">
          <p>Linkedin</p>
          <p>Github</p>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}
