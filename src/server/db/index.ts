import { drizzle } from "drizzle-orm/postgres-js";
import { customAlphabet } from "nanoid";
import postgres from "postgres";

import { env } from "~/env";
import * as dbSchema from "./schema";

export * from "drizzle-orm";
export const schema = { ...dbSchema };

export const db = drizzle(postgres(env.DATABASE_URL), { schema });

// Use custom alphabet without special chars for less chaotic, copy-able URLs
// Will not collide for a long long time: https://zelark.github.io/nano-id-cc/
export const genId = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 16);
