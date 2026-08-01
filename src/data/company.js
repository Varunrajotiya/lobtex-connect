// Central company/owner configuration.
// Edit this file to update the entire site's identity, contact info, and copy.

import lobtexLogo from '../assets/images/lobtex-logo.png'
import coverImage from '../assets/images/cover.png'

const company = {
  ownerName: 'Shubham Gupta',
  companyName: 'The Lobtex Group',
  designation: 'Regional Sales Manager',
  tagline: 'Build Better. Build Stronger.',

  logo: lobtexLogo,
  coverImage,
  // No separate personal photo was provided, so the circular brand mark
  // doubles as the profile image on the card.
  profileImage: lobtexLogo,

  // Two contact numbers were on the physical card — primary is used for
  // tel:/WhatsApp links, both are shown in the Contact section.
  phone: '+91 74960-08384',
  phoneRaw: '917496008384',
  whatsappNumber: '917496008384',
  phoneSecondary: '+91 90500-25510',
  email: 'thelobtexgroup@gmail.com',
  website: '',

  address: 'Old Devsar Chungi, Opp. Vishwakarma Park, Bhiwani - 127021, Haryana',
  mapEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Old Devsar Chungi, Opp. Vishwakarma Park, Bhiwani, Haryana 127021') +
    '&output=embed',

  about: {
    title: 'About Us',
    short:
      'The Lobtex Group is a Bhiwani-based supplier of waterproofing, insulation, and building-hardware materials — serving contractors, builders, and fabricators with reliable stock and fast turnaround.',
    full:
      'The Lobtex Group is a Bhiwani-based supplier of waterproofing, insulation, and building-hardware materials — serving contractors, builders, and fabricators with reliable stock and fast turnaround. We deal in waterproofing tape, insulation bubble sheet, XLP, SDS and wing screws, ventilator fans, and the full range of polycarbonate products including profile roof sheets, louvers, and polycarbonate rolls, along with cutting blades and bolt fasteners. Reach out on WhatsApp or call us directly for pricing, stock availability, and bulk orders — our team responds quickly and works to get your project moving without delays.'
  },

  // Not shown on the public card (no bank/UPI details were provided) — kept
  // empty here only so the admin panel's Bank Details form doesn't break.
  // Fill these in via the admin panel if you want to re-enable a
  // Payment/Bank Details section on the public site.
  bank: {
    bankName: '',
    accountName: '',
    accountNumber: '',
    ifsc: '',
    upi: ''
  },
  qrCodeImage: '',

  footer: {
    version: 'v1.0.0',
    developerCredit: 'Digital Business Card',
    privacyPolicyUrl: '#'
  }
}

export default company
