import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const nextConfig: NextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})({
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false
  }
})

export default nextConfig