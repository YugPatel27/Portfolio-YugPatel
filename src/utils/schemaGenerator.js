/**
 * Schema Generator Utility
 * Handles structured data and meta descriptions for SEO
 */

const sectionDescriptions = {
  about: 'Learn about Yug Patel - Full Stack Developer with expertise in React, Node.js, and Django. Building scalable, high-performance applications.',
  skills: 'Technical skills and expertise - React, JavaScript, Node.js, Python, Django, MongoDB, PostgreSQL, and more.',
  experience: 'Professional experience as a Full Stack Developer, building and shipping production applications.',
  projects: 'Featured projects showcasing full-stack development capabilities with React, Node.js, and modern web technologies.',
  contact: 'Get in touch with Yug Patel. Available for collaborations, freelance work, and new opportunities.',
  education: 'Education and certifications in full-stack web development and software engineering.',
  services: 'Services offered including web development, UI/UX design, and consulting.',
};

/**
 * Generate section-specific meta descriptions
 * @param {string} section - Section identifier
 * @returns {string} Meta description for the section
 */
export function createSectionMetaDescription(section) {
  return sectionDescriptions[section] || sectionDescriptions.about;
}

/**
 * Inject JSON-LD schema into document head
 * @param {object} schema - Schema object to inject
 */
export function injectSchema(schema) {
  if (!schema) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  
  // Remove existing schema of same type to avoid duplicates
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  const schemaType = schema['@type'];
  existingScripts.forEach(s => {
    try {
      const existing = JSON.parse(s.textContent);
      if (existing['@type'] === schemaType) {
        s.remove();
      }
    } catch (e) {
      // Skip malformed schemas
    }
  });

  document.head.appendChild(script);
}

/**
 * Generate Project JSON-LD schema
 * @param {object} project - Project data object
 * @returns {object} JSON-LD schema
 */
export function generateProjectSchema(project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: project.liveUrl || 'https://yugpatel.dev',
    image: project.image,
    author: {
      '@type': 'Person',
      name: 'Yug Patel',
      url: 'https://yugpatel.dev',
    },
    datePublished: project.date,
  };
}

/**
 * Generate Organization schema
 * @returns {object} JSON-LD schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yug Patel',
    url: 'https://yugpatel.dev',
    title: 'Full Stack Developer',
    image: 'https://yugpatel.dev/og-image.jpg',
    sameAs: [
      'https://linkedin.com/in/yugpatel',
      'https://github.com/yugpatel',
      'https://twitter.com/yugpatel',
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
  };
}

/**
 * Generate Breadcrumb schema
 * @param {array} breadcrumbs - Breadcrumb items
 * @returns {object} JSON-LD schema
 */
export function generateBreadcrumbSchema(breadcrumbs = []) {
  const items = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}
