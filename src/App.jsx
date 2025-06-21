import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDrawer from './components/ProjectDrawer';

import '../src/styles/main.scss';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDrawer = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`App ${selectedProject ? 'drawer-open' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <Projects onSelect={handleSelectProject} />
        <ProjectDrawer project={selectedProject} onClose={handleCloseDrawer} />
        <About />
        <Contact />
        
      </main>
    </div>
  );
}

export default App;




