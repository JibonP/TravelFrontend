import React, { useState, useEffect } from "react";
import jibonPic from "../pic/jibon.jpg";

import Loader from "./Loader";

import "./AboutMe.css";
import teamIcon from "../pic/pursuit2.png";

function PersonCard({ name, image, email, skillset, bio, githubLink }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`person-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="person-image" src={image} alt={name} />
          <h2>{name}</h2>
          <p className="person-title">
            <a href={githubLink} target="link" rel="link">
              Pursuit Fellow 9.5
            </a>
          </p>
        </div>
        <div className="flip-card-back">
          <div className="card-content">
            <h3>{name}</h3>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p className="person-skillset">
              <strong>Skillset:</strong> {skillset}
            </p>
          </div>
          <p className="person-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
}

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="about-page">
      <h1>Creators</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="person-cards">
          <PersonCard
            name="Jibon"
            image={jibonPic}
            email="jibonpaul@gmail.com"
            skillset={"JS, CSS, JavaScript, React, and others"}
            bio="Jibon is a passionate developer with expertise in frontend technologies."
            githubLink="https://github.com/JibonP"
          />
        </div>
      )}
      {!isLoading && (
        <div className="project-summary">
          <h2>About This App</h2>
          <p>
            This app is a product of my dedication and skills in web
            development. I have created a unique and engaging experience that
            showcases the power of modern web technologies. Explore the various
            features, dive into the functionality, and witness the creativity
            that went into its design. Join me on this exciting journey of
            innovation and collaboration!
          </p>

          <a
            href="https://www.pursuit.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={teamIcon} alt="Team Icon" className="team-icon" />
            <p>Start your journey today</p>
          </a>
        </div>
      )}
    </div>
  );
}

export default About;
