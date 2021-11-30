import React from "react";

export default function Skills() {
  return (
    <div id="Skills">
      <h1 className="titles" id="skills-title">
        Skills
      </h1>
      <div className="skills-row">
        <div className="column">
          <h5 className="known-titles">React</h5>
        </div>
        <div className="column">
          <h5 className="known-titles">JavaScript</h5>
        </div>
        <div className="column">
          <h5 className="known-titles">Node.js</h5>
        </div>
        <div className="column">
          <h5 className="known-titles">PostgreSQL</h5>
        </div>
      </div>
      <div className="skills-row">
        <div className="column">
          <h5 className="known-titles">HTML</h5>
        </div>
        <div className="column">
          <h5 className="known-titles">CSS</h5>
        </div>
        <div className="column">
          <h5 className="known-titles">Git</h5>
        </div>
        <div className="column">
          <h5 className="known-titles">Github</h5>
        </div>
      </div>
    </div>
  );
}
