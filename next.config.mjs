/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' https://cdn.tiny.cloud 'unsafe-eval' 'unsafe-inline' 'blob:'",
              "style-src 'self' 'unsafe-inline' https://cdn.tiny.cloud",
              "img-src 'self' data: https://*.firebaseapp.com https://*.firebaseio.com https://sp.tinymce.com https://www.google.com https://firebasestorage.googleapis.com",
              "connect-src 'self' https://firebasestorage.googleapis.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://www.googleapis.com https://cdn.tiny.cloud https://firestore.googleapis.com",
              "font-src 'self' https://cdn.tiny.cloud",
              "worker-src 'self' 'blob:'",
              "child-src 'self' 'blob:'",
            ].join('; '), // Join directives with semicolons and spaces
          },
        ],
      },
    ]
  },
}

export default nextConfig
