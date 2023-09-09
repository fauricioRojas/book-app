/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  supabase: {
    client: {
      auth: {
        persistSession: false,
      },
    },
  },
};

module.exports = nextConfig;
