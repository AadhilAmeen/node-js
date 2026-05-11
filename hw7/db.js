const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url)
  .then(client => {
    const db = client.db("mashupdb");
    const myobj = { name: "John Smith", course: "Python" };
    return db.collection("students").insertOne(myobj)
      .then(res => {
        console.log("1 document inserted");
        client.close();
      });
  })
  .catch(err => {
    console.error(err);
  });