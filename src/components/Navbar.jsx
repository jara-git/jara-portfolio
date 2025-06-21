import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import Monogram from './Monogram';

function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = ['about', 'projects', 'contact'];

            let current = '';
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el && scrollY >= el.offsetTop - 100) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <Monogram />
            </a>
            <div className="nav-links">
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;

