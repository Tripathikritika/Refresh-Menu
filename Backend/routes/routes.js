const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { getFoods , getEachFoodDetails ,searchFoodItem ,filterItems} = require("../controllers/food-controller");
const { Register, Login } = require("../controllers/user-controller");
const { Order, Capture } = require("../controllers/rpay-controller");

router.get("/", getFoods);

router.post("/register", Register);

router.get("/login/:data", Login);

router.get('/singleFoodDetails/:id' , getEachFoodDetails)

router.get("/order/:price", Order);

router.post("/capture/:paymentId", Capture);

router.get('/searchItem' ,searchFoodItem)

router.get('/filterItem',filterItems)

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET_KEY_TO_ACCESS, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

module.exports = router;
