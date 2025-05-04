import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University of Technology"
            date="2007 — 2008"
            description="Focused on the core principles of computer science, including algorithms, data structures, and software engineering. Gained hands-on experience in full-stack development, including front-end and back-end programming. This education provided a strong technical foundation and helped me build problem-solving skills crucial for software development."
          />
          <TimelineItem
            title="University of Technology"
            date="2006 — 2007"
            description="Completed an immersive program in full-stack web development, learning to build dynamic, responsive websites and web applications. Acquired hands-on experience with modern JavaScript frameworks, databases, and server-side programming."
          />
          <TimelineItem
            title="Tech High School for Digital Innovation"
            date="2002 — 2004"
            description="Studied various aspects of technology, including early programming languages and digital design. Engaged in extracurricular projects and coding clubs that fostered a passion for development and laid the groundwork for my career in tech."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="fullstack developer"
            date="2016 — Present"
            description="As a Full Stack Developer, I have successfully designed, developed, and maintained dynamic, scalable web applications. My responsibilities include building both the front-end and back-end of applications, utilizing technologies like JavaScript (React, Node.js), HTML/CSS, and databases such as MongoDB and SQL. I collaborate closely with cross-functional teams to ensure a seamless user experience, optimize performance, and implement robust, secure code. Additionally, I am involved in code reviews, deployment processes, and the integration of third-party APIs."
          />
          <TimelineItem
            title="Frontend developer"
            date="2014 — 2016"
            description="In my role as a Frontend Developer, I was responsible for translating design wireframes and mockups into interactive, responsive web pages. Using HTML5, CSS3, JavaScript, and frameworks like Angular and React, I created user-centric web applications that were not only visually appealing but also fast and accessible. My focus was on optimizing the user experience across various devices, ensuring that performance, load time, and usability were top priorities."
          />
          <TimelineItem
            title="Web designer"
            date="2011 — 2014"
            description="As a Web Designer, I was responsible for designing visually compelling and user-friendly websites. I worked closely with clients to understand their brand and goals, ensuring that the design not only met aesthetic standards but also provided an intuitive and effective user experience. My skills included UI/UX design, wireframing, prototyping, and graphic design using tools like Adobe Photoshop, Illustrator, and Sketch. I also had experience in front-end development, helping to bring designs to life using HTML, CSS, and JavaScript."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="frontend development" value={99} />
          <SkillItem title="UI/UX design" value={90} />
          <SkillItem title="Graphic design" value={77} />
          <SkillItem title="backend development" value={99} />
          <SkillItem title="WordPress" value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
