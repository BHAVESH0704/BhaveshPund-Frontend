import "../styles/FeaturedProject.css";
import projectImage from "../images/solarcharge.png";
import { motion } from "framer-motion";

function FeaturedProject() {
  return (
    <section className="featured-project" id="featured-project">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>FEATURED PROJECT</p>

        <h2>SolarCharge</h2>
      </motion.div>

      <div className="project-container">

        {/* Image */}

        <motion.div
          className="project-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.03,
          }}
        >
          <img
            src={projectImage}
            alt="SolarCharge"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          className="project-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >

          <motion.span
            className="project-badge"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 220,
            }}
          >
            Research Published
          </motion.span>

          <h3>
            Intelligent Solar Powered EV Charging Station
          </h3>

          <p>
            SolarCharge is a smart EV charging station integrating
            solar energy, embedded systems and a web dashboard to
            monitor charging, battery health and environmental
            conditions in real time.
          </p>

          <div className="tech-stack">

            {[
              "Python",
              "TypeScript",
              "React",
              "Next.js",
              "Firebase",
              "Raspberry Pi Pico W",
            ].map((tech) => (

              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.08,
                }}
              >
                {tech}
              </motion.span>

            ))}

          </div>

          <div className="project-highlights">

            {[
              { title: "2", subtitle: "Research Papers" },
              { title: "IoT", subtitle: "Remote Monitoring" },
              { title: "Solar", subtitle: "Renewable Energy" },
              { title: "Live", subtitle: "Dashboard" },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + index * 0.1,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
              >
                <h4>{item.title}</h4>

                <p>{item.subtitle}</p>

              </motion.div>

            ))}

          </div>

          <div className="project-buttons">

            <motion.button
              className="primary-btn"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              View Project
            </motion.button>

            <motion.button
              className="secondary-btn"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              Read Research
            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default FeaturedProject;