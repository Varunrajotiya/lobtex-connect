import { motion } from 'framer-motion'
import services from '../data/services'
import sendWhatsApp from '../utils/whatsapp'
import SectionWrapper from './SectionWrapper'

export default function Services() {
  return (
    <SectionWrapper id="services" title="Our Services" subtitle="What we bring to your space">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-display font-semibold text-slate-900">{service.title}</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{service.description}</p>
              <button
                onClick={() => sendWhatsApp(service.message)}
                className="ripple mt-4 w-full rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white text-sm font-medium py-2.5 active:scale-95 transition-transform"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
