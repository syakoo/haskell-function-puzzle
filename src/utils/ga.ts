export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// ___________
//
export const isValidGA = (GAID?: string): GAID is string => {
  if (!GAID) return false
  if (process.env.NODE_ENV !== 'production') return false

  return true
}

export const pageViewEvent = (
  path: string,
  { shallow }: { shallow: boolean }
) => {
  if (!isValidGA(GA_TRACKING_ID) || shallow) return

  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
  })
}
