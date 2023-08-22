import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Authentication/AuthPage";
import CreateBlog from "./pages/BlogPost/CreateBlog";

// import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/blog/create" element={<CreateBlog />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
