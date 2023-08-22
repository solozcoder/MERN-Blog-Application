const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb://127.0.0.1:27017/blogs?retryWrites=true&w=majority";

const CONNECTION_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
};

const getConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URI, CONNECTION_OPTIONS);
    console.log("[+] Connected to MongoDB");
  } catch (error) {
    console.error("[-] MongoDB connection error:", error);
    console.log("Reconnect...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await getConnection(); // Recursively call connectToMongoDB
  }
};

module.exports = { getConnection };
