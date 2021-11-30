import React from "react";
import WheelSlider from "./WheelSlider";

export default function Projects() {
  return (
    <div id="Projects">
      <div className="titles" id="ptitle">
        Projects
      </div>
      <div className="projects-container">
        <div id="pro1" className="pro-size">
          <h1 className="protitle">Wheel of Fortune</h1>
          <WheelSlider />
          <div className="prodiscription">
            <p className="stack">Firebase | React | Node.js | Three.js</p>
            <p className="disc">
              Wheel of fortune is a web application made for single player
              games.
            </p>
            <div className="btnDiv">
              <a
                className="btn-size livestyle"
                target="_blank"
                rel="noreferrer"
                href="https://capstone-wof.web.app"
              >
                Live Site
              </a>
              <a
                className="btn-size repostyle"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/DevinFischer32/capstone-wof"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
        <div id="pro2" className="pro-size">
          <h1 className="protitle">Schedule Planner</h1>
          <div id="pro1" className="pro-size">
            <WheelSlider />
            <div className="prodiscription">
              <p className="stack">Firebase | React | Node.js | Three.js</p>
              <p className="disc">
                Wheel of fortune is a web application made for single player
                games.
              </p>
              <div className="btnDiv">
                <a
                  className="btn-size livestyle"
                  target="_blank"
                  rel="noreferrer"
                  href="https://capstone-wof.web.app"
                >
                  Live Site
                </a>
                <a
                  className="btn-size repostyle"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/DevinFischer32/capstone-wof"
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
