import dotenv from 'dotenv';
dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT || '5000',
  APP_URL: process.env.APP_URL || `http://localhost`,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
}
