import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDrawer from './components/ProjectDrawer';
import Playground from './pages/Playground/Playground';

import '../src/styles/main.scss';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => setSelectedProject(project);
  const handleCloseDrawer = () => setSelectedProject(null);

  return (
    <Router>
      <div className={`App ${selectedProject ? 'drawer-open' : ''}`}>
        <Navbar />
        <Routes>
          {/* Main page */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Projects onSelect={handleSelectProject} />
                <ProjectDrawer project={selectedProject} onClose={handleCloseDrawer} />
                <About />
                <Contact />
              </main>
            }
          />

          {/* Playground Page */}
          <Route
            path="/playground"
            element={<Playground />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




