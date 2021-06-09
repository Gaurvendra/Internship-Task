const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

exports.updateCart = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      var newToken = token.substring(7, token.length);
      const decodedToken = jwt.decode(newToken);
      const { items } = req.body;

      const query = { _id: decodedToken._id };
      const updateObj = {
        $set: {
          "cart.items": items,
        },
      };
      const { cart } = await userModel.findOneAndUpdate(query, updateObj, {
        new: true,
      });
      return res.status(200).json({ data: cart });
    } else {
      return res.status(404);
    }
  } catch (err) {
    console.log(err);
    return res.status(504).json({ message: "Something went wrong" });
  }
};

exports.getCart = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      var newToken = token.substring(7, token.length);

      const decodedToken = jwt.decode(newToken);

      const query = { _id: decodedToken._id };
      const obj = await userModel.findOne(query).populate({
        path: "cart.items.item_id",
        select: "name category",
      });

      return res.status(200).json({ data: obj.cart });
    } else {
      return res.status(404);
    }
  } catch (err) {
    console.log(err);
    return res.status(504).json({ message: "Something went wrong" });
  }
};
