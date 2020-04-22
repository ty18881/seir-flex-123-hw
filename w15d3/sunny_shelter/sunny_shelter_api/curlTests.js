// Create new items.
curl -X POST -H "Content-Type: application/json" -d '{"name":"Sparky", "species":"dog"}' http://localhost:3003/animals

// Index route
curl http://localhost:3003/animals

// Delete Route
curl -X DELETE http://localhost:3003/holidays/:id

// Update

curl -X PUT -H "Content-Type: application/json" -d '{"name":"New Name"}' http://localhost:3003/animals/:id