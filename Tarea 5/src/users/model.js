const database = require("./../../database/database");

class User {
  async findAll(collection) {
    const db = database();
    const collection = db.collection(collection);
    const result = await collection.find({}).toArray();
    return result;
  }

  async findOne(id, collection) {
    const db = database();
    const collection = db.collection(collection);
    const result = await collection.findOne({ _id: id });
    console.log(result);
    return result;
  }
}

module.exports = new User();
