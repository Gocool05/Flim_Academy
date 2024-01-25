import "./App.css"
import Header from "./components/common/header/Header"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Admission from "./components/Admission/Admission"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Gallery from "./components/Gallery/Gallery"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/faq' component={Pricing} />
          <Route exact path='/contest' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/Admission' component={Admission} />
          <Route exact path='/Gallery' component={Gallery} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
