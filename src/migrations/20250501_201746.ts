import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('de');
  CREATE TABLE IF NOT EXISTS "services_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph_title" varchar NOT NULL,
  	"paragraph" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "courses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"date" timestamp(3) with time zone,
  	"max_attendees" numeric,
  	"location" varchar,
  	"price" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "room_image" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "team_members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"mail" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "contact_reasons" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"reason" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "schedule" ALTER COLUMN "content" SET DATA TYPE varchar;
  ALTER TABLE "team_image" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "services_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "courses_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "room_image_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "team_members_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "contact_reasons_id" integer;
  DO $$ BEGIN
   ALTER TABLE "services_paragraphs" ADD CONSTRAINT "services_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "room_image" ADD CONSTRAINT "room_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "team_members" ADD CONSTRAINT "team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "services_paragraphs_order_idx" ON "services_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "services_paragraphs_parent_id_idx" ON "services_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "services_image_idx" ON "services" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "courses_updated_at_idx" ON "courses" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "courses_created_at_idx" ON "courses" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "room_image_image_idx" ON "room_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "room_image_updated_at_idx" ON "room_image" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "room_image_created_at_idx" ON "room_image" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "team_members_image_idx" ON "team_members" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "team_members_updated_at_idx" ON "team_members" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "team_members_created_at_idx" ON "team_members" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "contact_reasons_updated_at_idx" ON "contact_reasons" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "contact_reasons_created_at_idx" ON "contact_reasons" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_room_image_fk" FOREIGN KEY ("room_image_id") REFERENCES "public"."room_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_members_fk" FOREIGN KEY ("team_members_id") REFERENCES "public"."team_members"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_reasons_fk" FOREIGN KEY ("contact_reasons_id") REFERENCES "public"."contact_reasons"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_courses_id_idx" ON "payload_locked_documents_rels" USING btree ("courses_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_room_image_id_idx" ON "payload_locked_documents_rels" USING btree ("room_image_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_team_members_id_idx" ON "payload_locked_documents_rels" USING btree ("team_members_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contact_reasons_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_reasons_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "courses" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "room_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "team_members" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_reasons" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "services_paragraphs" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "courses" CASCADE;
  DROP TABLE "room_image" CASCADE;
  DROP TABLE "team_members" CASCADE;
  DROP TABLE "contact_reasons" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_services_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_courses_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_room_image_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_team_members_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_contact_reasons_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_services_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_courses_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_room_image_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_team_members_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_contact_reasons_id_idx";
  ALTER TABLE "schedule" ALTER COLUMN "content" SET DATA TYPE jsonb;
  ALTER TABLE "team_image" DROP COLUMN IF EXISTS "title";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "services_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "courses_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "room_image_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "team_members_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "contact_reasons_id";
  DROP TYPE "public"."_locales";`)
}
