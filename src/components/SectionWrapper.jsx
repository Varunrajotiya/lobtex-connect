import { motion } from 'framer-motion'

/**
 * Wraps each page section with consistent spacing, id (for anchor links),
 * and a fade/slide-up reveal animation triggered on scroll.
 */
export default function SectionWrapper({ id, title, subtitle, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`px-5 sm:px-8 mt-12 scroll-mt-20 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-5">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </motion.section>
  )
}
