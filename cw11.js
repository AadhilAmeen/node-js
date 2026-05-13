// file: leadTracker.js

const { MongoClient } = require("mongodb");

// MongoDB connection URL
const url = "mongodb://127.0.0.1:27017";

// Create client
const client = new MongoClient(url);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Use mashupdb database
    const db = client.db("mashupdb");

    // Use leads collection
    const collection = db.collection("leads");

    // Step 1: Insert leads
    const leads = [
      { name: "Arjun", city: "Kannur" },
      { name: "Meera", city: "Kochi" },
      { name: "Lakshmi", city: "Calicut" }
    ];

    await collection.insertMany(leads);

    console.log("Leads inserted successfully");

    // Step 2: Find first lead from Kochi
    const result = await collection.findOne(
      { city: "Kochi" },
      { projection: { _id: 0, name: 1, city: 1 } }
    );

    console.log("\nFirst lead from Kochi:");
    console.log(result);

  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run();