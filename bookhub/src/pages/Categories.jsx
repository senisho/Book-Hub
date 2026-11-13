import { useState } from "react";
import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getBooksByCategory } from "../services/googleBooksApi";

// A plain array of category names.
const CATEGORIES = ["Fiction", "Fantasy", "Science", "History", "Technology"];

function Categories() {
  const [selected, setSelected] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCategoryClick(category) {
    setSelected(category);
    setLoading(true);
    setError("");

    try {
      const results = await getBooksByCategory(category);
      setBooks(results);
    } catch (err) {
      setError(err.message);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="mb-3">Browse by Category</h1>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={selected === category ? "btn btn-primary" : "btn btn-outline-primary"}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {!selected && <p className="text-muted">Choose a category to see books.</p>}

      {loading && <LoadingSpinner />}

      {error && <div className="alert alert-danger">{error}</div>}

      {selected && !loading && !error && (
        <>
          <h4 className="mb-3">{selected} books</h4>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Categories;