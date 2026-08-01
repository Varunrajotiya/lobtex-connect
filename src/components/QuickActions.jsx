import { motion } from 'framer-motion'
import { Phone, PhoneCall, MessageCircle, Mail, MapPin, UserPlus, Share2 } from 'lucide-react'
import company from '../data/company'
import sendWhatsApp from '../utils/whatsapp'
import downloadVCard from '../utils/vcard'
import shareSite from '../utils/share'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function QuickActions() {
  const actions = [
    {
      label: 'Call',
      icon: Phone,
      onClick: () => (window.location.href = `tel:${company.phoneRaw}`)
    },
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      onClick: () => sendWhatsApp(`Hi, I found your business card. I would like to connect with ${company.companyName}.`)
    },
    {
      label: 'Email',
      icon: Mail,
      onClick: () => (window.location.href = `mailto:${company.email}`)
    },
    {
      label: 'Call 2',
      icon: PhoneCall,
      onClick: () => (window.location.href = `tel:${company.phoneSecondary.replace(/[^\d+]/g, '')}`)
    },
    {
      label: 'Location',
      icon: MapPin,
      onClick: () =>
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`,
          '_blank',
          'noopener,noreferrer'
        )
    },
    {
      label: 'Save Contact',
      icon: UserPlus,
      onClick: () =>
        downloadVCard({
          name: company.ownerName,
          company: company.companyName,
          phone: company.phone,
          phoneSecondary: company.phoneSecondary,
          email: company.email,
          website: company.website,
          address: company.address
        })
    },
    {
      label: 'Share',
      icon: Share2,
      onClick: () =>
        shareSite({
          title: company.companyName,
          text: `Check out ${company.companyName}'s digital business card`
        })
    }
  ]

  return (
    <section className="px-5 sm:px-8 mt-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-4 sm:grid-cols-7 gap-3"
      >
        {actions.map(({ label, icon: Icon, onClick }) => (
          <motion.button
            key={label}
            variants={itemVariants}
            onClick={onClick}
            className="ripple flex flex-col items-center justify-center gap-2 rounded-2xl bg-white card py-3.5 px-1 hover:shadow-soft active:scale-95 transition-all"
            aria-label={label}
          >
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white">
              <Icon size={18} strokeWidth={2.25} />
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-slate-600 text-center leading-tight">
              {label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </section>
  )
}
