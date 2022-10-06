require("dotenv").config();
const sequelize = require("./db");
const express = require("express");
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const PORT = process.env.PORT || 8085;

const app = express();
app.use(cors()); //???
app.use(express.json()); //???
app.use(fileUpload({}));
app.use("/api", router);

//обработка ошибок, последний мидлвейр
app.use(errorHandler);
app.get("/", (req, res) => {
  res.status(200).json({}); //???
});
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`All right on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
