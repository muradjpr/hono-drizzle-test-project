import {config} from 'dotenv';
import {neon} from "@neondatabase/serverless";
config({
    path: '.env'
})
const dbUrl = process.env.DRIZZLE_DATABASE_URL ?? ''
export const client = neon(dbUrl)