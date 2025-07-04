const Response = require("../helper/errHandler");
const blogModel = require("../model/blogdetailsModel");
const blogSchema = require("../model/blog");

//  Create Blog Card (Admin)
const createBlog = async (req, res) => {
  try {
    const { blog_title, date, blog_name } = req.body;
    const blog_images = req.file?.filename;

    if (!blog_title || !date || !blog_name || !blog_images) {
      return Response.Error({
        res,
        status: 400,
        message: "All fields are required.",
      });
    }

    const imageUrl = `https://agarissitsolution.in/api/uploads/${req.file.filename}`;

    const blog = await blogSchema.create({
      blog_images: imageUrl,
      // blog_image,
      blog_title,
      date,
      blog_name,
    });

    return Response.success({
      res,
      status: 201,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    return Response.Error({
      res,
      status: 500,
      message: error.message,
    });
  }
};

//  Update Blog Card (Admin)
const updateBlog = async (req, res) => {
  try {
    const { blog_title, date, blog_name } = req.body;
    const blog_image = req.file?.filename;
    const imageUrl = `https://agarissitsolution.in/api/uploads/${blog_image}`;
    const updatedBlog = await blogSchema.findByIdAndUpdate(
      req.params.id,
      {
        blog_title,
        date,
        blog_name,
        blog_images: imageUrl,
        // blog_image,
      },
      { new: true }
    );

    if (!updatedBlog) {
      return Response.Error({
        res,
        status: 404,
        message: "Blog not found for update",
      });
    }

    return Response.success({
      res,
      status: 200,
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    return Response.Error({
      res,
      status: 500,
      message: error.message,
    });
  }
};

//  Delete Blog Card (Admin)
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await blogSchema.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return Response.Error({
        res,
        status: 404,
        message: "Blog not found",
      });
    }

    return Response.success({
      res,
      status: 200,
      message: "Blog deleted successfully",
      data: deletedBlog,
    });
  } catch (error) {
    return Response.Error({
      res,
      status: 500,
      message: error.message,
    });
  }
};

//  Create Blog Details (Admin)
const createBlogDetails = async (req, res) => {
  try {
    const {
      blogId, // ✅ Accept blogId from request body
      blog_details,
    } = req.body;

    const bannerImage = req.files?.banner_images?.[0]?.filename || "";
    const blogImage = req.files?.blog_image?.[0]?.filename || "";
    const videoFile = req.files?.video_file?.[0]?.filename || "";

    const baseUrl = "https://agarissitsolution.in/api/uploads/";

    // ✅ Step 2: Create blog details using existing blogId
    const blogDetail = await blogModel.create({
      blogId,
      banner_images: baseUrl + bannerImage,
      blog_image: baseUrl + blogImage,
      blog_details,
      video_file: baseUrl + videoFile,
    });

    return Response.success({
      res,
      status: 200,
      message: "Blog details created successfully",
      data: { blogDetail },
    });
  } catch (err) {
    console.error("❌ Blog detail creation error:", err);
    return Response.Error({
      res,
      status: 500,
      message: err.message,
    });
  }
};

const updateBlogDetails = async (req, res) => {
  try {
    const {
      blogId, // ✅ Required to identify which blog to update
      blog_details,
    } = req.body;

    if (!blogId) {
      return Response.Error({
        res,
        status: 400,
        message: "blogId is required",
      });
    }

    const blogDetail = await blogModel.findOne({ blogId });

    if (!blogDetail) {
      return Response.Error({
        res,
        status: 404,
        message: "Blog not found",
      });
    }

    // ✅ Handle uploaded files
    const bannerImage = req.files?.banner_images?.[0]?.filename;
    const blogImage = req.files?.blog_image?.[0]?.filename;
    const videoFile = req.files?.video_file?.[0]?.filename;

    const baseUrl = "https://agarissitsolution.in/api/uploads/";

    // ✅ Update only the provided fields
    if (bannerImage) blogDetail.banner_images = baseUrl + bannerImage;
    if (blogImage) blogDetail.blog_image = baseUrl + blogImage;
    if (videoFile) blogDetail.video_file = baseUrl + videoFile;
    if (blog_details) blogDetail.blog_details = blog_details;

    await blogDetail.save();

    return Response.success({
      res,
      status: 200,
      message: "Blog details updated successfully",
      data: { blogDetail },
    });
  } catch (err) {
    console.error("❌ Blog detail update error:", err);
    return Response.Error({
      res,
      status: 500,
      message: err.message,
    });
  }
};

//  Delete Blog Details (Admin)
const deleteBlogDetails = async (req, res) => {
  try {
    const deletedData = await blogModel.findByIdAndDelete(req.params.id);

    if (!deletedData) {
      return Response.Error({
        res,
        status: 404,
        message: "Blog details not found",
      });
    }

    return Response.success({
      res,
      status: 200,
      message: "Blog details deleted successfully",
      data: deletedData,
    });
  } catch (error) {
    return Response.Error({
      res,
      status: 500,
      message: error.message,
    });
  }
};
//  Get Blog Details (User)

const getBlogDetails = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blogDetails = await blogModel.findOne({ blogId: blogId }); // ✅ Match custom field
    if (!blogDetails) {
      return Response.Error({
        res,
        status: 404,
        message: "Blog details not found",
      });
    }

    return Response.success({
      res,
      status: 200,
      message: "Blog details fetched successfully",
      data: blogDetails,
    });
  } catch (error) {
    return Response.Error({
      res,
      status: 500,
      message: error.message,
    });
  }
};

//  Get All Blogs (User)
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogSchema.find();

    return Response.success({
      res,
      status: 200,
      message: "All blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    return Response.Error({
      res,
      status: 500,
      message: error.message,
    });
  }
};
const getAllBlogsdetailsdata = async (req, res) => {
  try {
    const blogs = await blogModel.find();

    return Response.success({
      res,
      status: 200,
      message: "All blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    return Response.Error({
      res,
      status: 500,
      message: error.message,
    });
  }
};

module.exports = {
  createBlogDetails,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogDetails,
  getAllBlogsdetailsdata,
  getAllBlogs,
  deleteBlogDetails,
  updateBlogDetails,
};
