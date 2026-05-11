const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function manageBooks() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("library");
    const books = db.collection("books");

    // Insert books
    await books.insertMany([
      { title: "Java Basics", author: "John", location: "Shelf A" },
      { title: "Node.js Guide", author: "Dean", location: "Shelf B" },
      { title: "Python 101", author: "Deepak", location: "Shelf D" },
      { title: "C++ Mastery", author: "Dean", location: "Shelf C" },
      { title: "Data Structures", author: "Ravi", location: "Shelf B" },
      { title: "React Handbook", author: "Derek", location: "Shelf D" }
    ]);

    console.log("Books inserted");

    // Update location of "Java Basics"
    await books.updateOne(
      { title: "Java Basics" },
      { $set: { location: "Shelf Z" } }
    );

    console.log("Updated Java Basics");

    // Update location of all books by Dean
    await books.updateMany(
      { author: "Dean" },
      { $set: { location: "Shelf E" } }
    );

    console.log("Updated Dean's books");

    // Delete "Python 101"
    await books.deleteOne({ title: "Python 101" });

    console.log("Deleted Python 101");

    // Delete books whose title starts with D
    await books.deleteMany({
      title: { $regex: "^D" }
    });

    console.log("Deleted books starting with D");

    // Show remaining books
    const remainingBooks = await books.find().toArray();
    console.log("Remaining books:");
    console.log(remainingBooks);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

manageBooks();