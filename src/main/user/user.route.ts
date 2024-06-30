import {Hono} from "hono";
import {drizzle} from "drizzle-orm/neon-http";
import {client} from "../../core/db/db";
import {usersTable} from "../../core/schema/userSchema";
import {getTableColumns} from "drizzle-orm";
import {zValidator} from "@hono/zod-validator";
import {userModel} from "./user.model";
const app = new Hono();
const db  = drizzle(client, {schema: {...usersTable}})


app.post('/',zValidator('json', userModel), async (c)=> {
    const parsedBody = userModel.parse(await c.req.json())
    console.log( c.req.json())
    const newUser = await db.insert(usersTable).values({email: parsedBody.email, username: parsedBody.username}).returning()
    return c.json({
        data: newUser
    })
})

app.get('/',async c=> {
    const users = await db.select().from(usersTable)
    return c.json({
        data: users
    })
})



export  default app;