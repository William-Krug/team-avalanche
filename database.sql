-- Team Avalance

-- database name: team_avalanche
-- database setup and test data creation

-- Drop Tables
--- Drop "users" table
DROP TABLE IF EXISTS "users" CASCADE;

--- Drop "permissions" table
DROP TABLE IF EXISTS "permissions";

--- Drop "images" table
DROP TABLE IF EXISTS "images";

--- Drop "events" table
DROP TABLE IF EXISTS "events";


-- Create Tables
--- Create "permissions" table
CREATE TABLE "permissions" (
  "id" SERIAL PRIMARY KEY,
  "role" VARCHAR(8)
);

--- Create "events" table
CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "event" VARCHAR(256)
);

--- Create "users" table
CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(16) UNIQUE NOT NULL,
  "password" VARCHAR(1024) NOT NULL,
  "authLevel" INT REFERENCES "permissions" DEFAULT 2  -- All users assigned a role of "user" by default when registering
);

-- Create "images" table
CREATE TABLE "images" (
  "id" SERIAL PRIMARY KEY,
  "event_id" INT REFERENCES "events" ON DELETE CASCADE,
  "url" VARCHAR(256)
);


-- Configure set tables
--- Set "permissions" levels
INSERT INTO "permissions"
  ("role")
VALUES
  ('Admin'),
  ('User');
  
--- Set "events" table
INSERT INTO "events"
  ("event")
VALUES
  ('Practice / Misc.'),
  ('NB Avalanche vs NB Lava'),
  ('AH Knights vs NB Avalanche'),
  ('FR Bandits vs NB Avalanche'),
  ('FR Pirates vs NB Avalanche'),
  ('NB Avalanche vs AH Mustangs'),
  ('MV Rapids vs NB Avalanche');