const { ObjectId } = require("mongodb");
const database = require("./../../database/database");

class User {
  async findAll() {
    const db = database();
    const collection = db.collection("users");
    const result = await collection.find({}).toArray();
    return result;
  }

  async findOne(id) {
    const db = database();
    const collection = db.collection("users");
    const result = await collection.findOne({ _id: ObjectId(id) });
    return result;
  }

  async createOne(data) {
    const db = database();
    const collection = db.collection("users");
    const result = await collection.insertOne(data);
    return result;
  }
}

module.exports = User;
