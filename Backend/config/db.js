const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB connected via MONGO_URI');
    } else {
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      await mongoose.connect(uri);
      console.log('MongoDB connected using in-memory server (dev)');
    }
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
