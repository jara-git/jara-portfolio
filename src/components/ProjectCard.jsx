import React from 'react';
import '../styles/ProjectCard.scss';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ type, title, image, children, links }) => {
    return (
        <div className={`project-card ${type === 'overview' ? 'overview' : 'default'}`}>
            <div className="card-header">
                <img
                    src={image}
                    alt={`${title} illustration`}
                    tabIndex="0"
                    className={`card-image ${type === 'overview' ? 'rectangular' : 'circular'}`}
                />
                {type !== 'overview' && <h3 className="card-title">{title}</h3>}
            </div>

            {type === 'overview' && <h2 className="card-title">{title}</h2>}

            <div className="card-content">
                {children}
            </div>

            {type === 'overview' && links && links.length > 0 && (
                <div className="section-links">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="section-link"
                        >
                            <ExternalLink size={14} style={{ marginRight: '4px' }} />
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
