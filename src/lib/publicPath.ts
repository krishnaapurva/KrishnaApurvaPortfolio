/**
 * Public folder URLs (e.g. /public/assets/profile.png) must respect Vite `base`.
 * On GitHub Pages project sites, root-relative "/assets/..." 404s — use this helper.
 */
export function publicPath(path: string): string {
  const base = import.meta.env.BASE_URL
  const clean = path.replace(/^\//, '')
  return `${base}${clean}`
}
