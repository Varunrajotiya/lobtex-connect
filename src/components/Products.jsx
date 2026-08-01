import { motion } from 'framer-motion'
import products from '../data/products'
import sendWhatsApp from '../utils/whatsapp'
import SectionWrapper from './SectionWrapper'

/**
 * Products are simply clickable image cards — NOT an eCommerce catalog.
 * Clicking any card opens WhatsApp with that product's predefined message.
 */
export default function Products() {
  return (
    <SectionWrapper id="products" title="Our Work" subtitle="Tap any card to enquire on WhatsApp">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {products.map((product, i) => (
          <motion.button
            key={product.id}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => sendWhatsApp(product.message)}
            className="ripple text-left card overflow-hidden group"
            aria-label={`Enquire about ${product.title} on WhatsApp`}
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-slate-900 text-sm">{product.title}</h3>
              {product.subtitle && (
                <p className="text-slate-500 text-xs mt-0.5">{product.subtitle}</p>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </SectionWrapper>
  )
}
