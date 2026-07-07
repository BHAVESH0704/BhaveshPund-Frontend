import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Evolution from "./pages/Evolution";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import FeaturedProject from "./pages/FeaturedProject";
import Skills from "./pages/Skills";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import ProtectedRoute from "./admin/components/ProtectedRoute";

// Admin Pages
import AdminProjects from "./admin/pages/Projects";
import AdminSkills from "./admin/pages/Skills";
import AdminExperience from "./admin/pages/Experience";
import AdminEducation from "./admin/pages/Education"; 
import AdminCertifications from "./admin/pages/Certifications";
import AdminAbout from "./admin/pages/About";
import AdminContact from "./admin/pages/Contact";


function Portfolio() {

  return (

    <>

      <ScrollProgress />

      <BackToTop />

      <Navbar />

      <main>

        <Home />

        <About />

        <Evolution />

        <Experience />

        <Certifications />

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

function App() {

  return (

    <Routes>

      {/* Public Portfolio */}

      <Route
        path="/"
        element={<Portfolio />}
      />

      {/* Admin Login */}

      <Route
        path="/admin/login"
        element={<Login />}
      />

      {/* Admin Dashboard */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin Projects */}

      <Route
        path="/admin/projects"
        element={
          <ProtectedRoute>
            <AdminProjects />
          </ProtectedRoute>
        }
      />

      {/* Admin Skills */}

      <Route
        path="/admin/skills"
        element={
          <ProtectedRoute>
            <AdminSkills />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/experience"
         element={
            <ProtectedRoute>
              <AdminExperience />
            </ProtectedRoute>
    }
      />

      <Route
          path="/admin/education"
          element={
            <ProtectedRoute>
              <AdminEducation />
            </ProtectedRoute>
          }
      />    

      <Route
    path="/admin/certifications"
    element={
        <ProtectedRoute>
            <AdminCertifications />
        </ProtectedRoute>
    }
/>
      <Route
    path="/admin/about"
    element={
        <ProtectedRoute>
            <AdminAbout />
        </ProtectedRoute>
    }
/>

<Route
    path="/admin/contact"
    element={
        <ProtectedRoute>
            <AdminContact />
        </ProtectedRoute>
    }
/>

    </Routes>

  );

}

export default App;