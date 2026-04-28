export function buildPagePathname(slug?: string) {
  if (!slug) return '/';
  return `/${encodeURIComponent(slug)}`;
}
