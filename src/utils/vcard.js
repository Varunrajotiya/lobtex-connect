/**
 * Generates and triggers download of a .vcf (vCard) contact file.
 * Works fully offline — no backend required.
 */
export function downloadVCard({
  name,
  company,
  phone,
  phoneSecondary,
  email,
  website,
  address
}) {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${name}`,
    `ORG:${company}`,
    `TEL;TYPE=CELL:${phone}`
  ]
  if (phoneSecondary) lines.push(`TEL;TYPE=WORK:${phoneSecondary}`)
  if (email) lines.push(`EMAIL:${email}`)
  if (website) lines.push(`URL:${website}`)
  if (address) lines.push(`ADR;TYPE=WORK:;;${address}`)
  lines.push('END:VCARD')

  const vCardData = lines.join('\n')

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${name.replace(/\s+/g, '_')}.vcf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}

export default downloadVCard
