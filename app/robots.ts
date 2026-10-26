import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://shri-siddhivinayaka-home-food.vercel.app/sitemap.xml',
  }
}
