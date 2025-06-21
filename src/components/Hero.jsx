import React from 'react';
import '../styles/Hero.scss';
import { motion } from 'framer-motion';

const wave = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            type: 'spring',
            stiffness: 60,
        },
    }),
};


const AnimatedHeadline = ({ text }) => (
  <h1 className="hero-title">
    {text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        custom={i}
        initial="hidden"
        animate="visible"
        variants={wave}
        style={{
          display: 'inline-block',
          marginRight: '0.35em',
          whiteSpace: 'nowrap',
        }}
      >
        {word}
      </motion.span>
    ))}
  </h1>
);



function Hero() {
    return (
        <section className="hero">
            <AnimatedHeadline text="I believe in design that listens before it speaks." />
            <p>I'm Jara, a UX/UI designer creating digital experiences with meaning and strategy.</p>

            <a className="cta-button button button--primary " target="_blank" rel="noopener noreferrer" href="mailto:linia-design@gmail.com">Connect with me</a>
        </section>
    );
}

export default Hero;

