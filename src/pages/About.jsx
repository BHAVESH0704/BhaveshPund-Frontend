import "../styles/About.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { getAbout } from "../api/aboutApi";

function About() {

  const [about, setAbout] = useState(null);

  useEffect(() => {

    const loadAbout = async () => {

      try {

        const data = await getAbout();

        setAbout(data);

      } catch (error) {

        console.error("Failed to load about:", error);

      }

    };

    loadAbout();

  }, []);

  if (!about) return null;

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
          <strong>{about.name}</strong> is a{" "}
          <strong>{about.role}</strong> pursuing{" "}
          <strong>{about.degree}</strong> at{" "}
          <strong>{about.college}</strong>.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Curiosity has always been the driving force behind my
          journey. Today I develop Java applications, full-stack web
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
            whileHover={{ y: -10, scale: 1.03 }}
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
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3>⚡ Embedded</h3>

            <p>
              Arduino, Raspberry Pi Pico W,
              IoT and electronics projects.
            </p>

          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3>🌐 Systems</h3>

            <p>
              Linux, Networking,
              Docker and Cloud Computing.
            </p>

          </motion.div>

        </div>

      </div>

    </section>

  );

}

export default About;