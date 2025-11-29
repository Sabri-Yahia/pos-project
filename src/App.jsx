import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";

export default function App() {
  return (
    <div className="w-full h-dvh bg-creamy text-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<h1>Home Page</h1>} />
            <Route path="dashboard" element={<h1>Dashboard Page</h1>} />
            <Route path="food & drinks" element={<h1>food & drinks Page</h1>} />
            <Route path="messages" element={<h1>messages Page</h1>} />
            <Route path="bills" element={<h1>bills Page</h1>} />
            <Route path="settings" element={<h1>settings Page</h1>} />
            <Route path="notifications" element={<h1>notifications Page</h1>} />
            <Route path="support" element={<h1>support Page</h1>} />
          </Route>

          <Route path="login" element={<h1>Login Page</h1>} />
          <Route path="register" element={<h1>Register Page</h1>} />

          <Route path="*" element={<h1>Error 404 | Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
