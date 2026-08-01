import { motion } from 'framer-motion'
import company from '../data/company'
import coverImage from '../assets/images/cover.png'
import profileImage from '../assets/images/lobtex-logo.png'

export default function Hero() {
  return (
    <section className="relative">
      {/* Cover Banner */}
      <div className="relative h-56 sm:h-72 md:h-80 w-full overflow-hidden">
        <img
          src={coverImage}
          alt="Cover banner"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-light via-brand-950/30 to-brand-950/10" />
      </div>

      {/* Profile block */}
      <div className="relative px-5 sm:px-8 -mt-16 sm:-mt-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <img
            src={profileImage}
            alt={company.ownerName}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-soft object-cover bg-white"
          />
          {company.logo !== company.profileImage && (
            <img
              src={company.logo}
              alt={`${company.companyName} logo`}
              className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full border-2 border-white shadow-card bg-white"
            />
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-2xl sm:text-3xl font-bold text-slate-50"
        >
          {company.ownerName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="text-brand-50 font-semibold text-sm sm:text-base"
        >
          {company.designation} · {company.companyName}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mt-2 max-w-xs sm:max-w-md text-slate-500 text-sm sm:text-base italic"
        >
          "{company.tagline}"
        </motion.p>
      </div>
    </section>
  )
}
