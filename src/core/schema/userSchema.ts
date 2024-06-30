import {pgTable, serial, primaryKey, text} from "drizzle-orm/pg-core";

export const usersTable = pgTable('users', {
    id: serial('id').primaryKey(),
    email: text('email').unique(),
    username: text('username').unique()
})