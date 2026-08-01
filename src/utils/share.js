/**
 * Shares the current page using the native Web Share API.
 * Falls back to copying the URL to clipboard on unsupported browsers.
 * Returns a status string so the caller can show appropriate feedback.
 */
export async function shareSite({ title, text, url = window.location.href } = {}) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url })
      return 'shared'
    } catch (err) {
      if (err?.name === 'AbortError') return 'cancelled'
      // fall through to clipboard fallback on failure
    }
  }

  try {
    await navigator.clipboard.writeText(url)
    return 'copied'
  } catch {
    return 'failed'
  }
}

export default shareSite
