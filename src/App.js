import "./App.css";
import React, {useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/common/header/Header";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Admission from "./components/Admission/Admission";
import Gallery from "./components/Gallery/Gallery";
import EnrollmentModal from "./components/common/EnrollNow/Enroll";
import { Login } from "./components/Login/Login";
import GoogleAuthCallback from "./components/GoogleAuthCallback";
import ScrollToTop from "./ScrollToTop";
import ImageModal from "./components/common/ImageModal/imageModal";

function App() {

  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    // Close the modal after 5 seconds (adjust as needed)
    const timeout = setTimeout(() => {
      setModalOpen(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  // const login = localStorage.getItem('islogin');
  return (
    <Router>
      <div>
        {/* {login ? ( */}
          <>
            <Header />
            <ScrollToTop />
              <ImageModal open={modalOpen} onClose={() => setModalOpen(false)} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/courses' element={<CourseHome />} />
              <Route path='/team' element={<Team />} />
              <Route path='/faq' element={<Pricing />} />
              <Route path='/contest' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Admission' element={<Admission />} />
              <Route path='/Gallery' element={<Gallery />} />
              <Route path='/Enroll' element={<EnrollmentModal />} />
            </Routes>
            <Footer />
          </>
        ) 
        {/* : (
          <Routes>
            <Route path='/Auth' element={<GoogleAuthCallback />} />
            <Route path='/' element={<Login />} />
          </Routes>
        )} */}
      </div>
    </Router>
  );
}

export default App;
