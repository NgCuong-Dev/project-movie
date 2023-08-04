import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import Login from "./Page/LoginPage/LoginPage";
import Register from "./Page/RegisterPage/RegisterPage";
import Details from "./Page/HomePage/DetailsPage/Details";
import Layout from "./Components/Layout/Layout";
import Booking from "./Page/BookingPage/Booking";
import PageNotFound from "./Page/PageNotFound/PageNotFound";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<Layout Component={Details} />} />
          <Route path="/booking/:id" element={<Layout Component={Booking} />} />
          <Route path="*" element={<Layout Component={PageNotFound} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
