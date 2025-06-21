import React, { useRef, useState, useEffect } from 'react';
import '../styles/Projects.scss';
import projectList from '../data/projects'; // import data from projects

// Placeholder SVG as Data URI
const placeholderImage = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'>
  <rect width='400' height='300' fill='%23ddd' />
  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' 
    font-family='Arial, sans-serif' font-size='24' fill='%23999'>
    No Image
  </text>
</svg>`;

function Projects({ onSelect }) {
    const scrollRef = useRef(null);

    // States to show hide fades
    const [showLeftFade, setShowLeftFade] = useState(false);
    const [showRightFade, setShowRightFade] = useState(false);
    const [hovering, setHovering] = useState(false);

    // Function that checks overflow and scroll position
    const updateFade = () => {
        const el = scrollRef.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        // If scrollLeft > 0, we show fade-left
        setShowLeftFade(scrollLeft > 0);
        // If scrollLeft + clientWidth < scrollWidth, we show fade-right
        setShowRightFade(scrollLeft + clientWidth < scrollWidth - 1); // -1 for error margin
    };

    // Scroll wheel control for horizontal scrolling
    const handleWheel = e => {
        const el = scrollRef.current;
        if (el) {
            e.preventDefault();
            el.scrollLeft += e.deltaY;
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        
        updateFade();

        // Listeners for scroll and resize
        el.addEventListener('scroll', updateFade);
        window.addEventListener('resize', updateFade);

      

        return () => {
            el.removeEventListener('scroll', updateFade);
            window.removeEventListener('resize', updateFade);
        };
    }, []); // only mount/unmount

    return (
        <section className="projects-section" id="projects">
            <h2>Selected Projects</h2>
            <div
                className="scroll-container"
                ref={scrollRef}
                onWheel={handleWheel}
                onMouseEnter={() => { setHovering(true); updateFade(); }}
                onMouseLeave={() => setHovering(false)}
            >
                {/* Fade left, only if showLeftFade */}
                {showLeftFade && (
                    <div className="fade-left" />
                )}

                <div className="project-row">
                    {projectList.map(project => (
                        <div
                            key={project.id}
                            className="project-card"
                            onClick={() => onSelect(project)}
                            tabIndex={0} 
                        >
                            <img
                                src={project.image ? project.image : placeholderImage}
                                alt={project.title ? project.title : 'Project image'}
                            />
                            <h3>{project.title ? project.title : 'Untitled Project'}</h3>
                            <p className="project-summary">
                                {project.description ? project.description : 'No description available.'}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Fade right, only if showRightFade */}
                {showRightFade && (
                    <div className="fade-right" />
                )}
            </div>
        </section>
    );
}

export default Projects;


