import React, { useState, useEffect } from "react";
import { fetchProjectData } from "../Api/ViewDetails";
import { useParams } from "react-router-dom";
import "./ViewDetails"
import Footer from "../Footer/footer"

function ViewDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProjectData() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjectData(id);
        setProject(data?.data);
        // console.log('data :>> ', data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    if (id) {
      getProjectData();
    }
  }, [id]);

  if (loading) return <p className="text-center my-5">Loading...</p>;
  if (error) return <p className="text-center text-danger my-5">Error: {error?.message || "Something went wrong"}</p>;
  if (!project) return <p className="text-center my-5">No data available</p>;

  return (
    <div className="container-fluid px-0">

      {/* Full Width Banner Image */}
      <div className="w-100">
        <img
          src={project?.banner_images}
          alt="Project Banner"
          className="img-fluid w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          crossOrigin="anonymous"
        />
      </div>

      {/* Blog Image */}
      <div className="container px-3 px-lg-5  my-5 fs-6">
        <div className="bg-white rounded  shadow-sm p-4">

          {/* Centered Blog Image */}
          <div className="text-center mb-4">
            <img
              src={project?.blog_image}
              alt="Project Blog"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "100%", height: "auto" }}
              crossOrigin="anonymous"
            />
          </div>

          <div className="container">
            <div
              className="blog-html-content fs-7  fs-lg-3 "
              dangerouslySetInnerHTML={{
                __html: project.blog_details.replace(/^"|"$/g, ""), // clean outer quotes
              }}
            ></div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ViewDetails;