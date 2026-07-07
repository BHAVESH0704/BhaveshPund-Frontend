import "../styles/Certifications.css";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useEffect, useState } from "react";

import { getCertifications } from "../api/certificationApi";

function Certifications() {

  const [certifications, setCertifications] = useState([]);

  useEffect(() => {

    const loadCertifications = async () => {

      try {

        const data = await getCertifications();
        setCertifications(data);

      } catch (error) {

        console.error("Failed to load certifications:", error);

      }

    };

    loadCertifications();

  }, []);

  return (

    <section className="certifications" id="certifications">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p>CERTIFICATIONS</p>

        <h2>
          Continuous <span>Learning</span>
        </h2>

        <p className="section-description">
          Professional certifications that reflect my commitment
          to continuous learning in software engineering, cloud,
          embedded systems and artificial intelligence.
        </p>

      </motion.div>

      <div className="certifications-container">

        <div className="certification-grid">

          {certifications.map((cert, index) => (

            <motion.div
              key={cert.title}
              className="certification-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >

              <div className="certificate-icon">

                <Award size={30} />

              </div>

              <span className="certificate-year">
                {cert.year}
              </span>

              <h3>{cert.title}</h3>

              <h4>{cert.organization}</h4>

              {cert.credentialUrl && (

                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                >
                  View Credential →
                </motion.a>

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Certifications;