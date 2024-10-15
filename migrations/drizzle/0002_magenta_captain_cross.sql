ALTER TABLE "metadatas" ALTER COLUMN "slider" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "metadatas" ALTER COLUMN "slider" SET DEFAULT '{"title":"","images":[]}'::jsonb;--> statement-breakpoint
ALTER TABLE "metadatas" ADD COLUMN "marqueeInfos" jsonb DEFAULT '[]'::jsonb;