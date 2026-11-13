import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      {/* Navbar is outside <Routes>, so it stays visible on every page */}
      <Navbar />

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/categories" element={<Categories />} />
          {/* path="*" matches any URL not listed above */}
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;