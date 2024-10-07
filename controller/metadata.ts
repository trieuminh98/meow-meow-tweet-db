import { eq } from 'drizzle-orm';
import db from '..';
import { InsertMetadata, metadataTable } from '../schemas/metadata';

export const queryFirstMetadata = async () => {
  const result = await db.query.metadataTable.findFirst();
  return result;
};

export const updateMetadataById = async (
  id: number,
  metadata: Partial<InsertMetadata>
) => {
  const data = await db
    .update(metadataTable)
    .set(metadata)
    .where(eq(metadataTable.id, id))
    .returning();

  return data;
};
