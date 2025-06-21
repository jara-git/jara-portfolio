import React, { useEffect, useRef, useState } from 'react';
import ProjectNav from './ProjectNav';
import ProjectCard from './ProjectCard';
import '../styles/ProjectDetail.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'goals', label: 'Goals' },
    { id: 'research', label: 'Research' },
    { id: 'approach', label: 'Approach' },
    { id: 'wireframes', label: 'Wireframes' },
    { id: 'design', label: 'Design & Screens' },
    { id: 'outcome', label: 'Outcome & Learnings' }
];

export default function ProjectDetail({ project, onClose }) {
    const [activeId, setActiveId] = useState('overview');
    const observer = useRef(null);

    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        if (!project) return;
        const handleScroll = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveId(entry.target.id);
            });
        };
        observer.current = new IntersectionObserver(handleScroll, {
            root: null,
            rootMargin: '0px 0px -60% 0px',
            threshold: 0.1
        });
        document.querySelectorAll('.project-section').forEach(sec =>
            observer.current.observe(sec)
        );
        return () => observer.current?.disconnect();
    }, [project]);

    const openLightbox = (images, start = 0) => {
        if (!Array.isArray(images) || images.length === 0) return;
        setLightboxImages(images);
        setLightboxIndex(start);
    };
    const closeLightbox = () => {
        setLightboxImages([]);
        setLightboxIndex(0);
    };
    const goPrevImage = e => {
        e.stopPropagation();
        setLightboxIndex(prev =>
            prev > 0 ? prev - 1 : lightboxImages.length - 1
        );
    };
    const goNextImage = e => {
        e.stopPropagation();
        setLightboxIndex(prev =>
            prev < lightboxImages.length - 1 ? prev + 1 : 0
        );
    };

    if (!project) return null;

    const sectionImages = {
        overview: project.image,
        challenge: '/assets/img-ProjectDetails/challenge.svg',
        goals: '/assets/img-ProjectDetails/goal.svg',
        research: '/assets/img-ProjectDetails/research.svg',
        approach: '/assets/img-ProjectDetails/approach.svg',
        wireframes: '/assets/img-ProjectDetails/wireframe.svg',
        design: '/assets/img-ProjectDetails/final-design.svg',
        outcome: '/assets/img-ProjectDetails/learning.svg'
    };

    const combinedDesign = (
        <>
            {project.finalDesign && <p>{project.finalDesign}</p>}
            {Array.isArray(project.finalScreens) && project.finalScreens.length > 0 && (
                <div className="screens">
                    {project.finalScreens.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Screenshot ${idx + 1}`}
                            className={`section-image-full ${project.finalScreens.length > 1 ? 'half-width' : 'full-width'}`}
                            onClick={() => openLightbox(project.finalScreens, idx)}
                        />
                    ))}
                </div>
            )}
        </>
    );

    const externalLinks = [
        project.demo && { url: project.demo, label: '🔗 Live Demo' },
        project.code && { url: project.code, label: '💻 Code' },
        project.figma && { url: project.figma, label: '🎨 Figma' }
    ].filter(Boolean);

    const combinedOutcome = (
        <>
            {project.outcome && <p>{project.outcome}</p>}
            {project.learnings && <p>{project.learnings}</p>}
        </>
    );

    return (
        <AnimatePresence>
            <motion.div
                className="project-detail-container"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <ProjectNav navItems={navItems} activeId={activeId} onClick={id => {
                    setActiveId(id);
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }} />

                <div className="project-detail-content">
                    <button className="close" onClick={onClose} aria-label="Close">
                        <X size={20} color="white" />
                    </button>

                    <h2>{project.title}</h2>
                    <div className="project-tags">
                        <span className="tag role">Role: {project.role}</span>
                        <span className="tag type">Type: {project.type}</span>
                        <span className="tag duration">Duration: {project.duration}</span>
                        {project.tools?.map((tool, i) => (
                            <span key={i} className="tag tool">{tool}</span>
                        ))}
                        {project.tags?.map((tag, i) => (
                            <span key={i} className="tag custom">{tag}</span>
                        ))}
                    </div>

                    <div className="project-grid">
                        <section id="overview" className="project-section">
                            <ProjectCard type="overview" title="Overview" image={sectionImages.overview}
                                links={
                                    [
                                        project.demo && { url: project.demo, label: '🔗 Live Demo' },
                                        project.code && { url: project.code, label: '💻 Code' }
                                    ].filter(Boolean)
                                }>

                                <p>{project.overview}</p>
                            </ProjectCard>
                        </section>

                        {project.challenge && (
                            <section id="challenge" className="project-section">
                                <ProjectCard title="Challenge" image={sectionImages.challenge}>
                                    <p>{project.challenge}</p>
                                    {project.challengeLink && (
                                        <a
                                            href={project.challengeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="external-link"
                                        >
                                            <ExternalLink size={16} /> View Problem Statement
                                        </a>
                                    )}
                                </ProjectCard>
                            </section>
                        )}


                        {project.goals && (
                            <section id="goals" className="project-section">
                                <ProjectCard title="Goals" image={sectionImages.goals}>
                                    <p>{project.goals}</p>
                                </ProjectCard>
                            </section>
                        )}

                        {project.research && (
                            <section id="research" className="project-section">
                                <ProjectCard title="Research" image={sectionImages.research} links={externalLinks}>
                                    <p>{project.research}</p>
                                </ProjectCard>
                            </section>
                        )}

                        {project.ideas && (
                            <section id="approach" className="project-section">
                                <ProjectCard title="Approach" image={sectionImages.approach} links={externalLinks}>
                                    <p>{project.ideas}</p>
                                </ProjectCard>
                            </section>
                        )}

                        {(project.wireframes || project.wireframeImage || project.wireframeLink) && (
                            <section id="wireframes" className="project-section">
                                <ProjectCard title="Wireframes / Mockups" image={sectionImages.wireframes} links={externalLinks}>
                                    {project.wireframes && (
                                        Array.isArray(project.wireframes)
                                            ? project.wireframes.map((text, i) => <p key={i}>{text}</p>)
                                            : <p>{project.wireframes}</p>
                                    )}
                                    {project.wireframeImage && (
                                        <img
                                            src={project.wireframeImage}
                                            alt="Wireframe"
                                            className="section-image-full"
                                            onClick={() => openLightbox([project.wireframeImage], 0)}
                                        />
                                    )}
                                    {project.wireframeLink && (
                                        <a
                                            href={project.wireframeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="external-link figma-link"
                                        >
                                            <ExternalLink size={16} /> View Prototype / Mockup
                                        </a>
                                    )}
                                </ProjectCard>
                            </section>
                        )}

                        {(project.finalDesign || (project.finalScreens && project.finalScreens.length > 0)) && (
                            <section id="design" className="project-section">
                                <ProjectCard title="Design & Screens" image={sectionImages.design} links={externalLinks}>
                                    {combinedDesign}
                                </ProjectCard>
                            </section>
                        )}

                        {(project.outcome || project.learnings) && (
                            <section id="outcome" className="project-section">
                                <ProjectCard title="Outcome & Learnings" image={sectionImages.outcome}>
                                    {combinedOutcome}
                                </ProjectCard>
                            </section>
                        )}
                    </div>

                    {externalLinks.length > 0 && (
                        <div className="project-external-links">
                            {externalLinks.map((link, i) => (
                                <a key={i} className="external-link" href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {lightboxImages.length > 0 && (
                    <div className="lightbox" onClick={closeLightbox}>
                        {lightboxImages.length > 1 && (
                            <button className="lightbox-nav left" onClick={goPrevImage} aria-label="Previous image">
                                <ArrowLeft size={30} color="white" />
                            </button>
                        )}
                        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                            <img src={lightboxImages[lightboxIndex]} alt={`Screenshot ${lightboxIndex + 1}`} />
                        </div>
                        {lightboxImages.length > 1 && (
                            <button className="lightbox-nav right" onClick={goNextImage} aria-label="Next image">
                                <ArrowRight size={30} color="white" />
                            </button>
                        )}
                        <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
                            <X size={24} color="white" />
                        </button>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
