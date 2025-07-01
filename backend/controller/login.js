const Response = require("../helper/errHandler");
const userModel = require("../model/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const obj = {
        res,
        status: 400,
        message: "Email and password are required",
      };
      return Response.Error(obj);
    }
    const user = await userModel.findOne({ email: email });
    if (!user) {
      const obj = {
        res,
        status: 400,
        message: "user not found",
      };
      return Response.Error(obj);
    }
    var bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRECT_KEY);
    var decrypt = bytes.toString(CryptoJS.enc.Utf8);
    var encrypt = CryptoJS.AES.encrypt(
      user.id,
      process.env.SECRECT_KEY
    ).toString();
    if (decrypt !== password) {
      const obj = {
        res,
        status: 409,
        message: "wrong password",
      };
      return Response.Error(obj);
    }
    const token = jwt.sign(
      {
        id: encrypt,
        role: user.role,
      },
      process.env.JWT_KEY,
      { expiresIn: "30m" }
    );
    const obj = {
      res,
      status: 200,
      message: " login success",
      data: {user,token},
    };
    return Response.success(obj);
  } catch (error) {
    const obj = {
      res,
      status: 500,
      message: "Internal Server Error",
    };
    return Response.Error(obj);
  }
};
module.exports = login;
