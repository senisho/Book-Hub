import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { searchBooks } from "../services/googleBooksApi";
import { getLastSearch, saveLastSearch } from "../services/storage";

function Home() {
  // The last search text, remembered from localStorage
  const [lastSearch] = useState(getLastSearch);

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // Runs when the user presses Search
  async function handleSearch(searchText) {
    setLoading(true);
    setError("");
    setHasSearched(true);
    saveLastSearch(searchText);

    try {
      const results = await searchBooks(searchText);
      setBooks(results);
    } catch (err) {
      setError(err.message);
      setBooks([]);
    } finally {
      // finally runs whether the request succeeded or failed
      setLoading(false);
    }
  }

  // When the page opens, repeat the last search
  useEffect(() => {
    if (lastSearch) {
      handleSearch(lastSearch);
    }
    
  }, []); // Empty [] = run only once, when the page first appears

  return (
    <div>
      <h1 className="mb-3">Discover Books</h1>
      <SearchBar onSearch={handleSearch} initialValue={lastSearch} />

      {loading && <LoadingSpinner />}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && !hasSearched && (
        <p className="text-muted">Search for a book to get started.</p>
      )}

      {!loading && !error && hasSearched && books.length === 0 && (
        <p className="text-muted">No books found. Try a different search.</p>
      )}

      {/* Responsive grid: 1 column on phones, up to 4 on large screens */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {!loading && books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
}

export default Home;