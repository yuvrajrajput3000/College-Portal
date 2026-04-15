import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Login from "../pages/auth/Login";
import Home from "../pages/auth/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;