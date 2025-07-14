import Header from '../portfolio-Header/portfolio-Header.jsx'
import React from 'react'
import '../portfolio-pages-css/home.css'
import headshot from '../assets/Tom-suit.png'
import beautylogo from '../assets/beautybyviktoria-logo.png'
import golfcartlogo from '../assets/golfCartLegacy.PNG'

function Home() {
  const sections = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'skills', title: 'Skills' },
    { id: 'contact', title: 'Contact' }
  ];

  return (
 <>
      <Header sections={sections} />
      <div className="home-container">
        <section id="home" className="home-section">
          <div className="home-content">
            <h1>Welcome to My Portfolio</h1>
            <p>My name is Tom Eggers and I am currently a student at the university of canterbury.
              I am studying computer science and I am passionate about software development, web design, and technology.
              I am always eager to learn new skills and take on new challenges. I enjoy working on projects that allow me to express my creativity and problem-solving abilities.
              I will finish my degree at the end of this year and I'm looking for a graduate position that will allow me to grow and contribute to exciting projects.</p>
            <p>Feel free to explore my portfolio and get in touch if you have any questions or opportunities!</p>
          </div>
          <img src={headshot} alt="Tom Eggers" className="portfolio-image" />
        </section>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>I was born and raised in Nelson, New Zealand. I have always had a passion for technology and creativity, 
            which led me to pursue a career in computer science.</p>
            <p>In my free time, I enjoy playing sports like volleyball and golf, working on personal projects that help friends and family with their tech needs.
                 I also learn new programming languages and frameworks to expand my skill set.</p>
        </section>

        
        <section id="projects" className="section">
            <h2>My Projects</h2>
            <p>Here are some of the projects I've worked on:</p>
            <div className="projects-section">
                {/* Beauty by Viktoria */}
                <div className="project-card">
                <img
                    src={beautylogo}
                    alt="Beauty by Viktoria"
                    className="project-image"
                />
                <div className="project-content">
                    <h3 className="project-title">Beauty by Viktoria</h3>
                    <p className="project-description">
                    A Beauty Salon website built with React, Node.js and hosted on Hostinger.
                    This project features a user-friendly interface for booking appointments,
                    viewing available services, and seeing a public gallery of the salon's work.
                    I used React for the frontend, and Google Apps Script for the backend to handle
                    form submissions and appointment bookings and automating Email notifications 
                    / Google Calendar integration.
                    </p>
                    <div className="project-tech">
                    <span className="tech-pill">React</span>
                    <span className="tech-pill">Google Apps Script</span>
                    <span className="tech-pill">Hostinger</span>
                    </div>
                    <div className="project-links">
                    <a href="https://beautybyviktoria.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>Live website</span> ↗
                    </a>
                    <a href="https://github.com/tomeggers/beautyByViktoria" className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>View Code</span>
                    </a>
                    </div>
                </div>
                </div>

                {/* Project 2 */}
                <div className="project-card">
                <img 
                    src={golfcartlogo} 
                    alt="Golf Cart Legacy" 
                    className="Golf-Cart-Legacy-image"
                />
                <div className="project-content">
                    <h3 className="project-title">Golf Cart Legacy</h3>
                    <p className="project-description">
                    A racing simulation game built with java and javafx and tested with JUnit. This project features a story line, AI opponents, and a variety of tracks to race on.
                    This project was a university project that I worked on with one other person which was a great experience to work on a larger project with someone else.
                    I learned a lot about collaboration, version control, and project management during this project. Using JavaFX for the UI and JUnit for testing,
                     we created a fun and engaging game that showcases my skills in game development.
                    </p>
                    <div className="project-tech">
                    <span className="tech-pill">Java</span>
                    <span className="tech-pill">JavaFX</span>
                    <span className="tech-pill">JUnit</span>
                    </div>
                    <div className="project-links">
                    <a href="https://github.com/nistorv/racing-game" className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>View Code</span>
                    </a>
                    </div>
                </div>
                </div>
                </div>
            </section>
            <section id="skills" className="skills-section">
              <h2 className="section-title">Skills</h2>
              <p className="skills-intro">
                My skills have been developed through university courses and personal projects which include:
              </p>

              <ul className="skills-grid">
                <li>JavaScript</li>
                <li>React + Vite</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>HTML & CSS</li>
                <li>Git & GitHub</li>
                <li>Responsive Design</li>
                <li>SQL</li>
              </ul>

              <p className="skills-description">
                Currently, I’m learning:
              </p>

              <ul className="learning-list">
                <li>Cloud computing and AWS deployment</li>
                <li>Machine learning and AI model development</li>
                <li>Android app development using Kotlin</li>
              </ul>
            </section>


        <section id="contact" className="section">
          <h2>Contact Me</h2>
          <p>If you want to reach out to me about opportunities, feel free to drop me a message!</p>
          <div className="contact-links">
          <p>Email: <a href="mailto:tomeggers741@gmail.com">tomeggers741@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/tom-eggers-46a638259/">Tom Eggers</a></p>
          <p>GitHub: <a href="https://github.com/tomeggers">Tom Eggers</a></p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;