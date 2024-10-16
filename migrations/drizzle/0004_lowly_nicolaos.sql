ALTER TABLE "metadatas" RENAME COLUMN "marqueeInfos" TO "marquee_infos";--> statement-breakpoint
ALTER TABLE "metadatas" ALTER COLUMN "marquee_infos" SET DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "metadatas" ADD COLUMN "video" jsonb;