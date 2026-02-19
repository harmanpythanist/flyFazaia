/** @type {import('next').NextConfig} */
const nextConfig = {cacheComponents:true,days: {
  stale: 604800,        // 7 days — fully fresh
  revalidate: 604800,   // 7 days — background refresh won't trigger early
  expire: 1209600,      // 14 days — hard expiration after 2 weeks
}
};

export default nextConfig;
