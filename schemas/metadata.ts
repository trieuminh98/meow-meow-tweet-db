import { json, pgTable, serial } from 'drizzle-orm/pg-core';
import { SelectFile } from './file';

export const metadataTable = pgTable('metadatas', {
  id: serial('id').primaryKey().notNull(),
  slider: json('slider').$type<Slider>().default({
    title: '',
    images: []
  })
});

export type InsertMetadata = typeof metadataTable.$inferInsert;
export type SelectMetadata = typeof metadataTable.$inferSelect;
export type Slider = {
  title: string;
  images: SelectFile[];
};
