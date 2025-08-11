import dotenv from 'dotenv'

dotenv.config()

interface Config {
  nodeEnv: string
  port: number
}

const config: Config = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
}

export default config
