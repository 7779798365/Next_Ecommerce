import {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  product_name: varchar("product_name").notNull(),
  product_image: varchar("product_image").notNull(),
  product_description: varchar("product_description").notNull(),
  product_price: integer("product_price").notNull(),
  product_quantity: integer("product_quantity").notNull(),
});

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  password: text("password").notNull(),
  token: text("token"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const db = drizzle(sql);
