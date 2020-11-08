const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { getFoods , getEachFoodDetails} = require("../controllers/food-controller");
const { Register, Login } = require("../controllers/user-controller");

router.get("/", getFoods);

router.post("/register", Register);

router.get("/login/:data", Login);

router.get('/singleFoodDetails/:id' , getEachFoodDetails)

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
