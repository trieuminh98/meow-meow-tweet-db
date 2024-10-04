import { pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export enum CODE_TYPE {
  SCENTS = 'scents',
  SIZES = 'sizes'
}

export const typeEnum = pgEnum('type', [CODE_TYPE.SCENTS, CODE_TYPE.SIZES])

export const codeTable = pgTable('code', {
  id: serial('id').primaryKey().notNull(),
  type: typeEnum('type').notNull(),
  title: text('title').notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow().notNull()
})

export type InsertCode = typeof codeTable.$inferInsert
export type SelectCode = typeof codeTable.$inferSelect
