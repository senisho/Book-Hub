import { useState } from "react";

function SearchBar({ onSearch, initialValue = "" }) {
  // "text" holds whatever the user has typed so far
  const [text, setText] = useState(initialValue);

  function handleSubmit(event) {
    event.preventDefault(); // Stop the browser from reloading the page
    if (text.trim() === "") return; // Ignore empty searches
    onSearch(text.trim());
  }

  return (
    <form className="input-group input-group-lg mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Search by title, author or keyword..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;