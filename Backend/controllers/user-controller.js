const bcrypt = require("bcryptjs");
const Users = require("../models/Users");
const jwt = require("jsonwebtoken");
const { registerValidation } = require("../validation");

const Register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const emailExists = await Users.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).send("The email id is already registered.");
  }

  const mobileExists = await Users.findOne({ mobile: req.body.mobile });
  if (mobileExists) {
    return res.status(400).send("The mobile number is already registered.");
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );
  const user = new Users({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobile: req.body.mobile,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.send("Registration Successful!");
  } catch (err) {
    res.status(400).send(err);
  }
};

const Login = async (req, res) => {
  const user = await Users.findOne({ email: req.params.data });
  if (user) {
    const email = user.email;
    const mobile = user.mobile;
    try {
      const accessToken = jwt.sign(
        {email,
        mobile},
        process.env.SECRET_KEY_TO_ACCESS
      );
      const data = {
        accessToken,
        email,
        mobile
      };
      return res.json({ ...data });
    } catch (e) {
      console.log(e);
      return;
    }
  }

  const mob = await Users.findOne({ mobile: req.params.data });
  if (mob) {
    const email = mob.email;
    const mobile = mob.mobile;
    try {
      const accessToken = jwt.sign(
        {email,
        mobile},
        process.env.SECRET_KEY_TO_ACCESS
      );
      const data = {
        accessToken,
        email,
        mobile
      };
      return res.json({ ...data });
    } catch (e) {
      console.log(e);
      return;
    }
  }

  return res.send(false);
};

module.exports = { Register, Login };
