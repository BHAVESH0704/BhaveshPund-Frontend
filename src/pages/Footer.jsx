import "../styles/Footer.css";
import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <motion.div
        className="container footer-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* Brand */}

        <div className="footer-brand">

          <motion.h2
            whileHover={{ scale: 1.03 }}
          >
            Bhavesh <span>Pund</span>
          </motion.h2>

          <p>
            Building intelligent systems through Software,
            Embedded Engineering and Artificial Intelligence.
          </p>

        </div>

        {/* Navigation */}

        <div className="footer-links">

          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (

            <motion.a
              key={item.name}
              href={item.link}
              whileHover={{
                y: -3,
                color: "#60a5fa",
              }}
            >
              {item.name}
            </motion.a>

          ))}

        </div>

        {/* Social */}

        <div className="footer-social">

          <motion.a
            href="mailto:pundbhavesh@gmail.com"
            whileHover={{ y: -3 }}
          >
            Email
          </motion.a>

          <motion.a
            href="https://github.com/BHAVESH0704"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
          >
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/bhaveshpund"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
          >
            LinkedIn
          </motion.a>

        </div>

      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        © {year} Bhavesh Pund • Built with React & ❤️
      </motion.div>

    </footer>
  );
}

export default Footer;