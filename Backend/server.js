const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const FoodLists = require("./models/Foods");
const food_list = require("./foodList");
const router = require("./routes/routes");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log("Connection to database Failed");
    } else {
      console.log("Connection to database Successfully");
      // FoodLists.insertMany(food_list)
      //          .then(() => console.log("Inserted Successfully"))
      //          .catch((err) => console.log(err))
    }
  }
);

app.use("/", router);
app.listen(8000, () => {
  console.log("Server is running successfully at port 8000");
});
