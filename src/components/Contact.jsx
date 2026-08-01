import { Phone, Mail, MapPin } from 'lucide-react'
import company from '../data/company'
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="We'd love to hear from you">
      <div className="card p-5 space-y-4">
        <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex-shrink-0">
            <Phone size={18} />
          </span>
          <span className="text-sm sm:text-base text-slate-700">{company.phone}</span>
        </a>

        {company.phoneSecondary && (
          <a
            href={`tel:${company.phoneSecondary.replace(/[^\d+]/g, '')}`}
            className="flex items-center gap-3"
          >
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex-shrink-0">
              <Phone size={18} />
            </span>
            <span className="text-sm sm:text-base text-slate-700">{company.phoneSecondary}</span>
          </a>
        )}

        <a href={`mailto:${company.email}`} className="flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex-shrink-0">
            <Mail size={18} />
          </span>
          <span className="text-sm sm:text-base text-slate-700">{company.email}</span>
        </a>

        <div className="flex items-start gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex-shrink-0">
            <MapPin size={18} />
          </span>
          <span className="text-sm sm:text-base text-slate-700">{company.address}</span>
        </div>
      </div>

      <div className="mt-4 rounded-2xl overflow-hidden shadow-card h-56 sm:h-72">
        <iframe
          title="Google Maps Location"
          src={company.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </SectionWrapper>
  )
}
