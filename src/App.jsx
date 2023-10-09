import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from "./Signup.jsx";
import Signin from "./Signin.jsx";
import Appbar from "./Appbar.jsx";
import Courses from "./Courses.jsx";
import Updatecourse from "./updateCourse.jsx";
import Getcourse from "./Getcourses.jsx";

function App() {
  return (
    <div style={{
    width:"100vw", 
    height: "100vh",
    backgroundColor:"black"}}>
      <Appbar/>
      <Router>
        <Routes>
          <Route path={"/signup"} element={<Signup/>} />
          <Route path={"/signin" }element={<Signin/>} />
          <Route path={"/createcourses" }element={<Courses/>} />
          <Route path={"/updatecourse" }element={<Updatecourse/>} />
          <Route path={"/getcourses" }element={<Getcourse/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;