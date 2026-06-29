import "../styles/Projects.css";
import { motion } from "framer-motion";

import expenseTracker from "../images/expense-tracker.png";
import homeAutomation from "../images/home-automation.png";
import sentimentAnalysis from "../images/sentiment-analysis.png";

const projects = [
  {
    title: "Expense Tracker",
    year: "2025",
    description:
      "Desktop application developed using Python, SQLite and Matplotlib for tracking daily expenses with insightful visualizations.",
    tech: ["Python", "SQLite", "Matplotlib"],
    image: expenseTracker,
    github: "https://github.com/BHAVESH0704",
  },
  {
    title: "Bluetooth Home Automation",
    year: "2024",
    description:
      "Arduino-based home automation system controlled through an Android application using Bluetooth communication.",
    tech: ["Arduino", "HC-05", "Relay Module"],
    image: homeAutomation,
    github: "https://github.com/BHAVESH0704",
  },
  {
    title: "Sentiment Analysis",
    year: "2025",
    description:
      "AI-powered sentiment analysis using Transformers and Streamlit for real-time text classification.",
    tech: ["Python", "Transformers", "Streamlit"],
    image: sentimentAnalysis,
    github: "https://github.com/BHAVESH0704",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>PROJECTS</p>

        <h2>Engineering Portfolio</h2>
      </motion.div>

      {projects.map((project, index) => (

        <motion.div
          key={project.title}
          className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -80 : 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
          }}
        >

          <motion.div
            className="project-image"
            whileHover={{
              scale: 1.03,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
            />
          </motion.div>

          <div className="project-info">

            <span>{project.year}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">

              {project.tech.map((item) => (

                <motion.span
                  key={item}
                  whileHover={{
                    scale: 1.08,
                  }}
                >
                  {item}
                </motion.span>

              ))}

            </div>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: 6,
              }}
            >
              View Project →
            </motion.a>

          </div>

        </motion.div>

      ))}

    </section>
  );
}

export default Projects;