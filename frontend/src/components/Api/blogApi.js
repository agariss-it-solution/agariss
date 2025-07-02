// blogApi.js
export const fetchAllBlogs = async () => {
  try {
    const response = await fetch('http://31.97.63.245:3001/v1/blogall');
    // console.log("res",response);
    
    const data = await response.json();
    // console.log("🟢 API Raw Response:", data.data);

    // If your response is: { blogs: [...] }, return data.blogs
    if (Array.isArray(data.data)) {
      return data;
    } else if (Array.isArray(data.blogs)) {
      return data.blogs;
    } else {
      return [];
    }
  } catch (error) {
    console.error("🔴 API Fetch Error:", error);
    return [];
  }
};



