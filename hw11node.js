// file: leads.js

const { MongoClient } = require("mongodb");

// MongoDB connection URL
const url = "mongodb://127.0.0.1:27017";

// Create MongoDB client
const client = new MongoClient(url);

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Use database mashupdb
    const db = client.db("mashupdb");

    // Create collection leads
    const collection = db.collection("leads");

    // Insert 8 leads
    const leadsData = [
      { name: "John", city: "Trivandrum" },
      { name: "Rahul", city: "Calicut" },
      { name: "Dean", city: "Trivandrum" },
      { name: "Deepak", city: "Kollam" },
      { name: "Ashwin", city: "Calicut" },
      { name: "Rolly", city: "Alleppy" },
      { name: "Nikhil", city: "Kottayam" },
      { name: "Raymond", city: "Trivandrum" }
    ];

    await collection.insertMany(leadsData);

    console.log("Leads inserted successfully");

    // Find only leads from Calicut
    const calicutLeads = await collection.find(
      { city: "Calicut" },
      { projection: { _id: 0, name: 1 } }
    ).toArray();

    console.log("\nLeads from Calicut:");

    // Print only names
    calicutLeads.forEach((lead) => {
      console.log(lead.name);
    });

  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run();