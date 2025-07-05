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

    const [fadeState, setFadeState] = useState({
        left1: false, right1: false,
        left2: false, right2: false
    });

    const updateFade = (ref, leftKey, rightKey) => {
        const el = ref.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        setFadeState(prev => ({
            ...prev,
            [leftKey]: scrollLeft > 0,
            [rightKey]: scrollLeft + clientWidth < scrollWidth - 1
        }));
    };

    const handleWheel = (ref, leftKey, rightKey) => (e) => {
        const el = ref.current;
        if (el) {
            el.scrollLeft += e.deltaY;
            updateFade(ref, leftKey, rightKey);
        }
    };

    useEffect(() => {
        updateFade(scrollRef1, 'left1', 'right1');
        updateFade(scrollRef2, 'left2', 'right2');

        const handleResize = () => {
            updateFade(scrollRef1, 'left1', 'right1');
            updateFade(scrollRef2, 'left2', 'right2');
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const realProjects = projectList.filter(p =>
        p.tags.includes('Client Project')
    );

    const otherProjects = projectList.filter(p =>
        p.tags.some(tag => ['Technical Challenge', 'Hackathon', 'Early Work'].includes(tag))
    );

    return (
        <section className="projects-section" id="projects">
            <div className="section-container">
                <h2>Selected Projects</h2>
                <div
                    className={`scroll-container 
                        ${fadeState.left1 ? 'has-fade-left' : ''} 
                        ${fadeState.right1 ? 'has-fade-right' : ''}`}
                    ref={scrollRef1}
                    onWheel={handleWheel(scrollRef1, 'left1', 'right1')}
                    onScroll={() => updateFade(scrollRef1, 'left1', 'right1')}
                >
                    <div className="fade-left" />
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
                    <div className="fade-right" />
                </div>
            </div>

            <div className="section-container">
                <h2 className="challenges-early-work-title">UX Challenges & Early Work</h2>
                <div
                    className={`scroll-container 
                        ${fadeState.left2 ? 'has-fade-left' : ''} 
                        ${fadeState.right2 ? 'has-fade-right' : ''}`}
                    ref={scrollRef2}
                    onWheel={handleWheel(scrollRef2, 'left2', 'right2')}
                    onScroll={() => updateFade(scrollRef2, 'left2', 'right2')}
                >
                    <div className="fade-left" />
                    <div className="project-row">
                        {otherProjects.map(project => {
                            const tag = project.tags.find(t =>
                                ['Technical Challenge', 'Hackathon', 'Early Work'].includes(t)
                            );
                            return (
                                <div
                                    key={project.id}
                                    className="project-card"
                                    onClick={() => onSelect(project)}
                                >
                                    <span className={`project-badge ${tag?.toLowerCase().replace(' ', '-')}`}>
                                        {tag}
                                    </span>
                                    <img
                                        src={project.image || placeholderImage}
                                        alt={project.title}
                                    />
                                    <h3>{project.title}</h3>
                                    <p className="project-summary">{project.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="fade-right" />
                </div>
            </div>
        </section>
    );
}

export default Projects;
