const Response = require("../helper/errHandler");
const chatbot=require("./service/chatbot");
const chat = async (req, res) => {
  try {
    const userMessage = req.body.message;
    const reply = await chatbot(userMessage);
    const obj = {
      res,
      status: 200,
      message: reply,
    };
    return Response.success(obj);
  } catch (error) {
    const obj = {
        res,
        status: 500,
        message: error.message,
    }
    return Response.Error(obj);
};
}
module.exports = chat
