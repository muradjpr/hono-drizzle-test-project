import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DRIZZLE_DATABASE_URL ?? '',
    },
    schema: "./src/core/schema/*",
    out: './drizzle',
    strict: true,
    verbose: true
})
