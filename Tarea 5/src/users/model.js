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
    const result = await collection.findOne({ _id: id });
    console.log(result);
    return result;
  }
}

module.exports = User;
