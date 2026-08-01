import company from '../data/company'

/**
 * Opens WhatsApp with a predefined, URL-encoded message.
 * Used by Services, Products, Quick Actions, and Floating Nav.
 *
 * @param {string} message - The message to prefill in WhatsApp.
 * @param {string} [number] - Optional override for the WhatsApp number.
 */
export function sendWhatsApp(message, number = company.whatsappNumber) {
  const encodedMessage = encodeURIComponent(message)
  const url = `https://wa.me/${number}?text=${encodedMessage}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default sendWhatsApp
