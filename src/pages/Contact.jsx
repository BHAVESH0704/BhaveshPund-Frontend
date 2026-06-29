import "../styles/Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>CONTACT</p>

          <h2>
            Let's Build <span>Something Great</span>
          </h2>

          <p className="section-description">
            I'm always open to discussing Software Engineering,
            Embedded Systems, AI, Full Stack Development and
            opportunities to build meaningful technology.
          </p>
        </motion.div>

        <div className="contact-grid">

          <motion.a
            href="mailto:pundbhavesh@gmail.com"
            className="contact-card glass-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="contact-icon">📧</div>

            <h3>Email</h3>

            <p>pundbhavesh@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/bhaveshpund"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="contact-icon">💼</div>

            <h3>LinkedIn</h3>

            <p>linkedin.com/in/bhaveshpund</p>
          </motion.a>

          <motion.a
            href="https://github.com/BHAVESH0704"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card glass-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="contact-icon">💻</div>

            <h3>GitHub</h3>

            <p>github.com/BHAVESH0704</p>
          </motion.a>

          <motion.a
            href="/Bhavesh_Pund_Resume.pdf"
            download
            className="contact-card glass-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className="contact-icon">📄</div>

            <h3>Resume</h3>

            <p>Download Resume</p>
          </motion.a>

        </div>

        <motion.div
          className="location"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          📍 Pune, Maharashtra, India
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;