import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Navbar.scss';
import Monogram from './Monogram';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Only for the main page
        if (location.pathname === '/') {
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
        } else {
            // For separate routes, activate the route name.
            setActiveSection(location.pathname.replace('/', ''));
        }
    }, [location]);

    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <Monogram />
            </a>
            <div className="nav-links">
                <a href="/" className={activeSection === '' ? 'active' : ''}>Home</a>
                <Link to="/#about" className={activeSection === 'about' ? 'active' : ''}>About</Link>
                <Link to="/#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</Link>
                <a href="/playground" className={activeSection === 'playground' ? 'active' : ''}>Playground</a>
                <Link to="/#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
