import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import company from '../data/company'
import SectionWrapper from './SectionWrapper'

export default function About() {
  const [expanded, setExpanded] = useState(false)
  const { title, short, full } = company.about

  return (
    <SectionWrapper id="about" title={title}>
      <div className="card p-5">
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {expanded ? full : short}
        </p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-brand-700 font-semibold text-sm"
          aria-expanded={expanded}
        >
          {expanded ? 'Read Less' : 'Read More'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={16} />
          </motion.span>
        </button>
      </div>
    </SectionWrapper>
  )
}
