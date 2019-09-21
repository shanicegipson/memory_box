
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


--creates pics table
CREATE TABLE "pics" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250),
	"description" VARCHAR (500)
)

--creates vid table
CREATE TABLE "vid" (
   "id" SERIAL PRIMARY KEY,
	"path" VARCHAR (350),
	"description" VARCHAR (500)
);

--creates junction table
CREATE TABLE "memories" (
   "id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"pics_id" INT REFERENCES "pics",
	"vid_id" INT REFERENCES "vid"
);


INSERT INTO "pics" (path, description)
VALUES
('thisisatesturl', 'this is a test description');

INSERT INTO "pics" (path)
VALUES
('thisisatesturlthesecondtime');



