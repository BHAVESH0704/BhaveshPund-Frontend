import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "evolution", label: "Journey" },
    { id: "featured-project", label: "Featured" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      className={scrolled ? "navbar scrolled" : "navbar"}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <div
        className="logo"
        onClick={() => scrollTo("home")}
      >
        <img src="/logo.png" alt="Bhavesh Logo" />
      </div>

      {/* Navigation Links */}
      <ul>
        {links.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={active === item.id ? "active" : ""}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Resume Button */}
      <a
        href="/Bhavesh_Pund_Resume.pdf"
        download
        className="resume-btn"
      >
        Resume
      </a>
    </motion.nav>
  );
}

export default Navbar;