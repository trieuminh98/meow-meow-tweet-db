DO $$ BEGIN
 CREATE TYPE "public"."type" AS ENUM('scents', 'sizes');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "code" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" "type" NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "files" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullPath" text NOT NULL,
	"path" text NOT NULL,
	"storageId" text NOT NULL,
	"name" text NOT NULL,
	"size" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"type" text NOT NULL,
	"product_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"short_description" text NOT NULL,
	"price" integer NOT NULL,
	"sizes" integer[] NOT NULL,
	"scent" integer NOT NULL,
	"what_is_it" text NOT NULL,
	"how_to_use" text NOT NULL,
	"ingredients" text NOT NULL,
	"overview_description_title" text,
	"overview_description_content" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"additional_descriptions" json DEFAULT '[]'::json
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files" ADD CONSTRAINT "files_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
