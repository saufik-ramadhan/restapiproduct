const passwordDB = "admin";
const databaseName = "paketidDB";

module.exports = {
  // mongoURI: `mongodb+srv://admin:${passwordDB}@cluster0.1gdgb.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
  mongoURI:
    "mongodb://localhost:27017/?compressors=zlib&gssapiServiceName=mongodb",
};
