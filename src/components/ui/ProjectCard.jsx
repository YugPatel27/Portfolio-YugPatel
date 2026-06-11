import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';

export const ProjectCard = React.forwardRef(function ProjectCard({ project, onOpen, delay = 0 }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      layoutId={`project-${project.id}`}
      className="project-card glass-card"
      style={{ '--card-accent': project.accent }}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10, scale: 1.012 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
    >
      <button
        type="button"
        className="project-card__preview"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.title} details`}
      >
        <motion.div
          className="project-card__art"
          style={{ background: project.accent }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
        <div className="project-card__glow" aria-hidden="true" />
        <motion.div
          className="project-card__overlay"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <span>View Case Study</span>
          <FaArrowRight aria-hidden="true" focusable="false" />
        </motion.div>
      </button>

        <div className="project-card__content">
        <div className="project-card__topline">
          <p>{project.category}</p>
          {project.featured ? <span>Featured</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p className="project-card__tagline">{project.tieLine}</p>
        <p>{project.summary}</p>
        <div className="project-card__chips">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-card__actions">
          <button type="button" className="text-link" onClick={() => onOpen(project)}>
            Details
          </button>
          <a
          href={project.demoUrl ?? '#projects'}
          className="text-link"
          target={project.demoUrl?.startsWith('http') ? '_blank' : undefined}
          rel={project.demoUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          Live Demo
        </a>
        </div>
      </div>
    </motion.article>
  );
});
