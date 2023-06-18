import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  routeRules: {
    '/': {
      prerender: true,
    },
  },

  // modules: ['@sidebase/nuxt-auth']
})