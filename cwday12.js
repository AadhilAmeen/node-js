const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    // connect
    await client.connect();
    console.log("MongoDB connected");

    // database and collection
    const db = client.db("techWorkshop");
    const collection = db.collection("registrations");

    // sample data
    const sampleRegistrations = [
      { name: "John", city: "Trivandrum" },
      { name: "Deepak", city: "Kollam" },
      { name: "Dean", city: "Trivandrum" },
      { name: "Rahul", city: "Calicut" },
      { name: "Ashwin", city: "Calicut" },
      { name: "Rolly", city: "Alleppy" },
      { name: "Nikhil", city: "Kottayam" },
      { name: "Raymond", city: "Trivandrum" },
      { name: "Dean", city: "Calicut" }
    ];

    // insert
    await collection.insertMany(sampleRegistrations);
    console.log("Data inserted");

    // update John
    await collection.updateOne(
      { name: "John" },
      { $set: { name: "Johnny", city: "Chennai" } }
    );
    console.log("John updated");

    // update all Dean
    await collection.updateMany(
      { name: "Dean" },
      { $set: { city: "Kollam" } }
    );
    console.log("Dean updated");

    // delete Deepak
    await collection.deleteOne({ name: "Deepak" });
    console.log("Deepak deleted");

    // delete names starting with D
    await collection.deleteMany({
      name: { $regex: "^D" }
    });
    console.log("Names starting with D deleted");

    // final data
    const result = await collection.find().toArray();
    console.log("Final data:");
    console.log(result);

  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run();