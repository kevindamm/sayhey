import { defineConfig } from 'drizzle-kit'
import env from '~/server/env'

export default defineConfig({
  dialect: 'sqlite',
  driver: 'd1-http',
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  migrations: { table: 'migrations' },
  dbCredentials: {
    accountId: env.CLOUDFLARE_ACCOUNT_ID,
    databaseId: env.CLOUDFLARE_DATABASE_ID,
    token: env.CLOUDFLARE_TOKEN,
  },
  casing: 'snake_case',
})
