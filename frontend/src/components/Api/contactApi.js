// src/api/contactApi.js

const API_URL = "https://agarissitsolution.in/api/v1/contact"; // ✅ Replace with your actual backend endpoint

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text(); // To read backend message
      throw new Error(`Failed to submit form: ${errorText}`);
    }

    return await response.json(); // Or .text() if API sends plain string
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};

