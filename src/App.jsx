import { NavBar } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/user/:userame" />
        <Route path="bookmarks" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
