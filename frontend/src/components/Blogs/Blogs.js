import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllBlogs } from '../Api/blogApi';
import { FaArrowRight } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Blogs.css'
import Footer from "../Footer/footer"

import tableImage from './Images/tablet-which-you-can-read-blog 1.png';
import logo from '../Images/Remove_background_project-removebg-preview 1.png';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
   

  useEffect(() => {
    const getBlogs = async () => {
      const fetchedBlogs = await fetchAllBlogs();
      setBlogs(fetchedBlogs.data);
    };
    getBlogs();
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Banner */}
      <div className="text-center">
        <img src={tableImage} alt="Blog Preview" className="img-fluid w-100" />
      </div>

      {/* Blog Header Section */}
      <div className="text-center py-5">
        <p className="title fw-bold fs-5">Stay Updated</p>
        <h2 className="fw-bold sub-title responsive-title">Discover the Latest News & Insights.</h2>
        <p className="portfolio-subheading fs-7 fs-lg-3 fw-normal blog-subheading mb-4">Stay informed with the most popular stories and blog posts.</p>
      </div>

      {/* Blog List Grid */}
      <div className="container pb-5">
        <div className="row">
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={blog.blog_images}
                    alt={blog.blog_title}
                    className="card-img-top"
                    crossOrigin="anonymous"
                  />
                  <div className="card-body">
                    <h5 className="card-title fs-7 text-color">{blog.blog_title}</h5>
                    <p className="text-muted fs-7 small mb-1">{blog.date}</p>
                    <p className="card-text text-dark fw-semibold">{blog.blog_name}</p>
                  </div>
                  <div className="py-3 bg-white hover-text border-top-0">
                    <Link to={`/blogs/${blog._id || index}`} className="btn">
                      View Details <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-danger">⚠️ No blogs available.</p>
          )}
        </div>
      </div>
          <Footer />
    </div>
  );
};

export default Blogs;
