import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
