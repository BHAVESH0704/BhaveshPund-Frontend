import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ABOUT ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Building technology with
          <span> curiosity.</span>
        </motion.h2>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Curiosity has always been the driving force behind my
          journey. Every programming language, framework and
          technology I've learned started with one simple question:
          <strong> "How does this work?"</strong>
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Today I develop Java applications, full-stack web
          solutions and embedded systems while continuously
          expanding my knowledge in Linux, networking,
          cloud computing and artificial intelligence.
        </motion.p>

        <div className="about-grid">

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <h3>💻 Software</h3>

            <p>
              Java, Spring Boot, React,
              MySQL and modern web development.
            </p>

          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <h3>⚡ Embedded</h3>

            <p>
              Arduino, Raspberry Pi,
              IoT and electronics projects.
            </p>

          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <h3>🌐 Systems</h3>

            <p>
              Linux, networking,
              DevOps fundamentals and cloud.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;