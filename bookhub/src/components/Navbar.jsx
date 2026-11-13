import { Link, NavLink } from "react-router-dom";

function Navbar() {
  // NavLink tells us if it is the current page, so we can highlight it
  const linkClass = ({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "");

  return (
    <nav className="navbar navbar-expand-md navbar-dark bookhub-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          📚 BookHub
        </Link>

        {/* Hamburger button (visible on small screens) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={linkClass} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/categories">
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;