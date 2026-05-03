/*
Centralized image URLs for external CDN assets.
Change the base URL here to migrate all images at once.
*/

const CDN_BASE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663539899263/ksMQ8n93poZFxutxDkpq92";

export const images = {
  logo: "/logo.png",
  hero: `${CDN_BASE}/tawasul-hero-reference-KXBhV6o5abx44VVS7iZCc5.webp`,
  team: "/team.jpg",
  serviceNetwork: `${CDN_BASE}/tawasul-service-network-4rky5UqtEUaE9HBsanfJsh.webp`,
  contactLounge: `${CDN_BASE}/tawasul-contact-lounge-QmyERtjAo3nBqEcs4AtGuC.webp`,
} as const;
