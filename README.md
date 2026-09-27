# Product CRUD API

A REST API to Create, Read, Update, and Delete products — with category/price filtering and pagination. Built with Node.js, Express, and MongoDB.

Built for the Syntecxhub Back-End Internship — Project 2.

---

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and add your MongoDB connection string:
```
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

3. Run the server:
```bash
npm run dev
```

---

## API Endpoints

Base URL: `http://localhost:5001/api/products`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/products` | Create a product |
| GET | `/api/products` | Get all products (supports filters below) |
| GET | `/api/products/:id` | Get one product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

**Example request body (POST/PUT):**
```json
{
  "name": "Wireless Mouse",
  "price": 25.99,
  "description": "Ergonomic wireless mouse",
  "category": "electronics"
}
```

### Filtering & pagination (GET all)

Add these as query params to `/api/products`:

| Param | Example | What it does |
|---|---|---|
| `category` | `?category=electronics` | Only products in that category |
| `minPrice` / `maxPrice` | `?minPrice=10&maxPrice=100` | Only products in that price range |
| `page` / `limit` | `?page=2&limit=5` | Pagination (defaults: page=1, limit=10) |

Example: `GET /api/products?category=electronics&minPrice=10&maxPrice=100&page=1&limit=5`

---

