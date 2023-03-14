import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/aditi.jpg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Aditi Goyal</h1>
      <h2 className="profile-text">I am a Full-Stack Developer</h2>
      <h4 className="profile-text">
        This project is made by me with lots of excitement
      </h4>
      <div className="profile-links">
        <a href="https://github.com/aditi5050">
          <FaGithub />
        </a>
       
       
        <a href="https://www.linkedin.com/in/aditi-aditi-goyal/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
