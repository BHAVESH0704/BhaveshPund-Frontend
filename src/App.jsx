import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Evolution from "./pages/Evolution";
import FeaturedProject from "./pages/FeaturedProject";
import Skills from "./pages/Skills";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <ScrollProgress />

      <BackToTop />

      <Navbar />

      <main>
        <Home />

        <About />

        <Evolution />

        <FeaturedProject />

        <Skills />

        <Publications />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;