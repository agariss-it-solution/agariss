const API_URL = "http://localhost:3001/v1/openingdata"
const FORM_API ="http://localhost:3001/v1/apply"
export const fetchJobs = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }

    const data = await response.json();
    // console.log("Fetched jobs:", data.data);

    // Assuming your array is in `data.data` or similar:
    return Array.isArray(data) ? data : data.openings || data.data || [];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};
export const submitApplication = async (formData) => {
  try {
    const response = await fetch(FORM_API, {
      method: "POST",
      body: formData, // must be FormData object
    });

    if (!response.ok) {
      throw new Error("Failed to submit application");
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false };
  }
};
