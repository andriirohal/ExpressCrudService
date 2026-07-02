# 🧩 Express CRUD Service

A REST API built with Node.js, Express, and TypeScript, following a layered architecture and using PostgreSQL for data persistence.

---

## ✨ Features

- Get all products
- Get product by ID
- Create new product
- Update product by ID
- Delete product by ID
- Type-safe with TypeScript
- PostgreSQL persistence

## 🛠️ Tech Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- pg (node-postgres)

---

## 📁 Project Structure

```txt
src/
├── config/         # DB pool (pg.Pool) and app configuration
├── controllers/     # Request handlers
├── middlewares/      # Express middlewares
├── routes/           # API route definitions
├── services/          # Business logic
├── types/             # TypeScript types/interfaces
├── app.ts              # Express app setup
└── server.ts            # Entry point
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18+ recommended)
- npm
- PostgreSQL (running locally or accessible remotely)

### 📦 Installation

```bash
git clone https://github.com/andriirohal/ExpressCrudService
cd ExpressCrudService
npm install
```

### 🗄️ Database Setup

Create the database in PostgreSQL:

```sql
CREATE DATABASE products_db;
```

The connection is configured in `src/config/pool.ts` using `pg.Pool`, reading credentials from environment variables:

```typescript
import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: Number(process.env.PGPORT) || 5432
});
```

Create a `.env` file in the project root (already gitignored):

```dotenv
PGUSER=andrii
PGHOST=localhost
PGPASSWORD=password
PGDATABASE=products_db
PGPORT=5432
```

Make sure your `products` table exists before running the app, e.g.:

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  stock INT NOT NULL
);
```

### ▶️ Running the project

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

---

## 📡 API Endpoints

| Method | Endpoint            | Description          |
|--------|----------------------|-----------------------|
| GET    | `/products`           | Get all products       |
| GET    | `/products/:id`        | Get product by ID       |
| POST   | `/products`             | Create a new product     |
| PATCH  | `/products/:id`          | Update product by ID      |
| DELETE | `/products/:id`          | Delete product by ID      |

---

## 📄 License

MIT
