CREATE TABLE IF NOT EXISTS "metadatas" (
	"id" serial PRIMARY KEY NOT NULL,
	"slider" json DEFAULT '{"title":"","images":[]}'::json
);
