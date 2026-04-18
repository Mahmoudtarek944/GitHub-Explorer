import { NavBar } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userame" />
        <Route path="bookmarks" />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
