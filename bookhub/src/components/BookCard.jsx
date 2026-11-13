import { Link } from "react-router-dom";

// Props: book = the book object to display
function BookCard({ book }) {
  return (
    // "col" makes this card one cell of the Bootstrap grid (the parent is a "row")
    <div className="col">
      <div className="card h-100 shadow-sm book-card">
        <img
          src={book.cover}
          className="card-img-top book-cover"
          alt={`Cover of ${book.title}`}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title book-title">{book.title}</h5>
          <p className="card-text text-muted">{book.authors}</p>

          <div className="mt-auto d-grid">
            <Link to={`/book/${book.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;