import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
