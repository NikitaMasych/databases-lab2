db.createUser({
  user: "mongo",
  pwd: "mongo",
  roles: [
    { role: "readWrite", db: "lab2" }
  ]
})

const db = db.getSiblingDB('lab2');

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "email", "passwordHash", "walletBalance"],
      properties: {
        username: { bsonType: "string" },
        email: { bsonType: "string" },
        passwordHash: { bsonType: "string" },
        walletBalance: { bsonType: "decimal" }
      }
    }
  }
});

db.createCollection("assets", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["assetName", "symbol"],
      properties: {
        assetName: { bsonType: "string" },
        symbol: { bsonType: "string" }
      }
    }
  }
});

db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userId", "assetId", "orderType", "quantity", "price", "status", "timestamp"],
      properties: {
        userId: { bsonType: "int" },
        assetId: { bsonType: "int" },
        orderType: { bsonType: "string" },
        quantity: { bsonType: "decimal" },
        price: { bsonType: "decimal" },
        status: { bsonType: "string" },
        timestamp: { bsonType: "date" }
      }
    }
  }
});