// Base URL of the Google Books API
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

// Read the API key from the .env.local file
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

// A grey "No Cover" image, used when a book has no cover picture
const NO_COVER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="192">' +
      '<rect width="100%" height="100%" fill="#e5e7eb"/>' +
      '<text x="50%" y="50%" font-family="Arial" font-size="14" fill="#6b7280" text-anchor="middle">No Cover</text>' +
      "</svg>"
  );

// Convert one raw Google Books item into a simple, clean book object
function formatBook(item) {
  const info = item.volumeInfo || {};
  const cover = info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail;

  return {
    id: item.id,
    title: info.title || "Untitled",
    authors: info.authors ? info.authors.join(", ") : "Unknown author",
    publisher: info.publisher || "Unknown publisher",
    publishedDate: info.publishedDate || "Unknown",
    categories: info.categories ? info.categories.join(", ") : "Uncategorized",
   
    description: info.description
      ? info.description.replace(/<[^>]+>/g, "")
      : "No description available.",
    
    cover: cover ? cover.replace("http://", "https://") : NO_COVER,
  };
}

// Shared helper: builds the URL, calls the API, and checks for errors
async function fetchFromApi(path, params = {}) {
  const query = new URLSearchParams(params);
  if (API_KEY) {
    query.set("key", API_KEY);
  }

  const response = await fetch(`${BASE_URL}${path}?${query}`);

  // error check
  if (!response.ok) {
    throw new Error(`Request failed (status ${response.status}). Please try again.`);
  }

  return response.json();
}

// Search books by any text (title, author, keyword)
export async function searchBooks(searchText) {
  const data = await fetchFromApi("", { q: searchText, maxResults: 20 });
  // When nothing is found
  return (data.items || []).map(formatBook);
}

// Get one book by its id
export async function getBookById(id) {
  const data = await fetchFromApi(`/${id}`);
  return formatBook(data);
}

// Get books for a category using Google's "subject:" search filter
export async function getBooksByCategory(category) {
  return searchBooks(`subject:${category}`);
}