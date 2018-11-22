// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
// const nextOffline = require('next-offline')
// const path = require('path')
// const withPlugins = require('next-compose-plugins')

// module.exports = withPlugins(
//   [
//     [nextOffline, ['!', PHASE_DEVELOPMENT_SERVER]]
//   ],
//   {
//     webpack: config => {
//       config.resolve.modules = [
//         path.resolve('./src'),
//         path.resolve('./public'),
//         'node_modules'
//       ]
//       return config
//     },
//     // Other Next.js config here...
//   }
// )


// next.config.js
const path = require('path')
const withOffline = require('next-offline')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = withOffline({
  publicRuntimeConfig: {
    api: isDev ? 'http://localhost:3000' : typeof window !== 'undefined' ? '' : process.env.NOW_URL,
    googleAnalytics: isDev ? '' : 'UA-45226320-5',
    isDev,
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
})
