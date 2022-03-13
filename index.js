require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const authRoute = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Atlas Connnected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
