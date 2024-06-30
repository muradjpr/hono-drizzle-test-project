CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" serial NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
