const Response = require("../helper/errHandler");
const userModel = require("../model/user");
const CryptoJS = require("crypto-js");

const Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return Response.Error({
        res,
        status: 400,
        message: "Email and password are required",
      });
    }
    if (password.length < 6) {
      return Response.Error({
        res,
        status: 400,
        message: "Password must be at least 6 characters long",
      });
    }

    const getData = await userModel.findOne({ email: email });
    if (getData) {
      const obj = {
        res,
        status: 409,
        message: "user is all ready register",
      };
      return Response.Error(obj);
    }
    var encrypt = CryptoJS.AES.encrypt(
      password,
      process.env.SECRECT_KEY
    ).toString();
    req.body.password = encrypt;
    const saveData = await userModel.create({ email, password: encrypt });
    const obj = {
      res,
      status: 201,
      message: "user is register successfully",
      data: saveData,
    };
    return Response.success(obj);
  } catch (error) {
    const obj = {
      res,
      status: 500,
      message: error.message,
    };
    return Response.Error(obj);
  }
};

module.exports = Register;
