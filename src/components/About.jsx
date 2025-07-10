import React from 'react';
import '../styles/About.scss';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-inner">
                <h2>Design Philosophy</h2>
                <p className="philosophy-text">
                    I believe designing experiences is not just about visual appeal — it must serve a purpose.
                </p>
                <p className="philosophy-text">
                    For me, design is what makes any product — whether a simple object or a complex system — work, speak, and belong.
                </p>
                <p className="philosophy-text">
                    When I create interfaces, I draw on empathy, strategy, and creativity to give them meaning and usefulness. I design to connect people with systems, ideas with form, and function with intent — from the abstract to the concrete, from the intangible to the tangible.
                </p>
                <p className="philosophy-text">
                    Design, to me, is not mere decoration. It carries a message, a structure — a layer that simplifies what's inside, helping us understand and use it.
                </p>
                <p className="philosophy-text">
                    That’s why I don’t like to impose a style as if it were a whim. I begin by listening: what is the need, the function, the purpose, who is it for? Layer by layer, I strip things down until the solution starts to emerge.
                </p>
                <p className="philosophy-text">
                    I move between the digital and the physical, the spatial and the visual — always with clarity and intention, while leaving room for beauty and intuition.
                </p>
                <p className="philosophy-text">
                    With 15 years of experience across disciplines — UI/UX and front-end development, scenography, architecture, and visual arts — I approach each project from a multifaceted perspective.
                </p>
                <p className="philosophy-text">
                    I believe good design breathes at the intersection of logic and emotion. My goal is to shape digital spaces that are thoughtful — and alive.
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
