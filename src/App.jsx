import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import RegisterPage from "./pages/RegisterPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="w-full h-dvh bg-creamy text-black">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<h1>Dashboard Page</h1>} />
            <Route path="food & drinks" element={<h1>food & drinks Page</h1>} />
            <Route path="messages" element={<h1>messages Page</h1>} />
            <Route path="bills" element={<h1>bills Page</h1>} />
            <Route path="settings" element={<h1>settings Page</h1>} />
            <Route path="notifications" element={<h1>notifications Page</h1>} />
            <Route path="support" element={<h1>support Page</h1>} />
          </Route>

          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="*" element={<h1>Error 404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
