const Response = require("../../helper/errHandler");

const chatbot = async (message) => {
  try {
    if (typeof message !== "string") {
      return "Please send a valid text message.";
    }

    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
      return "Hi! How can I help you today? You can ask about our services or pricing.";
    } else if (
      message.includes("what is your service") ||
      message.includes("services do you provide")
    ) {
      return "We offer website development, mobile apps, admin panels, UI/UX design, and deployment support.";
    } else if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("website price")
    ) {
      return "Our pricing depends on your project requirements. Share your idea and we'll send a quote.";
    } else if (message.includes("hidden charge")) {
      return "No hidden charges. You'll get a clear breakdown before starting.";
    } else if (message.includes("technologies do you use")) {
      return "We use React, Node.js, MongoDB, Express, Firebase, and more for modern, scalable apps.";
    } else if (message.includes("mobile-friendly")) {
      return "Yes, all our websites and dashboards are responsive and work across mobile, tablet, and desktop devices.";
    } else if (message.includes("contact support")) {
      return "You can contact support via email at agarissitsolution@gmail.com or WhatsApp: https://api.whatsapp.com/send?phone=9925925113";
    } else if (
      message.includes("deployment") ||
      message.includes("hosting support")
    ) {
      return "Absolutely! We help you deploy your project to platforms like Render, Vercel, Netlify, or your own domain.";
    } else if (message.includes("do you provide hosting")) {
      return "Yes, we provide full support for hosting and deployment on Render, Vercel, Netlify, or your own server.";
    } else if (message.includes("domain and hosting setup")) {
      return "Yes, we help with full deployment and DNS/domain setup.";
    } else if (
      message.includes("how long") ||
      message.includes("time to ready website")
    ) {
      return "It depends on your project. A small business site takes around 3–7 days, while larger projects may take 2–4 weeks.";
    } else if (
      message.includes("how many days to make an app") ||
      message.includes("make an app or website")
    ) {
      return "Basic websites can be delivered in under a week. Apps or admin panels may take 1–3 weeks based on complexity.";
    } else if (message.includes("e-commerce")) {
      return "Yes! We build complete e-commerce solutions with cart, payment integration, and admin control.";
    } else if (message.includes("Do you provide maintenance")) {
      return "Yes, we provide ongoing website and app maintenance, including updates, bug fixes, and performance improvements.";
    } else if (message.includes("mobile") && message.includes("site")) {
      return "Yes, all our websites are fully responsive and mobile-friendly.";
    } else if (message.includes("bye")) {
      return "Goodbye! Feel free to reach out anytime on WhatsApp.";
    } else if (
      message.includes("how to build a website") ||
      message.includes("website steps")
    ) {
      return "Building a website involves several steps:\n1. Plan your website\n2. Design the layout\n3. Develop frontend and backend\n4. Test everything\n5. Deploy it live\nWant more details on any step?";
    } else if (message.includes("step 1") || message.includes("plan website")) {
      return "Step 1: Planning your website includes choosing your goal, your audience, what pages you need, and how your site should work.";
    } else if (
      message.includes("step 2") ||
      message.includes("design layout")
    ) {
      return "Step 2: Designing the layout involves creating wireframes or mockups using tools like Figma, Canva, or Adobe XD.";
    } else if (
      message.includes("step 3") ||
      message.includes("frontend and backend")
    ) {
      return "Step 3: Development. Frontend includes HTML, CSS, JavaScript (or frameworks like React). Backend may include Node.js, Express, and MongoDB.";
    } else if (message.includes("step 4") || message.includes("testing")) {
      return "Step 4: Testing your website includes checking responsiveness, functionality, and fixing any bugs or broken links.";
    } else if (
      message.includes("step 5") ||
      message.includes("deployment") ||
      message.includes("hosting")
    ) {
      return "Step 5: Deployment. You can host your website using Vercel, Netlify, Render, or your own domain hosting provider.";
    } else {
      return `For more information, please contact us on WhatsApp: <a href="https://api.whatsapp.com/send?phone=9925925113" target="_blank" style="color:blue;">Click here</a>`;
    }
  } catch (error) {
    return Response.Error({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = chatbot;
