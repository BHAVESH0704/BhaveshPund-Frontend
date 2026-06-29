import "../styles/Skills.css";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    technologies: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "Python",
    ],
  },
  {
    title: "Database",
    technologies: [
      "MySQL",
      "MongoDB",
      "Firebase",
      "SQLite",
    ],
  },
  {
    title: "Systems",
    technologies: [
      "Linux",
      "Git & GitHub",
      "Networking",
      "Docker",
    ],
  },
  {
    title: "Embedded",
    technologies: [
      "Arduino",
      "Raspberry Pi Pico W",
      "IoT",
      "Electronics",
    ],
  },
  {
    title: "Tools",
    technologies: [
      "VS Code",
      "IntelliJ IDEA",
      "Postman",
      "Power BI",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        <motion.p
          className="section-tag"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          SKILLS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technologies I
          <span> Work With</span>
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          I enjoy building applications across software,
          embedded systems and modern engineering technologies.
        </motion.p>

        <div className="skills-grid">

          {skills.map((category, index) => (

            <motion.div
              key={category.title}
              className="skill-card"
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >

              <h3>{category.title}</h3>

              <ul>

                {category.technologies.map((tech) => (

                  <motion.li
                    key={tech}
                    whileHover={{
                      x: 8,
                      color: "#60a5fa",
                    }}
                  >
                    {tech}
                  </motion.li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;