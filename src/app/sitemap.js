import { fetch_fnx } from "@/server_fetch/fetch";

// app/sitemap.js
export default async function sitemap() {
  const baseUrl = 'https://fly-fazaia.vercel.app';

  // 1. Static Pages (Manually listed)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // 2. Dynamic Courses (Fetched from your Database API)
  let coursePages = [];
  try {
   
    let get=await fetch_fnx("seo-sitemap")
  
console.log(get);

    coursePages = get?.data?.map((course) => ({
      url: `${baseUrl}/courses/${encodeURIComponent(course.title)}`,
      lastModified: new Date(course.updatedAt || new Date()),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Sitemap fetch failed:', error);
    // If the API fails, the sitemap will still show the static pages
  }

  return [...staticPages, ...coursePages];
}