const mongoose = require("mongoose");
const blogDetailSchema = new mongoose.Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog.js", // 👈 Must match the model name from Blog.js
      required: true,
    },
    banner_images: {
      type: String,
    },
    blog_image: {
      type: String,
    },
    blog_details:{
      type:String
    }
  //   projectBy: String,
  //   client: String,
  //   industry: String,
  //   serviceType: String,
  //   duration: String,
  //   clientOverview: String,
  //   objectives: [String],
  //   features: {
  //     customerApp: [String],
  //     serviceProviderPortal: [String],
  //     adminPanel: [String],
  //   },
  //   testingProcess: [String],
  //   deployment: [String],
  //   clientFeedback: String,
  //   keyTakeaways: [String],
  //   video_file: {
  //     type: String,
  //   },
  //    projectPhases: [
  //     {
  //       phaseTitle: String,
  //       description: [String], // Each phase can have multiple bullet points
  //     }
  //   ],

  //   // ✅ Optional: Results Section
  //   results: [String],
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("blogDetailSchema", blogDetailSchema);
