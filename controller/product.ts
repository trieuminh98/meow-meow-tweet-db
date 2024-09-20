'use server';
import { eq } from 'drizzle-orm';
import db from '..';
import { InsertProduct, productsTable } from '../schemas/product';

export const insertProduct = async (product: InsertProduct) => {
  const data = await db.insert(productsTable).values(product).returning();
  return data;
};

export const updateProductById = async (
  id: number,
  product: Partial<InsertProduct>
) => {
  const data = await db
    .update(productsTable)
    .set(product)
    .where(eq(productsTable.id, id))
    .returning();

  return data;
};

export const queryProductById = async (productId: number) => {
  const result = await db.query.productsTable.findFirst({
    with: {
      images: true
    },
    where: eq(productsTable.id, productId)
  });
  return result;
};

export const queryProducts = async () => {
  const result = await db.query.productsTable.findMany({
    with: {
      images: true
    }
  });
  return result;
};
