const BLOG_DETAIL_API = "https://agarissitsolution.in/v1/blogdata";

// Corrected:
export async function fetchProjectData(id) {
  // console.log("Fetching project data from API...");

  try {
    const res = await fetch(`${BLOG_DETAIL_API}/${id}`);

    // console.log("API responded with status:", res);

    if (!res.ok) {
      throw new Error(`Failed to fetch project data. Status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data.data);
    

    // console.log("Received data from API:", data?.data);
    return data;
  } catch (err) {
    console.error("Error fetching project data:", err);
    return null; // fallback to null if something goes wrong
  }
}

