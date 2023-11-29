// Create a sample collection
const initialDB = db.getSiblingDB('lab2');

initialDB.createCollection("users");

// Insert some sample data into the collection
initialDB.users.insertMany([
  { username: "john_doe", email: "john.doe@example.com", age: 25 },
  { username: "jane_smith", email: "jane.smith@example.com", age: 30 },
  // Add more documents as needed
]);