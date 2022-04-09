# Monsters API

This is an example of a REST API using CRUD.

Data extracted from:
https://mhw-db.com/monsters

# Instructions

1. Clone down this repo
2. Install dependencies
3. Run Server

# Endpoints

GET /monsters
GET /monsters/:id
POST /monsters
PUT /monsters/:id
DELETE /monsters/:id

# JSON Schema:

```
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String },
  species: { type: String }
```
