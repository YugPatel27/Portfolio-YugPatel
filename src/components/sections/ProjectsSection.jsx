import React, { useMemo, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/siteData';
import { generateProjectSchema, injectSchema } from '@/utils/schemaGenerator';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const SEGMENTS = [
  { label: 'All', value: null, tags: [] },
  { label: 'Dashboard', value: 'dashboard', tags: ['dashboard'] },
  { label: 'Web App', value: 'web', tags: ['web', 'fullstack'] },
  { label: 'Desktop', value: 'desktop', tags: ['desktop'] },
  { label: 'Mobile', value: 'mobile', tags: ['mobile'] },
  { label: 'IoT', value: 'iot', tags: ['iot'] },
];

const matchesSegment = (project, segmentValue) => {
  if (!segmentValue) return true;
  const segment = SEGMENTS.find((item) => item.value === segmentValue);
  if (!segment) return false;
  return segment.tags.includes(project.filterTag);
};

const ProjectScrollCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const num = (index + 1).toString().padStart(2, '0');

  return (
    <div ref={cardRef} className="relative md:sticky top-auto md:top-20 h-auto min-h-[auto] md:min-h-[640px] w-full max-w-5xl mx-auto">
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto h-full w-full flex flex-col gap-5 md:gap-6 rounded-[24px] border border-[#D7E2EA]/25 bg-[#0C0C0C]/80 backdrop-blur-sm p-5 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-visible"
      >
        <div className="flex flex-row flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/10 pb-4">
          <div className="flex flex-row items-center gap-4 sm:gap-6 min-w-0">
            <div className="shrink-0 font-black text-sky-300 leading-none text-4xl md:text-5xl">
              {num}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold uppercase tracking-widest text-sky-400 text-[10px] md:text-xs">
                {project.category}
              </span>
              <h3 className="font-bold uppercase text-white truncate text-xl md:text-2xl">
                {project.title}
              </h3>
            </div>
          </div>

          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-500/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-400 transition-colors"
            >
              <span className="hidden sm:inline">Live</span>
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </motion.a>
          )}

          {project.reportUrl && (
            <motion.a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 transition-colors"
            >
              <span className="hidden sm:inline">View</span>
              Report
            </motion.a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-6 flex-1 min-h-0 w-full">
          <div className="flex flex-col justify-start gap-4 h-full min-h-0 pr-0 md:pr-2">
            <p className="text-xs md:text-sm text-white/85 font-normal leading-relaxed">
              {project.description}
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">Project Notes</h4>
              <p className="mt-3 text-xs md:text-sm text-white/75 leading-relaxed">
                {project.detail}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 px-3 py-1 text-[11px] font-bold text-sky-400/90 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {project.features?.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">Key Features</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/75"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.challenges?.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-sky-400 uppercase">What I Solved</h4>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm text-white/70 leading-relaxed">
                    {project.challenges.slice(0, 2).map((challenge) => (
                      <li key={challenge} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-xl h-[300px] sm:h-[360px] md:h-full min-h-[280px] relative group border border-[#D7E2EA]/15 block"
          >
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-slate-950/25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_24%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-end justify-end p-6">
              <span className="text-[#D7E2EA] font-bold text-lg tracking-wide text-right line-clamp-2">
                {project.title}
              </span>
              <span className="text-sky-300/80 text-xs font-semibold uppercase tracking-widest mt-2">
                Explore Project
              </span>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
};

const SegmentFilter = ({ activeFilter, onFilterChange, counts }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex justify-center items-center mb-12 md:mb-16"
    >
      <div className="inline-flex gap-0 rounded-full border border-[#D7E2EA]/30 bg-[#0C0C0C]/50 backdrop-blur-sm p-1 overflow-x-auto max-w-full">
        {SEGMENTS.map((segment, idx) => (
          <motion.button
            key={segment.label}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onFilterChange(segment.value)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.05 }}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap rounded-full transition-all ${
              activeFilter === segment.value
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                : 'text-[#D7E2EA]/70 hover:text-[#D7E2EA]'
            }`}
          >
            {segment.label}
            <span className="ml-2 text-[10px] font-semibold opacity-70">
              {counts[segment.value ?? 'all'] ?? 0}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = React.useState(null);

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured).slice(0, 5), []);
  const moreProjects = useMemo(() => projects.filter((project) => !project.featured), []);

  const moreProjectsCounts = useMemo(() => {
    return SEGMENTS.reduce((acc, segment) => {
      acc[segment.value ?? 'all'] = segment.value
        ? moreProjects.filter((project) => matchesSegment(project, segment.value)).length
        : moreProjects.length;
      return acc;
    }, {});
  }, [moreProjects]);

  const filteredMoreProjects = useMemo(() => {
    if (!activeFilter) return moreProjects;
    return moreProjects.filter((project) => matchesSegment(project, activeFilter));
  }, [activeFilter, moreProjects]);

  useEffect(() => {
    const allProjects = [...featuredProjects, ...moreProjects];
    allProjects.forEach((project) => {
      try {
        injectSchema(generateProjectSchema(project));
      } catch (error) {
        console.error(`Failed to inject schema for project ${project.id}:`, error);
      }
    });
  }, [featuredProjects, moreProjects]);

  return (
    <section id="projects" className="relative z-10 w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-14 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10">
      <div className="mb-20 sm:mb-28 md:mb-32">
        <Reveal y={40}>
          <div className="text-center">
            <h2 className="font-black uppercase text-white leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              Projects
            </h2>
          </div>
        </Reveal>
      </div>

      {featuredProjects.length > 0 && (
        <div className="mb-24 md:mb-40">
          <Reveal y={40}>
            <div className="mb-16 md:mb-20">
              <div className="inline-flex rounded-full border border-sky-500/40 bg-sky-500/5 px-6 py-2.5">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Featured</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mt-6 leading-tight tracking-tight">
                Standout Projects
              </h2>
              <p className="text-[#D7E2EA]/70 text-sm md:text-base mt-4 max-w-2xl">
                Handpicked projects that showcase precision, creativity, and full-stack expertise.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto max-w-6xl relative pb-12">
            {featuredProjects.map((project, index) => (
              <ProjectScrollCard key={project.id} project={project} index={index} total={featuredProjects.length} />
            ))}
          </div>
        </div>
      )}

      {moreProjects.length > 0 && (
        <div>
          <Reveal y={40}>
            <div className="mb-16 md:mb-20">
              <div className="inline-flex rounded-full border border-[#D7E2EA]/40 bg-[#D7E2EA]/5 px-6 py-2.5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/80">Explore</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mt-6 leading-tight tracking-tight">
                More Projects
              </h2>
              <p className="text-[#D7E2EA]/70 text-sm md:text-base mt-4 max-w-2xl">
                Filter by technology to explore my complete portfolio across different domains.
              </p>
            </div>
          </Reveal>

          <SegmentFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} counts={moreProjectsCounts} />

          {activeFilter && (
            <Reveal y={20}>
              <p className="text-center text-[#D7E2EA]/80 text-xs md:text-sm mb-12 font-medium">
                Showing <span className="text-white font-bold">{filteredMoreProjects.length}</span> project
                {filteredMoreProjects.length !== 1 ? 's' : ''} in{' '}
                <span className="text-white font-bold">
                  {SEGMENTS.find((segment) => segment.value === activeFilter)?.label ?? 'All'}
                </span>
              </p>
            </Reveal>
          )}

          <div className="mx-auto max-w-6xl relative pb-12">
            {filteredMoreProjects.length > 0 ? (
              filteredMoreProjects.map((project, index) => (
                <ProjectScrollCard key={project.id} project={project} index={index} total={filteredMoreProjects.length} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-[#D7E2EA]/70 text-lg font-medium">
                  No projects found with <span className="text-white font-bold">{activeFilter}</span>
                </p>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
