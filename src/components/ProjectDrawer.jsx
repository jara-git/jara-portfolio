import React from 'react';
import ProjectDetail from './ProjectDetail';
import '../styles/ProjectDrawer.scss';

export default function ProjectDrawer({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="drawer-overlay" onClick={onClose}>
            <div className="drawer" onClick={(e) => e.stopPropagation()}>
                <ProjectDetail project={project} onClose={onClose} />
            </div>
        </div>
    );
}


