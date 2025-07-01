import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar'; // make sure path is correct
import WebDevelopment from "./components/Services/pages/WebDevelopment";
import AppDevelopment from "./components/Services/pages/AppDevelopment";
import UiUxDesign from "./components/Services/pages/UiUxDesign";
import SoftwareDevelopment from "./components/Services/pages/SoftwareDevelopment";
import DigitalMarketing from "./components/Services/pages/DigitalMarketing";
import EcommerceDevelopment from "./components/Services/pages/EcommerceDevelopment";
import DesktopApps from "./components/Services/pages/DesktopApps";
// import Smtpsolution from "./components/Services/pages/Smtpsolution";
// import Enterpricesolution from "./components/Services/pages/Enterpricesolution";
import ViewDetails from "./components/Blogs/ViewDetails";
import ScrollControlButton from "./components/Scrollbtn/Scrollbtn";
import Chatbot  from  "./components/Chatbot/Chatbot"
import "./App.css"
function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content zoom-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/desktop-apps" element={<DesktopApps />} />
          {/* <Route path="/smtp-solution"element={<Smtpsolution  />}/>
          <Route path="/enterprise" element={<Enterpricesolution />} /> */}
           <Route path="/blogs/:id" element={<ViewDetails />} /> {/* Route to new page */}
           

        </Routes>
        <ScrollControlButton/>
        <Chatbot/>
      </main>
    </Router>
  );
}

export default App;
