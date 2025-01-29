// mongoNative.js
const { MongoClient } = require('mongodb');

// Replace with your MongoDB connection string
const uri = "mongodb://127.0.0.1:27017"; // Local MongoDB
const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        const db = client.db("myDatabase");
        const collection = db.collection("myCollection");

        // Example: Insert a document
        const result = await collection.insertOne({ name: "John Doe", age: 30 });
        console.log("Inserted Document:", result);

        // Example: Find a document
        const document = await collection.findOne({ name: "John Doe" });
        console.log("Found Document:", document);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
}

connectToDatabase();
