import React from 'react';
import '../styles/_buttons.scss';

export default function ExternalButton({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button"
        >
            <img src={icon} alt="icon external link" />
            <span>{label}</span>
        </a>
    );
}