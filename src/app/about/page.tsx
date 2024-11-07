import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <h1 className="about-title">Rimsha Kanwal</h1>
          <p className="about-subtitle">Web Developer</p>
          <p className="about-subtitle">arinrimshakanwal@gmail.com</p>
        </div>
        <div className="about-section">
          <div>
            <h2 className="section-title">Professional Summary</h2>
            <p className="section-text">A passionate Web Developer with over 2 years of experience in building and maintaining responsive websites using Python and Django. Skilled in creating dynamic web applications, implementing RESTful APIs, and integrating third-party services. Proficient in both front-end and back-end development, with a keen eye for detail and a commitment to delivering high-quality solutions.</p>
          </div>
          <div className='section-text'>
          <h2 className="section-title">Technical Skills</h2>
          <ul className="list">
              <li><strong>Languages:</strong> Python, JavaScript, TypeScript, HTML, CSS</li>
              <li><strong>Frameworks:</strong> Django, Flask, Next.js, React, Tailwind CSS</li>
              <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
              <li><strong>Tools:</strong> Git, Docker, Jenkins, AWS, Heroku</li>
              <li><strong>Other:</strong> RESTful APIs, OAuth, WebSockets, Agile Methodologies</li>
            </ul>
          </div>
          <div className="section-text">
            <h2 className="section-title">Professional Experience</h2>
            <div >
              <h3 >Web Developer</h3>
              <p >Governor House, Karachi, Sindh</p>
              <p >08, 2023 – Onsite</p>
              <ul >
                <li>Designed and developed web applications using Python and Django, handling both front-end and back-end tasks.</li>
                <li>Implemented responsive web designs using HTML, CSS, and JavaScript frameworks like React.</li>
                <li>Developed RESTful APIs for seamless communication between the front end and back end.</li>
                <li>Collaborated with cross-functional teams to deliver projects on time and within budget.</li>
                <li>Utilized version control systems like Git for code management and collaboration.</li>
              </ul>
            </div>

            <div>
              <h3 >Junior Web Developer</h3>
              <p>Previous Company Name, City, State</p>
              <p >Month, Year – Month, Year</p>
              <ul >
                <li>Assisted in the development of web applications using Python and Django.</li>
                <li>Participated in code reviews, bug fixing, and testing of web applications.</li>
                <li>Maintained and updated existing web applications to ensure optimal performance.</li>
                <li>Worked closely with designers to implement UI/UX designs.</li>
                <li>Gained experience in using cloud platforms like AWS for deployment.</li>
              </ul>
            </div>
            <div >
            <h2 >Education</h2>
            <p ><strong>Bachelor of Science in Computer Science</strong></p>
            <p >University Name = Piaic, Karachi, Sindh</p>
            <p >Month, Year – Month, Year</p>
          </div>
          <div >
            <h2 >Certifications</h2>
            <ul >
              <li>Django for Web Development – Certification Authority, 2023</li>
              <li>Full-Stack Web Development with React – Certification Authority, 2024</li>
              <li>Web Developer Certified Solutions Architect – Certification Authority, 2024</li>
            </ul>
          </div>

          <div >
            <h2 >Projects</h2>
            <ul >
              <li><strong>Calculator:</strong> A brief description of the project, technologies used, and your role.</li>
              <li><strong>CLI Guessing Game:</strong> A brief description of the project, technologies used, and your role.</li>
              <li><strong>ATM:</strong> A brief description of the project, technologies used, and your role.</li>
              <li><strong>Quiz:</strong> A brief description of the project, technologies used, and your role.</li>
            </ul>
          </div>

          <div >
            <h2 >Languages</h2>
            <ul >
              <li>English (Basic)</li>
              <li>Urdu (Fluent)</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
