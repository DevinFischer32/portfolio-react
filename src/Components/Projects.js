import React from "react";
import SpSlider from "./SpSlider";
import WheelSlider from "./WheelSlider";
import WeatherSlider from "./WeatherSlider";
import WorldeSlider from "./WordleSlider";

export default function Projects() {
  return (
    <>
      <div id="Projects">
        <div className="titles" id="ptitle">
          Projects
        </div>
        <div className="projects-container">
          <div id="pro1" className="pro-size">
            <h1 className="protitle">Wheel of Fortune</h1>
            <WheelSlider />
            <div className="prodiscription">
              <p className="stack">
                Firebase | React | Node.js | Three.js | CSS
              </p>
              <p className="disc">
                React based Wheel of Fortune Single player game. Firebase Auth
                and Database. Three.js for 3D rendering of the Wheel and Landing
                Page. Users log in and spin the wheel while gussing and trying
                to solve the hidden phrase.{"    "} Check The Game Rules/H2P and
                try a few rounds!
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
          <div id="pro3" className="pro-size">
            <h1 className="protitle">Wordle Clone</h1>
            <div id="pro1" className="pro-size">
              <WorldeSlider />
              <div className="prodiscription">
                <p className="stack">
                  React.js | JavaScript | CSS | Node.js | Express | Redux
                </p>
                <p className="disc">
                  {" "}
                  Wordle Clone made with React. Saves data to Cookies and tracks
                  Stats. This version of Wordles allows unlimted plays.
                </p>
                <div className="btnDiv">
                  <a
                    className="btn-size livestyle"
                    target="_blank"
                    rel="noreferrer"
                    href="https://wordle-unlimited-df.herokuapp.com"
                  >
                    Live Site
                  </a>
                  <a
                    className="btn-size repostyle"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DevinFischer32/wordleClone"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-size pro2">
            <h1 className="protitle">Weather App</h1>
            <div id="pro1" className="pro-size">
              <WeatherSlider />
              <div className="prodiscription">
                <p className="stack">
                  React.js | JavaScript | HTML | CSS | Node.js | Express | Axios
                </p>
                <p className="disc">
                  {" "}
                  The Weather App allows users to search weather from anywhere
                  in the world. Using Openweather API and heroku for Hosting.
                </p>
                <div className="btnDiv">
                  <a
                    className="btn-size livestyle"
                    target="_blank"
                    rel="noreferrer"
                    href="https://weatherapp-df.herokuapp.com/"
                  >
                    Live Site
                  </a>
                  <a
                    className="btn-size repostyle"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DevinFischer32/weather"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-size pro2">
            <h1 className="protitle">Schedule Planner</h1>
            <div id="pro1" className="pro-size">
              <SpSlider />
              <div className="prodiscription">
                <p className="stack">
                  JavaScript | HTML | CSS | Node.js | Express
                </p>
                <p className="disc">
                  {" "}
                  Schedule Planner That allows users to plan out their day.
                  Users can edit old Postings and Delete them as well. This was
                  my first web application made with Javascript and HTML. Hosted
                  Using Heroku
                </p>
                <div className="btnDiv">
                  <a
                    className="btn-size livestyle"
                    target="_blank"
                    rel="noreferrer"
                    href="https://schedule-planner-devthedev.herokuapp.com/"
                  >
                    Live Site
                  </a>
                  <a
                    className="btn-size repostyle"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/DevinFischer32/week8-project"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
