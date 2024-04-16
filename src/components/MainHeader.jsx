import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/newfitness_prev_ui.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          {/* <h4>#100DaysOfWorkOut</h4> */}
          <h4>#WideAwakeNotWoke</h4>
          <h1>Welcome to Base Fitness</h1>
          <p>
            Discover a sanctuary dedicated to your well-being, where every step
            you take brings you closer to your goals. Whether you're a seasoned
            athlete or just starting out, find your strength, vitality, and
            inner hero here
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img src={Image} alt="HeaderImage" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
// package information department (claims and investigations)
export default MainHeader;
