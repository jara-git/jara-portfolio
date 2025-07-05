import React from 'react';
import '../styles/About.scss';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-inner">
                <h2>Design Philosophy</h2>
                <p className="philosophy-text">
                    I believe in designing experiences that not only look good but also serve a purpose. My approach blends empathy, strategy, and creativity to craft interfaces that are meaningful and usable. Design, for me, is what makes a product speak, function, and belong. I design to connect people with systems, ideas with forms, function with meaning.

                    I see design not as decoration, but as a quiet force that guides, reveals, and simplifies. It’s not about imposing a style, but about listening, distilling, and giving form to something that was already there, waiting to emerge. I move between the digital and the physical, the visual and the spatial, always working with clarity and intention, while leaving room for beauty and intuition.

                    With fifteen years of experience across different disciplines —UI/UX and front-end development, set design, architecture, and visual arts— I bring a multidisciplinary lens to each project. I believe that good design lives at the intersection of logic and emotion, and my goal is to shape digital spaces that are both thoughtful and alive.
                </p>

                <h2>Skills & Strengths</h2>
                <div className="skills-set">
                    {[
                        {
                            className: 'strategic',
                            icon: '/assets/icons-about/strategic-thinker.svg',
                            title: 'Strategic thinker',
                            text: 'Able to see the big picture while navigating the details. Naturally inclined to structure, prioritize and give direction.'
                        },
                        {
                            className: 'analytical-intuitive',
                            icon: '/assets/icons-about/analytical-intuitive.svg',
                            title: 'Analytical & intuitive',
                            text: 'Quick to learn, curious by nature, and with a deep drive to understand how things work — and how to improve them.'
                        },
                        {
                            className: 'multidisciplinary',
                            icon: '/assets/icons-about/multidisciplinary.svg',
                            title: 'Multidisciplinary',
                            text: 'Trained architect and experienced scenographer and digital designer. Skilled in spatial, visual and interaction design.'
                        },
                        {
                            className: 'empathic-communicator',
                            icon: '/assets/icons-about/empathic-communicator.svg',
                            title: 'Empathic communicator',
                            text: 'Strong in storytelling and human insight. I create meaningful narratives and translate abstract ideas into grounded, human-centered solutions.'
                        },
                        {
                            className: 'tools',
                            icon: '/assets/icons-about/tools.svg',
                            title: 'Tools',
                            text: 'Figma, Adobe CC (Ps, Ai, Id), HTML5, CSS3, basic JS, Rhino, SketchUp.'
                        },
                        {
                            className: 'languages',
                            icon: '/assets/icons-about/languages.svg',
                            title: 'Languages',
                            text: 'Spanish (native), English (fluent), German (B1–B2).'
                        }
                    ].map(({ className, icon, title, text }) => (
                        <div key={className} className={`skill-item ${className}`}>
                            <img src={icon} alt={`${title} icon`} />
                            <div className="skill-text">
                                <strong>{title}</strong> – {text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
