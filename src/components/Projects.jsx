import React, { useRef, useState, useEffect } from 'react';
import '../styles/Projects.scss';
import projectList from '../data/projects';

const placeholderImage = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'>
  <rect width='400' height='300' fill='%23ddd' />
  <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' 
    font-family='Arial, sans-serif' font-size='24' fill='%23999'>
    No Image
  </text>
</svg>`;

function Projects({ onSelect }) {
    const scrollRef1 = useRef(null);
    const scrollRef2 = useRef(null);

    const [showLeftFade1, setShowLeftFade1] = useState(false);
    const [showRightFade1, setShowRightFade1] = useState(false);
    const [showLeftFade2, setShowLeftFade2] = useState(false);
    const [showRightFade2, setShowRightFade2] = useState(false);

    const updateFade = (ref, setLeft, setRight) => {
        const el = ref.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        setLeft(scrollLeft > 0);
        setRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    const handleWheel = (ref) => (e) => {
        const el = ref.current;
        if (el) {
            e.preventDefault();
            el.scrollLeft += e.deltaY;
        }
    };

    useEffect(() => {
        updateFade(scrollRef1, setShowLeftFade1, setShowRightFade1);
        updateFade(scrollRef2, setShowLeftFade2, setShowRightFade2);

        const handleResize = () => {
            updateFade(scrollRef1, setShowLeftFade1, setShowRightFade1);
            updateFade(scrollRef2, setShowLeftFade2, setShowRightFade2);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const realProjects = projectList.filter(p =>
        p.tags.includes('Client Project')
    );

    const otherProjects = projectList.filter(p =>
        p.tags.some(tag => ['UX Challenge', 'Hackathon', 'Early Work'].includes(tag))
    );

    return (
        <section className="projects-section" id="projects">
            <h2>Selected Projects</h2>
            <div
                className="scroll-container"
                ref={scrollRef1}
                onWheel={handleWheel(scrollRef1)}
                onScroll={() => updateFade(scrollRef1, setShowLeftFade1, setShowRightFade1)}
            >
                {showLeftFade1 && <div className="fade-left" />}
                <div className="project-row">
                    {realProjects.map(project => (
                        <div
                            key={project.id}
                            className="project-card"
                            onClick={() => onSelect(project)}
                            tabIndex={0}
                        >
                            <span className="project-badge client">Client</span>
                            <img
                                src={project.image || placeholderImage}
                                alt={project.title || 'Project image'}
                            />
                            <h3>{project.title || 'Untitled Project'}</h3>
                            <p className="project-summary">{project.description || 'No description available.'}</p>
                        </div>
                    ))}
                </div>
                {showRightFade1 && <div className="fade-right" />}
            </div>

            <h2>UX Challenges & Early Work</h2>
            <div
                className="scroll-container"
                ref={scrollRef2}
                onWheel={handleWheel(scrollRef2)}
                onScroll={() => updateFade(scrollRef2, setShowLeftFade2, setShowRightFade2)}
            >
                {showLeftFade2 && <div className="fade-left" />}
                <div className="project-row">
                    {otherProjects.map(project => {
                        const tag = project.tags.find(t =>
                            ['UX Challenge', 'Hackathon', 'Early Work'].includes(t)
                        );
                        return (
                            <div key={project.id} className="project-card" onClick={() => onSelect(project)}>
                                <span className={`project-badge ${tag?.toLowerCase().replace(' ', '-')}`}>{tag}</span>
                                <img src={project.image || placeholderImage} alt={project.title} />
                                <h3>{project.title}</h3>
                                <p className="project-summary">{project.description}</p>
                            </div>
                        );
                    })}
                </div>
                {showRightFade2 && <div className="fade-right" />}
            </div>
        </section>
    );
}

export default Projects;
