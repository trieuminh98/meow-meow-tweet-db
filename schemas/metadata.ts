import { jsonb, pgTable, serial } from 'drizzle-orm/pg-core'
import { SelectFile } from './file'

export const metadataTable = pgTable('metadatas', {
  id: serial('id').primaryKey().notNull(),
  slider: jsonb('slider').$type<Slider>().default({
    title: '',
    images: []
  }),
  marqueeInfos: jsonb('marquee_infos').$type<MarqueeInfos[]>().default([]),
  video: jsonb('video').$type<SelectFile>()
})

export type InsertMetadata = typeof metadataTable.$inferInsert
export type SelectMetadata = typeof metadataTable.$inferSelect
export type Slider = {
  title: string
  images: SelectFile[]
}

export type MarqueeInfos = {
  text: string
  link?: string
  linkDescription?: string
}
