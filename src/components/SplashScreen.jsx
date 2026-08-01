import { motion } from 'framer-motion'
import company from '../data/company'

/**
 * Full-screen splash shown for ~2s on first load, then fades into the homepage.
 */
export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-brand-950 via-brand-900 to-brand-700"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.img
        src={company.logo}
        alt={`${company.companyName} logo`}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-glow"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <motion.p
        className="mt-5 text-white/90 font-display font-semibold tracking-wide text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {company.companyName}
      </motion.p>
      <motion.div
        className="mt-6 h-1 w-32 rounded-full bg-white/20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="h-full bg-white/90 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
