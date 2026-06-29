import "../styles/Evolution.css";
import { motion } from "framer-motion";

import {
  Code2,
  Laptop2,
  Cpu,
  SunMedium,
  FlaskConical,
  Rocket,
} from "lucide-react";

const evolution = [
  {
    year: "2022",
    title: "Programming Foundations",
    icon: <Code2 size={30} />,
    description:
      "Started programming with Python and developed a strong problem-solving foundation.",
    skills: ["Python"],
  },
  {
    year: "2023",
    title: "Software Development",
    icon: <Laptop2 size={30} />,
    description:
      "Built my first software projects including Expense Tracker and Weather Forecast.",
    skills: ["Python", "SQLite", "GUI"],
  },
  {
    year: "2024",
    title: "Embedded & IoT",
    icon: <Cpu size={30} />,
    description:
      "Built Bluetooth Home Automation while learning Java, IoT and Data Science.",
    skills: ["Arduino", "Java", "HC-05", "IoT"],
  },
  {
    year: "2025",
    title: "Engineering Solutions",
    icon: <SunMedium size={30} />,
    description:
      "Started SolarCharge and KisanGPT while developing the complete software dashboard.",
    skills: ["React", "Next.js", "Firebase"],
  },
  {
    year: "2026",
    title: "Research & Innovation",
    icon: <FlaskConical size={30} />,
    description:
      "Built SolarCharge hardware, integrated sensors, published IJCRT & Scopus research papers and explored AI & Machine Learning.",
    skills: ["Research", "Hardware", "AI", "ML"],
  },
  {
    year: "Future",
    title: "Intelligent Systems",
    icon: <Rocket size={30} />,
    description:
      "Building products that combine Software Engineering, Embedded Systems and Artificial Intelligence.",
    skills: ["Spring Boot", "Linux", "Cloud"],
  },
];

function Evolution() {
  return (
    <section className="evolution" id="evolution">
      <div className="container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>ENGINEERING EVOLUTION</p>

          <h2>
            Curiosity became <span>Engineering</span>
          </h2>

          <p className="section-description">
            Every year I challenged myself to master a completely new
            discipline, and each challenge became the foundation for the next.
          </p>
        </motion.div>

        <div className="timeline">

          {evolution.map((item, index) => (

            <motion.div
              key={item.year}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
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
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >

              <motion.div
                className={`timeline-card glass-card ${
                  item.year === "2025" ? "highlight" : ""
                }`}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                }}
              >

                <span className="timeline-year">
                  {item.year}
                </span>

                <div className="timeline-card-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="tags">

                  {item.skills.map((skill) => (

                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.08,
                      }}
                    >
                      {skill}
                    </motion.span>

                  ))}

                </div>

              </motion.div>

              <motion.div
                className="timeline-icon"
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                {item.icon}
              </motion.div>

            </motion.div>

          ))}

        </div>

        <motion.div
          className="journey-ending"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <h3>The Journey Continues...</h3>

          <p>
            Every challenge became the foundation for the next one.
            My goal is to build intelligent systems that seamlessly
            connect Software, Embedded Engineering and Artificial
            Intelligence.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Evolution;