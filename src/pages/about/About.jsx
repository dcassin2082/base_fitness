import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        With state-of-the-art facilities, expert trainers, and a wide range of
        classes and programs, we provide everything you need to elevate your
        fitness experience.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Some may call it a tagline, but for us, it’s a way of life. It’s
              our Monday-thru-every-day mantra. An unfiltered philosophy that
              drives us to create a community and a gym for all.
            </p>
            <p>
              Join us today and discover the difference that Base Fitness can
              make in your life. Your journey to a healthier, happier you starts
              here.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              At Base Fitness we recognize our members as individuals, instead
              of part of the victim hierarchy.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Story" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              To create a fitness environment that actually focuses on health,
              fitness, and general well-being for its members without all the
              woke nonsense!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
