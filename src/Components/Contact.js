import React from "react";
import Linkedin from "./Logo/linkedin-logo.png";
import github from "./Logo/github.png";
import email from "./Logo/email.png";
import resume from "./Logo/cv.png";
import downloadableResume from "./Logo/2022 Resume.pdf";

export default function Contact() {
  return (
    <div id="Contact">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="shape-fill"
          fill="#e6e8e6"
          fillOpacity="1"
        ></path>
      </svg>
      <div className="flexContact">
        <div id="contact-flex">
          <div>
            <a
              href="https://www.linkedin.com/in/devin-fischer/"
              target="_blank"
              rel="noreferrer"
              className="contactR"
            >
              <img src={Linkedin} alt="linkedin" className="contactLogo" />
              <p className="contactLogoText">Linkedin</p>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/DevinFischer32"
              target="_blank"
              rel="noreferrer"
              className="contactR"
            >
              <img src={github} alt="github" className="contactLogo" />
              <p className="contactLogoText">Github</p>
            </a>
          </div>
          <div>
            <a
              href={downloadableResume}
              download
              target="_blank"
              rel="noreferrer"
              className="contactR"
            >
              <img src={resume} alt="resume" className="contactLogo" />
              <p className="contactLogoText">Resume</p>
            </a>
          </div>
        </div>
        <div>
          <a
            href="mailto:devinfischer.dev@gmail.com "
            target="_blank"
            rel="noreferrer"
            className="contactR"
          >
            <img src={email} alt="email" className="contactLogo" />
            <p className="contactLogoText">devinfischer.dev@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
}
