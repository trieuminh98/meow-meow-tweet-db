import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as codeSchema from './schemas/code';
import * as fileSchema from './schemas/file';
import * as productSchema from './schemas/product';

const client = postgres(process.env.DATABASE_URL ?? '');
const db = drizzle(client, {
  schema: {
    ...fileSchema,
    ...productSchema,
    ...codeSchema
  }
});

export default db;
