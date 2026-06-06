import { useEffect } from 'react';

/**
 * Hook to audit and report missing image alt text
 * Useful for SEO and accessibility improvements
 */
export const useImageAltAudit = () => {
  useEffect(() => {
    const checkImages = () => {
      const images = document.querySelectorAll('img');
      const issues = [];
      
      images.forEach((img, index) => {
        if (!img.alt || img.alt.trim() === '') {
          issues.push({
            index,
            src: img.src,
            issue: 'Missing alt text',
            severity: 'high'
          });
        } else if (img.alt.length < 5) {
          issues.push({
            index,
            src: img.src,
            alt: img.alt,
            issue: 'Alt text too short',
            severity: 'medium'
          });
        }
      });
      
      if (issues.length > 0) {
        console.warn('🖼️ Image Alt Text Audit Results:', issues);
      }
      
      return issues;
    };

    // Run audit on component mount and after a delay to catch lazy-loaded images
    checkImages();
    const timer = setTimeout(checkImages, 2000);
    
    return () => clearTimeout(timer);
  }, []);
};

/**
 * Enhanced Image component with better alt text and error handling
 */
export const EnhancedImage = ({ 
  src, 
  alt = 'Image', 
  title, 
  loading = 'lazy',
  ...props 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title || alt}
      loading={loading}
      decoding="async"
      {...props}
    />
  );
};
