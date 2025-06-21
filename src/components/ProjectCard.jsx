import React from 'react';
import '../styles/ProjectCard.scss';

const ProjectCard = ({ type, title, image, children }) => {
    return (
        <div className={`project-card ${type === 'overview' ? 'overview' : 'default'}`}>
            <div className="card-header">
                <img
                    src={image}
                    alt={`${title} illustration`}
                    tabIndex={`0`}
                    className={`card-image ${type === 'overview' ? 'rectangular' : 'circular'}`}
                />
                {type !== 'overview' && <h3 className="card-title">{title}</h3>}
            </div>

            {type === 'overview' && <h2 className="card-title">{title}</h2>}

            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default ProjectCard;
