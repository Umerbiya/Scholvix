import { MetadataRoute } from 'next';
import { getLatestScholarships } from '@/lib/firebase/firestore';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://scholvix.com';

  const sitemapEntries: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/scholarships`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/countries`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/universities`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/research`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  try {
    const scholarships = await getLatestScholarships(100);
    const scholarshipEntries = scholarships.map((scholarship) => ({
      url: `${baseUrl}/scholarships/${scholarship.id}`,
      lastModified: new Date(scholarship.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
    return [...sitemapEntries, ...scholarshipEntries];
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return sitemapEntries;
  }
}
