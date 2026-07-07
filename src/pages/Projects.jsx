import "../styles/Projects.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { getProjects } from "../api/projectApi";

import expenseTracker from "../images/expense-tracker.png";
import homeAutomation from "../images/home-automation.png";
import sentimentAnalysis from "../images/sentiment-analysis.png";
import solarCharge from "../images/solarcharge.png";
import chahawaleMama from "../images/chaha.png";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    const loadProjects = async () => {

      try {

        const data = await getProjects();

        setProjects(data);

      } catch (error) {

        console.error("Failed to load projects:", error);

      }

    };

    loadProjects();

  }, []);

  const getImage = (imageUrl) => {

    switch (imageUrl) {

      case "/images/expense-tracker.png":
        return expenseTracker;

      case "/images/home-automation.png":
        return homeAutomation;

      case "/images/solarcharge.png":
        return solarCharge;

      case "/images/chaha.png":
        return chahawaleMama;

      case "/images/sentiment-analysis.png":
        return sentimentAnalysis;

      default:
        return expenseTracker;

    }

  };

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
            whileHover={{ scale: 1.03 }}
          >

            <img
              src={getImage(project.imageUrl)}
              alt={project.title}
            />

          </motion.div>

          <div className="project-info">

            <span>{project.year}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tech">

              {project.technologies
                .split(",")
                .map((tech) => (

                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.08 }}
                  >
                    {tech.trim()}
                  </motion.span>

                ))}

            </div>

            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 6 }}
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