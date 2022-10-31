const database = require("./../../database/database");
const { MongoClient } = require("mongodb");

class User {
  async findAll() {
    const db = database();
    const collection = db.collection("users");
    const result = await collection.find({}).toArray();
    return result;
  }

  async findOne(userId) {
    const db = database();
    const collection = db.collection("users");
    const result = await collection.findOne({ _id: userId });
    console.log(result);
    return result;
  }
}

module.exports = new User();
