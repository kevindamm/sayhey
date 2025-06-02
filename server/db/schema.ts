// Copyright 2025 Kevin Damm
// MIT License
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the “Software”), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// github:KevinDamm/sayhey/server/db/schema.ts

// import { drizzle } from 'drizzle-orm/d1'
import * as sql from 'drizzle-orm/sqlite-core'
import { createSelectSchema, createInsertSchema, createUpdateSchema } from 'drizzle-zod'

export const users = sql.sqliteTable('users', {
  uid: sql
    .integer({ mode: 'number' })
    .primaryKey({ autoIncrement: true }),

  name: sql.text().notNull(),
  // ...
})

export const SelectUserSchema = createSelectSchema(users)

export const InsertUserSchema = createInsertSchema(users, {
  name: field => field.min(5).max(63),
})

export const notes = sql.sqliteTable('notes', {
  noteid: sql
    .integer({ mode: 'number' })
    .primaryKey({ autoIncrement: true }),

  title: sql.text(),
  author: sql.text().references(() => users.uid),
  body: sql.text().notNull(),
  object: sql.text(),

  created: sql.integer({ mode: 'timestamp_ms' }),
  updated: sql.integer({ mode: 'timestamp_ms' }),
})

export const SelectNoteSchema = createSelectSchema(notes)

export const InsertNoteSchema = createInsertSchema(notes, {
  title: field => field.max(255),
  body: field => field.min(5),
}).omit({
  noteid: true,
  created: true,
  updated: true,
})

export const EnlivenNoteSchema = createUpdateSchema(notes, {
  title: field => field.max(255),
  body: field => field.min(5),
}).omit({
  noteid: true,
  author: true,
  object: true,
  created: true,
  updated: true,
})
