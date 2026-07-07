import "../styles/Experience.css";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Freelance",
    role: "Software & Embedded Systems Developer",
    duration: "Jan 2025 – Present",
    description: [
      "Developed customized software, machine learning and IoT projects based on client requirements.",
      "Built full-stack web applications using React, Java, Spring Boot, SQL and Node.js.",
      "Designed embedded system prototypes using Arduino and Raspberry Pi Pico W.",
      "Integrated hardware and software for automation, monitoring and real-time visualization.",
      "Collaborated with clients to understand requirements and deliver complete solutions."
    ]
  },
  {
    company: "Sami Infotech",
    role: "Data Analytics & Python Intern",
    duration: "Virtual Internship",
    description: [
      "Developed a desktop Expense Tracker using Python, SQLite and Matplotlib.",
      "Implemented expense analytics and visualization dashboards.",
      "Strengthened software development and database management skills."
    ]
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>EXPERIENCE</p>

        <h2>
          Professional <span>Journey</span>
        </h2>

        <p className="section-description">
          Building software, embedded systems and intelligent solutions
          through internships, freelance work and real-world engineering projects.
        </p>
      </motion.div>

      <div className="experience-container">

        <div className="experience-grid">

          {experiences.map((exp, index) => (

            <motion.div
              key={exp.company}
              className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >

              <div className="experience-icon">
                <Briefcase size={28} />
              </div>

              <span className="experience-duration">
                {exp.duration}
              </span>

              <h3>{exp.company}</h3>

              <h4>{exp.role}</h4>

              <ul>

                {exp.description.map((item) => (

                  <li key={item}>{item}</li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;