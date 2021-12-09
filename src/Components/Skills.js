import React from "react";
import reactLogo from "./Logo/atom.png";
import jsLogo from "./Logo/Javascript-Logo.png";
import html from "./Logo/html.png";
import node from "./Logo/node.js.png";
import postgres from "./Logo/postgre.png";
import cssLogo from "./Logo/css-3.png";
import git from "./Logo/git.png";
import firebase from "./Logo/firebase.png";

export default function Skills() {
  return (
    <>
      <div id="Skills">
        <h1 className="titles" id="skills-title">
          Skills
        </h1>
        <div id="skills-phone">
          <div className="skills-row">
            <div className="column">
              <img src={reactLogo} alt="" className="skillsLogo" />
              <h5 className="known-titles">React</h5>
            </div>
            <div className="column">
              <img src={jsLogo} alt="" className="skillsLogo" />
              <h5 className="known-titles">JavaScript</h5>
            </div>
            <div className="column">
              <img src={node} alt="" className="skillsLogo" />
              <h5 className="known-titles">Node.js</h5>
            </div>
            <div className="column">
              <img src={postgres} alt="" className="skillsLogo" />
              <h5 className="known-titles">PostgreSQL</h5>
            </div>
          </div>
          <div className="skills-row">
            <div className="column">
              <img src={html} alt="" className="skillsLogo" />
              <h5 className="known-titles">HTML</h5>
            </div>
            <div className="column">
              <img src={cssLogo} alt="" className="skillsLogo" />
              <h5 className="known-titles">CSS</h5>
            </div>
            <div className="column">
              <img src={git} alt="" className="skillsLogo" />
              <h5 className="known-titles">Git</h5>
            </div>
            <div className="column">
              <img src={firebase} alt="" className="skillsLogo" />
              <h5 className="known-titles">Firebase</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
