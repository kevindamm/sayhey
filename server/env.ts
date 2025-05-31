import { z } from 'zod'

import tryParseEnv from './try-parse-env'

const EnvSchema = z.object({
  CLOUDFLARE_ACCOUNT_ID: z.string(),
  CLOUDFLARE_DATABASE_ID: z.string(),
  CLOUDFLARE_TOKEN: z.string(),
  NUXT_KINDE_PASSWORD: z.string().optional(),
})

export type EnvSchema = z.infer<typeof EnvSchema>

tryParseEnv(EnvSchema)

export default EnvSchema.parse(process.env)
