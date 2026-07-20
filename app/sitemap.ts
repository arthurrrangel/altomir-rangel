import type { MetadataRoute } from 'next'
import { books } from '@/lib/books'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticUrls: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/altardanoite`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const bookUrls: MetadataRoute.Sitemap = books.map((b) => ({
    url: `${site.url}/livros/${b.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticUrls, ...bookUrls]
}
