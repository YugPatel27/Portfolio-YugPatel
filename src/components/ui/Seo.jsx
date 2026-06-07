import { useEffect } from 'react';
import { createSectionMetaDescription, injectSchema } from '@/utils/schemaGenerator';

const defaults = {
  title: 'Yug Patel',
  description: 'Premium portfolio of Yug Patel - Full Stack Developer. Building scalable applications with React, Node.js, Django.',
};

/**
 * SEO Component for managing meta tags and structured data
 * @param {string} title - Page title
 * @param {string} description - Page meta description
 * @param {string} section - Section identifier for enhanced descriptions
 * @param {object} schema - Additional JSON-LD schema to inject
 */
export function Seo({ title, description, section, schema }) {
  useEffect(() => {
    const nextTitle = title ? `${title} | Yug Patel` : defaults.title;
    document.title = nextTitle;

    // Use section-specific description if available
    const metaDesc = description || (section && createSectionMetaDescription(section)) || defaults.description;

    const metaDescription =
      document.querySelector('meta[name="description"]') || createMeta('description');
    metaDescription.setAttribute('content', metaDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]') || createMeta('og:title', true);
    ogTitle.setAttribute('content', nextTitle);

    const ogDescription =
      document.querySelector('meta[property="og:description"]') || createMeta('og:description', true);
    ogDescription.setAttribute('content', metaDesc);

    const twitterCard =
      document.querySelector('meta[name="twitter:card"]') || createMeta('twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');

    // Inject additional schema if provided
    if (schema) {
      injectSchema(schema);
    }
  }, [description, title, section, schema]);

  return null;
}

function createMeta(name, property = false) {
  const meta = document.createElement('meta');
  if (property) {
    meta.setAttribute('property', name);
  } else {
    meta.setAttribute('name', name);
  }
  document.head.appendChild(meta);
  return meta;
}
