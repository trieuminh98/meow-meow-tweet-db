'use server';
import { eq, inArray } from 'drizzle-orm';
import db from '..';
import { InsertFile, filesTable } from '../schemas/file';

export const insertFile = async (file: InsertFile) => {
  const data = await db.insert(filesTable).values(file).returning();
  return data;
};

export const updateFile = async (id: number, file: Partial<InsertFile>) => {
  const data = await db
    .update(filesTable)
    .set(file)
    .where(eq(filesTable.id, id))
    .returning();

  return data;
};

export const getFiles = async (id: number[]) => {
  const data = await db
    .select()
    .from(filesTable)
    .where(inArray(filesTable.id, id));

  return data;
};
