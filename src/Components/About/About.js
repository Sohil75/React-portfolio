import React from "react";
import profilepic from "../../Images/profile.jpg";
import "./about.css";
import MdResume from "../../Images/MdResume.pdf";
export default function About() {
  return (
    <section id="about">
    <div className="about-container">
      <div className="profile-pic">
        <img src={profilepic} alt="profilepic" />
      </div>
      <div className="about-content">
        <h2>ABOUT ME</h2>
        <p>
          I’m a Full-Stack Web Developer specializing in the MERN stack,
          dedicated to building scalable, high-performance web applications.
          With expertise in React, Node.js, Express, and MongoDB, I develop
          solutions that are not only functional but also optimized for seamless
          user experiences. My approach to development revolves around clean
          code, problem-solving, and continuous learning. I enjoy transforming
          ideas into intuitive digital products, ensuring efficiency in both
          frontend and backend operations. Whether it’s crafting responsive UI
          components or integrating robust APIs, I strive to deliver impactful
          and maintainable solutions.
          <br />
          Key Strengths:
          <span>
            <br />
            <li>
              ✅ Frontend Excellence – React, Redux, Tailwind CSS, Bootstrap
            </li>
            <li>✅ Backend Proficiency – Node.js, Express, MongoDB</li>
            <li>✅ API Integration – RESTful APIs, third-party services</li>
            <li>✅ Performance Optimization & Debugging</li>
          </span>
          <br />
          I’m always eager to learn, adapt, and contribute to innovative
          projects that push the boundaries of web development. If you're
          looking for a skilled, passionate, and results-driven developer, let's
          connect! 🚀{" "}
        </p>
        <div className="buttons">
        <a href={MdResume} download>RESUME</a>
        </div>
      </div>
    </div>
    </section>
  );
}
