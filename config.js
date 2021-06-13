const dotenv = require("dotenv");

dotenv.config();

module.exports  = ({
  dbUser: process.env.MONGO_USER,
  dbPassword: process.env.MONGO_PASSWORD,
  db: process.env.MONGO_DB,
});
