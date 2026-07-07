import "../styles/Publications.css";
import { motion } from "framer-motion";

const publications = [
  {
    type: "IJCRT • Published",
    title:
      "An Efficient Solar-Based Electric Vehicle Charging Station With Remote Monitoring Interface",
    description:
      "Published in the International Journal of Creative Research Thoughts (IJCRT). The paper presents the design and implementation of a solar-powered EV charging station integrated with remote monitoring capabilities.",
    tags: ["Solar Energy", "IoT", "Embedded Systems", "EV Charging"],
    published: true,
    link: "/IJCRT26A4372.pdf",
  },
  {
    type: "Scopus Indexed • Accepted",
    title:
      "An Intelligent Solar-Powered EV Charging Station with Remote Supervisory Interface",
    description:
      "Accepted for presentation. The publication process is currently underway and the final paper will be available after publication.",
    tags: [
      "Research",
      "Renewable Energy",
      "Battery Management",
      "Monitoring",
    ],
    published: false,
    link: "",
  },
];

function Publications() {
  return (
    <section className="publications" id="publications">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>RESEARCH</p>

        <h2>
          Publications & <span>Research</span>
        </h2>

        <p className="section-description">
          Transforming academic research into practical engineering
          solutions through renewable energy, IoT and embedded systems.
        </p>
      </motion.div>

      <div className="publication-grid">

        {publications.map((paper, index) => (

          <motion.div
            key={paper.title}
            className="publication-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
          >

            <span className="publication-type">
              {paper.type}
            </span>

            <h3>{paper.title}</h3>

            <p>{paper.description}</p>

            <div className="publication-tags">

              {paper.tags.map((tag) => (

                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.08 }}
                >
                  {tag}
                </motion.span>

              ))}

            </div>

            {paper.published ? (

              <motion.a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-btn"
                whileHover={{ x: 6 }}
              >
                Read Paper →
              </motion.a>

            ) : (

              <span className="publication-btn disabled">
                Publication Pending
              </span>

            )}

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Publications;