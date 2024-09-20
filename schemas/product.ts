import { AdditionalDescriptions } from '@/types/product';
import { relations } from 'drizzle-orm';
import {
  integer,
  json,
  pgTable,
  serial,
  text,
  timestamp
} from 'drizzle-orm/pg-core';
import { filesTable } from './file';

//Product Table
export const productsTable = pgTable('products', {
  id: serial('id').primaryKey().notNull(),
  name: text('name').notNull(),
  shortDescription: text('short_description').notNull(),
  price: integer('price').notNull(), // Numeric for price with 2 decimal places
  sizes: integer('sizes').array().notNull(),
  scent: integer('scent').notNull(),
  whatIsIt: text('what_is_it').notNull(),
  howToUse: text('how_to_use').notNull(),
  ingredients: text('ingredients').notNull(),
  overviewDescriptionTitle: text('overview_description_title'),
  overviewDescriptionContent: text('overview_description_content'),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow().notNull(),
  additionalDescriptions: json('additional_descriptions')
    .$type<AdditionalDescriptions[]>()
    .default([])
});

export const productRelations = relations(productsTable, ({ many }) => ({
  images: many(filesTable)
}));

export type InsertProduct = typeof productsTable.$inferInsert;
export type SelectProduct = typeof productsTable.$inferSelect;
