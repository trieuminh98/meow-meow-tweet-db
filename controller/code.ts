import { eq } from 'drizzle-orm';
import db from '..';
import { CODE_TYPE, codeTable, InsertCode } from '../schemas/code';

export const insertCode = async (code: InsertCode) => {
  const data = await db.insert(codeTable).values(code).returning();
  return data;
};

export const updateCodeById = async (id: number, code: Partial<InsertCode>) => {
  const data = await db
    .update(codeTable)
    .set(code)
    .where(eq(codeTable.id, id))
    .returning();

  return data;
};

export const queryCodes = async () => {
  const result = await db.query.codeTable.findMany();
  return result;
};

export const queryCodeById = async (codeId: number) => {
  const result = await db.query.codeTable.findFirst({
    where: eq(codeTable.id, codeId)
  });
  return result;
};

export const queryCodeByType = async (type: CODE_TYPE) => {
  const result = await db.query.codeTable.findMany({
    where: eq(codeTable.type, type)
  });
  return result;
};
