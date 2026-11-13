import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { getBookById } from "../services/googleBooksApi";

function BookDetails() {
  const { id } = useParams(); // Reads :id from the URL /book/:id
  const navigate = useNavigate(); // Lets us go back programmatically

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the book whenever the id in the URL changes
  useEffect(() => {
    let ignore = false; // Prevents updating state if the user already left the page

    async function loadBook() {
      setLoading(true);
      setError("");
      try {
        const data = await getBookById(id);
        if (!ignore) setBook(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadBook();

    // Cleanup function: runs when the component unmounts or id changes
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <div>
      <button className="btn btn-outline-primary mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {loading && <LoadingSpinner />}

      {error && <div className="alert alert-danger">{error}</div>}

      {book && !loading && (
        <div className="row g-4">
          <div className="col-md-4 text-center">
            <img src={book.cover} alt={`Cover of ${book.title}`} className="img-fluid rounded shadow" />
          </div>

          <div className="col-md-8">
            <h1>{book.title}</h1>
            <p className="lead text-muted">{book.authors}</p>

            <ul className="list-unstyled">
              <li><strong>Publisher:</strong> {book.publisher}</li>
              <li><strong>Published:</strong> {book.publishedDate}</li>
              <li><strong>Categories:</strong> {book.categories}</li>
            </ul>

            <h4>Description</h4>
            <p>{book.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetails;