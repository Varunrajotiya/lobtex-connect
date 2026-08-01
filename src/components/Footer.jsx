import company from '../data/company'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-14 pb-28 px-5 sm:px-8 text-center">
      <div className="border-t border-slate-200 pt-6">
        <p className="text-slate-500 text-xs sm:text-sm">
          © {year} {company.companyName}. All rights reserved.
        </p>
        <p className="text-slate-400 text-xs mt-1">{company.footer.developerCredit}</p>
        <div className="flex items-center justify-center gap-3 mt-3 text-xs text-slate-400">
          <a href={company.footer.privacyPolicyUrl} className="hover:text-brand-700 transition-colors">
            Privacy Policy
          </a>
          <span>·</span>
          <span>{company.footer.version}</span>
        </div>
      </div>
    </footer>
  )
}
