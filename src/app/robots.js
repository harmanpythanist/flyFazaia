// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/user',          // Keeps user profiles/account pages private
        '/courses/enroll', // Keeps the checkout/payment process private
        '/services/form',   // Keeps your lead/contact forms from being indexed
        '/api',           // Standard practice: hide your API routes
      ],
    },
    sitemap: 'https://fly-fazaia.vercel.app/sitemap.xml',
  }
}