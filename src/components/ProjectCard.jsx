import React from 'react';
import '../styles/ProjectCard.scss';

const ProjectCard = ({ type, title, image, children, links, onImageClick }) => {
    const isOverview = type === 'overview';

    return (
        <div className={`project-card ${isOverview ? 'overview' : 'default'}`}>
            <div className="card-header">
                <img
                    src={image}
                    alt={`${title} illustration`}
                    tabIndex="0"
                    className={`card-image ${isOverview ? 'rectangular' : 'circular'}`}
                    onClick={onImageClick}
                    style={onImageClick ? { cursor: 'zoom-in' } : {}}
                />
                {!isOverview && <h3 className="card-title">{title}</h3>}
            </div>

            {isOverview && <h2 className="card-title">{title}</h2>}

            <div className="card-content">{children}</div>

            {isOverview && links && links.length > 0 && (
                <div className="section-links">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="section-link"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
