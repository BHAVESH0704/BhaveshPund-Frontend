import "../styles/Home.css";
import profile from "../images/profile.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        {/* Left */}

        <motion.div
          className="hero-text"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="hero-tag">
            SOFTWARE ENGINEER • EMBEDDED SYSTEMS • AI
          </div>

          <h1>
            Bhavesh <span>Pund</span>
          </h1>

          <h2>
            Building intelligent software, embedded systems and AI solutions
            for real-world impact.
          </h2>

          <p className="description">
            Research Author • Full Stack Developer • Embedded Systems Engineer
            <br />
            <br />
            Published 2 research papers, built engineering solutions like
            <strong> SolarCharge</strong> and delivered
            <strong> 10+ freelance projects</strong> across Software and IoT.
          </p>

          <div className="buttons">
            <button
              className="primary-btn"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </button>

            <a href="/Bhavesh_Pund_Resume.pdf" download>
              <button className="secondary-btn">
                Download Resume
              </button>
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://github.com/BHAVESH0704"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/bhaveshpund"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <span>•</span>

            <a href="mailto:pundbhavesh@gmail.com">
              Email
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>8+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>2</h3>
              <p>Research Papers</p>
            </div>

            <div className="stat-card">
              <h3>10+</h3>
              <p>Client Projects</p>
            </div>

            <div className="stat-card">
              <h3>15+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          className="hero-image"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="image-bg"></div>

          <div className="image-frame">
            <img src={profile} alt="Bhavesh Pund" />
          </div>
        </motion.div>

      </div>

      <div className="scroll-down">
        <span>Scroll to Explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}

export default Home;