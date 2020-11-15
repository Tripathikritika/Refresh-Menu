const { v4: uuid } = require("uuid");
const Razorpay = require("razorpay");
const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const Order = (req, res) => {
  try {
    const options = {
      amount: req.params.price * 100,
      currency: "INR",
      receipt: uuid(),
      payment_capture: 0,
    };
    instance.orders.create(options, (err, order) => {
      if (err) {
        return res.status(500).json({ message: "Something went wrong!" });
      }
      return res.json(order);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

const Capture = (req, res) => {
  try {
    return request(
      {
        method: "POST",
        url: `https://${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form: {
          amount: req.body.price * 100,
          currency: "INR",
        },
      },
      async function (err, response, body) {
        // console.log(req.body)
        // console.log(res)
        if (err) {
          return res.status(500).json({
            message: "Something Went Wrong!",
          });
        }
        return res.status(200).json(body);
      }
    );
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({
      message: "Something went wrong!",
    });

  }
};

module.exports = { Order, Capture };
