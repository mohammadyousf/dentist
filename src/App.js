
import Footer from './Footer';
import Navebar from './Navebar';
import Detailes from './Detailes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Containt from './Containt';
import Createbooking from './Createbooking';
import Booking from './Booking';
import Edit_booking from './Edit_booking';
import Signup from './Signup';
import Login from './Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Navebar />

        <Routes>

          <Route path="/" element={<Containt />}></Route>
          <Route path="/Detailes/:id" element={<Detailes />}></Route>
          <Route path="/Createbooking" element={<Createbooking />}></Route>
          <Route path="/Edit_booking/:id" element={<Edit_booking />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Booking/:id" element={<Booking />}></Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
