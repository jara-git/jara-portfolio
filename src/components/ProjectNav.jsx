import React from 'react';
import '../styles/ProjectNav.scss';

export default function ProjectNav({ navItems, activeId, onClick }) {
    return (
        <nav className="project-nav">
            {navItems.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className={activeId === id ? 'active' : ''}
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(id);
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    {label}
                </a>
            ))}
        </nav>
    );
}
