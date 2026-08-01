import { motion } from 'framer-motion'
import { Phone, MessageCircle, Share2, UserPlus } from 'lucide-react'
import company from '../data/company'
import sendWhatsApp from '../utils/whatsapp'
import downloadVCard from '../utils/vcard'
import shareSite from '../utils/share'

/**
 * Always-visible bottom navigation bar for quick access to core actions on mobile.
 */
export default function FloatingNav() {
  const items = [
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
      label: 'Save',
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
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md sm:hidden"
      aria-label="Quick actions"
    >
      <div className="glass rounded-3xl shadow-soft flex items-center justify-around py-2.5 px-2">
        {items.map(({ label, icon: Icon, onClick }) => (
          <button
            key={label}
            onClick={onClick}
            className="ripple flex flex-col items-center gap-1 px-3 py-1.5 rounded-2xl active:scale-90 transition-transform"
            aria-label={label}
          >
            <Icon size={20} className="text-brand-700" />
            <span className="text-[10px] font-medium text-slate-600">{label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
