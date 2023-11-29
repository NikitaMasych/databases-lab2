// Switch to our DB inside mongo cluster: 
const initialDB = db.getSiblingDB('lab2');

// Create a sample collection
initialDB.createCollection("users");

// Insert some sample data into the collection
initialDB.users.insertMany([
  { username: "john_doe", email: "john.doe@example.com", age: 25 },
  { username: "jane_smith", email: "jane.smith@example.com", age: 30 },
]);