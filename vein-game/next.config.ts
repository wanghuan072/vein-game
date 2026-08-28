import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy content and image paths stay valid without adding runtime
      // transformations to locally stored Markdown.
      {
        source: '/images/guide/guide19-02.webp',
        destination: '/images/guide/guide01.webp',
        permanent: true,
      },
      {
        source: '/images/guide/guide20-02.webp',
        destination: '/images/guide/guide20.webp',
        permanent: true,
      },
      {
        source: '/vein-guides/vein-game-mining-guide-where-to-get-graphite-hematite',
        destination: '/vein-guides/vein-game-mining-guide-graphite-hematite',
        permanent: true,
      },
      {
        source: '/ein-game-improved-pickaxe-ultimate-mining-guide',
        destination: '/vein-guides/vein-game-improved-pickaxe-ultimate-mining-guide',
        permanent: true,
      },
      {
        source: '/vein-guides/here-is-the-plain-text-markdown-version-of-the-guide',
        destination: '/vein-guides/vein-water-power-wells-solar-winter-guide',
        permanent: true,
      },
      {
        source: '/de/vein-guides/here-is-the-plain-text-markdown-version-of-the-guide',
        destination: '/de/vein-guides/vein-wasser-strom-brunnen-solar-winter-guide',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }]
  },
}

export default nextConfig
