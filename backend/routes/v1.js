const express = require("express");
const swaggerUi = require("swagger-ui-express");
const app = express();

// Middleware
const upload = require("../middleware/multer");

// Swagger Documentation
const swaggerDocument = require("./view/swagger.json");
app.use("/swagger", swaggerUi.serve);
app.get("/swagger", swaggerUi.setup(swaggerDocument));

// Controllers
const register = require("../controller/register");
const contact = require("../controller/contactus");
const opening = require("../controller/opening");
const openingapply = require("../controller/oppeningapply");
const work = require("../controller/work");
const createBlog = require("../controller/blog");
const chat = require("../controller/chatroute");
const login = require("../controller/login");

//login/register
app.post("/register", register);
app.post("/login", login);

//  Contact Routes
app.post("/contact", contact.Contactus);
app.get("/contactdata", contact.contactData);
app.delete("/contactdelete/:id", contact.contactDelete);

//  Opening Routes
app.post("/opening", opening.createOpening);
app.put("/updateopening/:id", opening.updateOpening);
app.get("/openingdata", opening.openingData);
app.delete("/openingdelete/:id", opening.deleteOpening);

//  Opening Apply Routes
app.post("/apply", upload.single("resume"), openingapply.applyToOpening);
app.get("/applydata", openingapply.applyData);
app.delete("/applydatadelete/:id", openingapply.deleteOpening);

//  Work/Project Routes
app.post("/work", upload.single("image"), work.creatework);
app.get("/workdata", work.workdata);
app.put("/workupdate/:id", upload.single("image"), work.updateWork);
app.delete("/workdelete/:id", work.deleteWork);

//  Blog Routes
// Blog Details (with banner images)
app.post(
  "/blogdetails",
  upload.fields([
    // { name: "banner_images", maxCount: 1 },
 { name: "banner_images", maxCount: 1 },
  { name: "blog_image", maxCount: 1 },
  { name: "video_file", maxCount: 1 },
  ]),
  createBlog.createBlogDetails
);
app.put(
  "/blogdetails/:id",
  upload.fields([
    { name: "banner_images", maxCount: 1 },
    { name: "blog_image", maxCount: 1 },
    { name: "video_file", maxCount: 1 },
  ]),
  createBlog.updateBlogDetails
);
app.delete("/blogdetaildelete/:id", createBlog.deleteBlogDetails);
app.get("/blogdata/:blogId", createBlog.getBlogDetails);
app.get("/blogdetailsAll", createBlog.getAllBlogsdetailsdata);

// Blog Card
app.post("/blog", upload.single("blog_images"), createBlog.createBlog);
app.put("/blogupdate/:id", upload.single("blog_images"), createBlog.updateBlog);
app.delete("/blogdelete/:id", createBlog.deleteBlog);
app.get("/blogall", createBlog.getAllBlogs);

//chatbot
app.post("/chat", chat);
module.exports = app;
