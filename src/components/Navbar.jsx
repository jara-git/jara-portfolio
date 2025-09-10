import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.scss';
import Monogram from './Monogram';

function Navbar() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('');
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Actualiza sección activa
    React.useEffect(() => {
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
            setActiveSection(location.pathname.replace('/', ''));
        }
    }, [location]);

    return (
        <nav className={`navbar ${drawerOpen ? 'drawer-open' : ''}`}>
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <Monogram />
                </Link>
            </div>

            <div className="nav-links">
                <Link to="/" className={activeSection === '' ? 'active' : ''}>Home</Link>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
                <Link to="/playground" className={activeSection === 'playground' ? 'active' : ''}>Playground</Link>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
            </div>

            <button
                className="hamburger"
                onClick={() => setDrawerOpen(prev => !prev)}
                aria-label="Toggle menu"
            >
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </button>
        </nav>
    );
}

export default Navbar;
