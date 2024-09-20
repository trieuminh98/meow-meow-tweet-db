import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { productsTable } from './product';

export const filesTable = pgTable('files', {
  id: serial('id').primaryKey().notNull(),
  fullPath: text('fullPath').notNull(),
  path: text('path').notNull(),
  storageId: text('storageId').notNull(),
  name: text('name').notNull(),
  size: integer('size').notNull(), // Numeric for price with 2 decimal places
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow().notNull(),
  type: text('type').notNull(),
  productId: integer('product_id').references(() => productsTable.id)
});

export const fileRelations = relations(filesTable, ({ one }) => ({
  product: one(productsTable, {
    fields: [filesTable.productId],
    references: [productsTable.id]
  })
}));

export type InsertFile = typeof filesTable.$inferInsert;
export type SelectFile = typeof filesTable.$inferSelect;
